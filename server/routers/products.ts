import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { products, productImages, productStock, sizes, categories, brands } from "../../drizzle/schema";
import { eq, and, like, between } from "drizzle-orm";

const filterSchema = z.object({
  categoryId: z.number().optional(),
  brandId: z.number().optional(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
  sizeIds: z.array(z.number()).optional(),
  page: z.number().default(1),
  limit: z.number().default(12),
  sortBy: z.enum(["price_asc", "price_desc", "newest", "popular"]).optional(),
});

const searchSchema = z.object({
  query: z.string().min(1),
  page: z.number().default(1),
  limit: z.number().default(12),
});

export const productsRouter = router({
  list: publicProcedure
    .input(filterSchema)
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database connection failed");

      try {
        const conditions: any[] = [];

        if (input.categoryId) {
          conditions.push(eq(products.categoryId, input.categoryId));
        }

        if (input.brandId) {
          conditions.push(eq(products.brandId, input.brandId));
        }

        if (input.minPrice !== undefined || input.maxPrice !== undefined) {
          const min = input.minPrice ?? 0;
          const max = input.maxPrice ?? 999999;
          conditions.push(between(products.price as any, min as any, max as any));
        }

        let query = db.select().from(products) as any;

        if (conditions.length > 0) {
          query = query.where(and(...conditions));
        }

        if (input.sortBy === "price_asc") {
          query = query.orderBy(products.price);
        } else if (input.sortBy === "price_desc") {
          query = query.orderBy(products.price);
        } else if (input.sortBy === "newest") {
          query = query.orderBy(products.createdAt);
        }

        const offset = (input.page - 1) * input.limit;
        const result = await query.limit(input.limit).offset(offset);

        const productsWithImages = await Promise.all(
          result.map(async (product: any) => {
            const images = await db
              .select()
              .from(productImages)
              .where(eq(productImages.productId, product.id))
              .orderBy(productImages.displayOrder);

            return {
              ...product,
              images,
            };
          })
        );

        return productsWithImages;
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    }),

  search: publicProcedure
    .input(searchSchema)
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database connection failed");

      try {
        const searchTerm = `%${input.query}%`;

        const result = await db
          .select()
          .from(products)
          .where(like(products.name, searchTerm))
          .limit(input.limit)
          .offset((input.page - 1) * input.limit);

        const productsWithImages = await Promise.all(
          result.map(async (product: any) => {
            const images = await db
              .select()
              .from(productImages)
              .where(eq(productImages.productId, product.id))
              .orderBy(productImages.displayOrder);

            return {
              ...product,
              images,
            };
          })
        );

        return productsWithImages;
      } catch (error) {
        console.error("Error searching products:", error);
        throw error;
      }
    }),

  getById: publicProcedure
    .input(z.number())
    .query(async ({ input: productId }) => {
      const db = await getDb();
      if (!db) throw new Error("Database connection failed");

      try {
        const product = await db
          .select()
          .from(products)
          .where(eq(products.id, productId))
          .limit(1);

        if (!product.length) {
          throw new Error("Product not found");
        }

        const prod = product[0];

        const images = await db
          .select()
          .from(productImages)
          .where(eq(productImages.productId, productId))
          .orderBy(productImages.displayOrder);

        const stock = await db
          .select({
            sizeId: productStock.sizeId,
            sizeName: sizes.name,
            quantity: productStock.quantity,
          })
          .from(productStock)
          .innerJoin(sizes, eq(productStock.sizeId, sizes.id))
          .where(eq(productStock.productId, productId));

        const category = await db
          .select()
          .from(categories)
          .where(eq(categories.id, prod.categoryId))
          .limit(1);

        const brand = await db
          .select()
          .from(brands)
          .where(eq(brands.id, prod.brandId))
          .limit(1);

        return {
          ...prod,
          images,
          stock,
          category: category[0] || null,
          brand: brand[0] || null,
        };
      } catch (error) {
        console.error("Error fetching product details:", error);
        throw error;
      }
    }),

  getCategories: publicProcedure.query(async () => {
    const db = await getDb();
    if (!db) throw new Error("Database connection failed");

    try {
      return await db.select().from(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  }),

  getBrands: publicProcedure.query(async () => {
    const db = await getDb();
    if (!db) throw new Error("Database connection failed");

    try {
      return await db.select().from(brands);
    } catch (error) {
      console.error("Error fetching brands:", error);
      throw error;
    }
  }),

  getSizes: publicProcedure.query(async () => {
    const db = await getDb();
    if (!db) throw new Error("Database connection failed");

    try {
      return await db.select().from(sizes);
    } catch (error) {
      console.error("Error fetching sizes:", error);
      throw error;
    }
  }),
});
