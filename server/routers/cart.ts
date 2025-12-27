import { z } from "zod";
import { protectedProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { cartItems, products, productStock, sizes } from "../../drizzle/schema";
import { eq, and } from "drizzle-orm";

const addItemSchema = z.object({
  productId: z.number(),
  sizeId: z.number(),
  quantity: z.number().min(1),
});

const updateQuantitySchema = z.object({
  cartItemId: z.number(),
  quantity: z.number().min(1),
});

export const cartRouter = router({
  list: protectedProcedure.query(async ({ ctx }) => {
    const db = await getDb();
    if (!db) throw new Error("Database connection failed");

    try {
      const items = await db
        .select({
          id: cartItems.id,
          productId: cartItems.productId,
          sizeId: cartItems.sizeId,
          quantity: cartItems.quantity,
          productName: products.name,
          productPrice: products.price,
          sizeName: sizes.name,
        })
        .from(cartItems)
        .innerJoin(products, eq(cartItems.productId, products.id))
        .innerJoin(sizes, eq(cartItems.sizeId, sizes.id))
        .where(eq(cartItems.userId, ctx.user.id));

      return items;
    } catch (error) {
      console.error("Error fetching cart:", error);
      throw error;
    }
  }),

  add: protectedProcedure
    .input(addItemSchema)
    .mutation(async ({ input, ctx }) => {
      const db = await getDb();
      if (!db) throw new Error("Database connection failed");

      try {
        const product = await db
          .select()
          .from(products)
          .where(eq(products.id, input.productId))
          .limit(1);

        if (!product.length) {
          throw new Error("Product not found");
        }

        const stock = await db
          .select()
          .from(productStock)
          .where(
            and(
              eq(productStock.productId, input.productId),
              eq(productStock.sizeId, input.sizeId)
            )
          )
          .limit(1);

        const stockItem = stock[0];
        if (!stockItem || (stockItem.quantity ?? 0) < input.quantity) {
          throw new Error("Insufficient stock");
        }

        const existingItem = await db
          .select()
          .from(cartItems)
          .where(
            and(
              eq(cartItems.userId, ctx.user.id),
              eq(cartItems.productId, input.productId),
              eq(cartItems.sizeId, input.sizeId)
            )
          )
          .limit(1);

        if (existingItem.length && existingItem[0]) {
          await db
            .update(cartItems)
            .set({
              quantity: existingItem[0].quantity + input.quantity,
            })
            .where(eq(cartItems.id, existingItem[0].id));
        } else {
          await db.insert(cartItems).values({
            userId: ctx.user.id,
            productId: input.productId,
            sizeId: input.sizeId,
            quantity: input.quantity,
          });
        }

        return { success: true };
      } catch (error) {
        console.error("Error adding to cart:", error);
        throw error;
      }
    }),

  updateQuantity: protectedProcedure
    .input(updateQuantitySchema)
    .mutation(async ({ input, ctx }) => {
      const db = await getDb();
      if (!db) throw new Error("Database connection failed");

      try {
        const item = await db
          .select()
          .from(cartItems)
          .where(eq(cartItems.id, input.cartItemId))
          .limit(1);

        if (!item.length || item[0].userId !== ctx.user.id) {
          throw new Error("Cart item not found");
        }

        await db
          .update(cartItems)
          .set({ quantity: input.quantity })
          .where(eq(cartItems.id, input.cartItemId));

        return { success: true };
      } catch (error) {
        console.error("Error updating cart quantity:", error);
        throw error;
      }
    }),

  remove: protectedProcedure
    .input(z.number())
    .mutation(async ({ input: cartItemId, ctx }) => {
      const db = await getDb();
      if (!db) throw new Error("Database connection failed");

      try {
        const item = await db
          .select()
          .from(cartItems)
          .where(eq(cartItems.id, cartItemId))
          .limit(1);

        if (!item.length || item[0].userId !== ctx.user.id) {
          throw new Error("Cart item not found");
        }

        await db.delete(cartItems).where(eq(cartItems.id, cartItemId));

        return { success: true };
      } catch (error) {
        console.error("Error removing from cart:", error);
        throw error;
      }
    }),

  clear: protectedProcedure.mutation(async ({ ctx }) => {
    const db = await getDb();
    if (!db) throw new Error("Database connection failed");

    try {
      await db.delete(cartItems).where(eq(cartItems.userId, ctx.user.id));

      return { success: true };
    } catch (error) {
      console.error("Error clearing cart:", error);
      throw error;
    }
  }),
});
