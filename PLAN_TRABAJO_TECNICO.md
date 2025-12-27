# Plan de Trabajo Técnico - Zapatillas JyR

**Proyecto:** Tienda en Línea de Moda  
**Versión:** 1.0  
**Fecha:** Diciembre 2025  
**Autor:** Equipo de Desarrollo

---

## 1. Introducción

Este documento describe el plan técnico detallado para la construcción de la plataforma de comercio electrónico **Zapatillas JyR**. Incluye la arquitectura del sistema, tecnologías seleccionadas, cronograma de desarrollo y estrategias de implementación.

---

## 2. Tecnologías Seleccionadas

### 2.1 Stack Tecnológico

#### Frontend
- **React JS 19.2.1:** Framework principal para UI
- **TypeScript 5.9.3:** Tipado estático para mayor confiabilidad
- **TailwindCSS 4.1.14:** Framework de estilos utility-first
- **shadcn/ui:** Componentes reutilizables de alta calidad
- **Vite 7.1.7:** Build tool rápido y moderno
- **Wouter 3.3.5:** Router ligero para navegación
- **React Hook Form:** Gestión eficiente de formularios
- **Zod:** Validación de esquemas en tiempo de ejecución

#### Backend
- **Node.js 22.13.0:** Runtime JavaScript
- **Express 4.21.2:** Framework web minimalista
- **tRPC 11.6.0:** RPC framework end-to-end type-safe
- **TypeScript:** Tipado en backend

#### Base de Datos
- **MySQL 8.0+:** Base de datos relacional
- **Drizzle ORM 0.44.5:** ORM moderno y type-safe
- **Drizzle Kit:** Herramientas de migración

#### Autenticación
- **Manus OAuth:** Autenticación federada
- **Jose 6.1.0:** Manejo de JWT

#### Pagos
- **Stripe API:** Procesamiento de pagos seguro
- **Stripe Elements:** Componentes de formulario de pago

#### Almacenamiento
- **AWS S3:** Almacenamiento de imágenes y archivos
- **AWS SDK:** Cliente S3

#### Email
- **Nodemailer:** Envío de emails
- **SendGrid (opcional):** Servicio de email en la nube

#### IA
- **Manus LLM API:** Generación de imágenes y texto

#### Testing
- **Vitest 2.1.4:** Framework de testing
- **React Testing Library:** Testing de componentes

#### Herramientas
- **pnpm 10.4.1:** Gestor de paquetes
- **Prettier:** Formateador de código
- **ESLint:** Linter de código
- **Git:** Control de versiones

### 2.2 Justificación de Tecnologías

| Tecnología | Justificación |
|-----------|---------------|
| React JS | Framework más popular, amplio ecosistema, comunidad activa |
| TypeScript | Previene errores en tiempo de compilación, mejor DX |
| TailwindCSS | Desarrollo rápido, consistencia visual, bajo overhead |
| tRPC | Type-safety end-to-end, mejor que REST para este caso |
| Drizzle ORM | Alternativa moderna a Sequelize, mejor performance |
| Stripe | Líder en pagos online, seguridad PCI DSS, buena documentación |
| S3 | Almacenamiento escalable, confiable, económico |

---

## 3. Arquitectura del Sistema

### 3.1 Diagrama de Arquitectura

```
┌─────────────────────────────────────────────────────────────┐
│                     Cliente (Browser)                        │
│  ┌────────────────────────────────────────────────────────┐ │
│  │              React JS Application                      │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌────────────────┐ │
│  │  │  Components  │  │    Pages     │  │   Contexts     │ │
│  │  └──────────────┘  └──────────────┘  └────────────────┘ │
│  │         ↓              ↓                    ↓             │
│  │  ┌──────────────────────────────────────────────────────┐ │
│  │  │          tRPC Client (Type-safe RPC)                │ │
│  │  └──────────────────────────────────────────────────────┘ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                           ↓ HTTPS
┌─────────────────────────────────────────────────────────────┐
│                    Backend (Node.js)                         │
│  ┌────────────────────────────────────────────────────────┐ │
│  │              Express Server                            │ │
│  │  ┌──────────────────────────────────────────────────┐  │ │
│  │  │         tRPC Router & Procedures                 │  │ │
│  │  │  ┌──────────────┐  ┌──────────────────────────┐ │  │ │
│  │  │  │ Auth Router  │  │ Feature Routers         │ │  │ │
│  │  │  │ - me         │  │ - products              │ │  │ │
│  │  │  │ - logout     │  │ - cart                  │ │  │ │
│  │  │  └──────────────┘  │ - orders                │ │  │ │
│  │  │                    │ - payments              │ │  │ │
│  │  │                    │ - admin                 │ │  │ │
│  │  │                    └──────────────────────────┘ │  │ │
│  │  └──────────────────────────────────────────────────┘  │ │
│  │                      ↓                                  │ │
│  │  ┌──────────────────────────────────────────────────┐  │ │
│  │  │        Business Logic & Validation               │  │ │
│  │  │  ┌──────────────┐  ┌──────────────────────────┐ │  │ │
│  │  │  │ Auth Service │  │ Product Service         │ │  │ │
│  │  │  │ Order Service│  │ Payment Service         │ │  │ │
│  │  │  │ Email Service│  │ Image Service           │ │  │ │
│  │  │  └──────────────┘  └──────────────────────────┘ │  │ │
│  │  └──────────────────────────────────────────────────┘  │ │
│  │                      ↓                                  │ │
│  │  ┌──────────────────────────────────────────────────┐  │ │
│  │  │         Database Layer (Drizzle ORM)            │  │ │
│  │  └──────────────────────────────────────────────────┘  │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
         ↓                  ↓                  ↓
    ┌─────────┐      ┌─────────────┐    ┌──────────┐
    │ MySQL   │      │ AWS S3      │    │ Stripe   │
    │ Database│      │ Storage     │    │ API      │
    └─────────┘      └─────────────┘    └──────────┘
         ↓                                    ↓
    ┌─────────┐                      ┌──────────────┐
    │ Backups │                      │ Manus LLM    │
    └─────────┘                      │ Nodemailer   │
                                     └──────────────┘
```

### 3.2 Flujo de Datos

```
Usuario Interactúa
        ↓
React Component
        ↓
tRPC Hook (useQuery/useMutation)
        ↓
HTTP POST /api/trpc/[procedure]
        ↓
Express Middleware
        ↓
OAuth Context (ctx.user)
        ↓
tRPC Procedure
        ↓
Validación (Zod)
        ↓
Business Logic
        ↓
Drizzle ORM Query
        ↓
MySQL Database
        ↓
Resultado
        ↓
Response JSON (SuperJSON)
        ↓
tRPC Client
        ↓
React State Update
        ↓
Component Re-render
```

---

## 4. Estructura de Directorios

```
zapatillas_jyr/
├── client/                          # Frontend React
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── robots.txt
│   │   └── assets/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/                  # shadcn/ui components
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── select.tsx
│   │   │   │   ├── form.tsx
│   │   │   │   └── ...
│   │   │   ├── layout/
│   │   │   │   ├── Header.tsx       # Navegación principal
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── AdminLayout.tsx  # Layout para admin
│   │   │   │   └── DashboardLayout.tsx
│   │   │   ├── product/
│   │   │   │   ├── ProductCard.tsx
│   │   │   │   ├── ProductGrid.tsx
│   │   │   │   ├── ImageGallery.tsx
│   │   │   │   ├── FilterSidebar.tsx
│   │   │   │   └── SearchBar.tsx
│   │   │   ├── cart/
│   │   │   │   ├── CartIcon.tsx
│   │   │   │   ├── CartItem.tsx
│   │   │   │   └── CartSummary.tsx
│   │   │   ├── checkout/
│   │   │   │   ├── ShippingForm.tsx
│   │   │   │   ├── PaymentForm.tsx
│   │   │   │   └── OrderSummary.tsx
│   │   │   ├── admin/
│   │   │   │   ├── ProductForm.tsx
│   │   │   │   ├── ProductsTable.tsx
│   │   │   │   ├── OrdersTable.tsx
│   │   │   │   └── ImageGenerator.tsx
│   │   │   └── common/
│   │   │       ├── ErrorBoundary.tsx
│   │   │       ├── Loading.tsx
│   │   │       └── NotFound.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx             # Página de inicio
│   │   │   ├── ProductCatalog.tsx   # Catálogo de productos
│   │   │   ├── ProductDetail.tsx    # Detalle de producto
│   │   │   ├── Cart.tsx             # Página del carrito
│   │   │   ├── Checkout.tsx         # Página de checkout
│   │   │   ├── OrderConfirmation.tsx # Confirmación de orden
│   │   │   ├── Profile.tsx          # Perfil de usuario
│   │   │   ├── OrderHistory.tsx     # Historial de pedidos
│   │   │   ├── AdminDashboard.tsx   # Dashboard admin
│   │   │   ├── AdminProducts.tsx    # Gestión de productos
│   │   │   ├── AdminOrders.tsx      # Gestión de pedidos
│   │   │   ├── AdminOrderDetail.tsx # Detalle de pedido
│   │   │   ├── AdminImageGen.tsx    # Generador de imágenes
│   │   │   ├── NotFound.tsx
│   │   │   └── ...
│   │   ├── contexts/
│   │   │   ├── ThemeContext.tsx
│   │   │   ├── CartContext.tsx      # Contexto del carrito
│   │   │   └── AuthContext.tsx
│   │   ├── hooks/
│   │   │   ├── useAuth.ts           # Hook de autenticación
│   │   │   ├── useCart.ts           # Hook del carrito
│   │   │   └── useLocalStorage.ts
│   │   ├── lib/
│   │   │   ├── trpc.ts              # Cliente tRPC
│   │   │   ├── utils.ts             # Utilidades
│   │   │   └── stripe.ts            # Configuración Stripe
│   │   ├── _core/
│   │   │   └── hooks/
│   │   │       └── useAuth.ts       # Hook de auth del template
│   │   ├── App.tsx                  # Router principal
│   │   ├── main.tsx                 # Entry point
│   │   └── index.css                # Estilos globales
│   ├── index.html
│   └── vite.config.ts
│
├── server/                          # Backend Node.js
│   ├── routers/
│   │   ├── products.ts              # Procedimientos de productos
│   │   ├── cart.ts                  # Procedimientos del carrito
│   │   ├── orders.ts                # Procedimientos de órdenes
│   │   ├── payments.ts              # Procedimientos de pagos
│   │   ├── admin.ts                 # Procedimientos de admin
│   │   └── users.ts                 # Procedimientos de usuarios
│   ├── services/
│   │   ├── ProductService.ts        # Lógica de productos
│   │   ├── OrderService.ts          # Lógica de órdenes
│   │   ├── PaymentService.ts        # Lógica de pagos
│   │   ├── EmailService.ts          # Envío de emails
│   │   └── ImageService.ts          # Generación de imágenes
│   ├── db.ts                        # Helpers de BD
│   ├── routers.ts                   # Router principal
│   ├── _core/
│   │   ├── index.ts                 # Entry point
│   │   ├── context.ts               # Contexto tRPC
│   │   ├── trpc.ts                  # Configuración tRPC
│   │   ├── env.ts                   # Variables de entorno
│   │   ├── llm.ts                   # Integración LLM
│   │   ├── notification.ts          # Notificaciones
│   │   ├── cookies.ts
│   │   └── ...
│   ├── auth.logout.test.ts          # Prueba de logout
│   └── ...
│
├── drizzle/                         # Esquema y migraciones
│   ├── schema.ts                    # Definición de tablas
│   └── migrations/
│       └── ...
│
├── shared/                          # Código compartido
│   ├── const.ts                     # Constantes
│   └── types.ts                     # Tipos compartidos
│
├── storage/                         # Helpers de S3
│   └── index.ts
│
├── package.json
├── tsconfig.json
├── vite.config.ts
├── drizzle.config.ts
├── .env.example
├── .gitignore
├── README.md
├── ANALISIS_REQUISITOS.md
├── HISTORIAS_USUARIO.md
├── PLAN_TRABAJO_TECNICO.md
├── DIAGRAMA_CASOS_USO.md
├── DIAGRAMA_CLASES.md
├── DIAGRAMA_SECUENCIA.md
├── GUIA_ESTILOS.md
└── PROTOTIPOS.md
```

---

## 5. Modelo de Datos

### 5.1 Esquema de Base de Datos

```sql
-- Tabla de Usuarios
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  openId VARCHAR(64) UNIQUE NOT NULL,
  email VARCHAR(320),
  name TEXT,
  role ENUM('user', 'admin') DEFAULT 'user',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  lastSignedIn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Categorías
CREATE TABLE categories (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Marcas
CREATE TABLE brands (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Productos
CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  categoryId INT NOT NULL,
  brandId INT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (categoryId) REFERENCES categories(id),
  FOREIGN KEY (brandId) REFERENCES brands(id),
  INDEX idx_category (categoryId),
  INDEX idx_brand (brandId),
  FULLTEXT INDEX idx_search (name, description)
);

-- Tabla de Imágenes de Productos
CREATE TABLE product_images (
  id INT PRIMARY KEY AUTO_INCREMENT,
  productId INT NOT NULL,
  url VARCHAR(500) NOT NULL,
  s3Key VARCHAR(500),
  displayOrder INT DEFAULT 0,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (productId) REFERENCES products(id) ON DELETE CASCADE,
  INDEX idx_product (productId)
);

-- Tabla de Tallas
CREATE TABLE sizes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL UNIQUE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Stock por Producto y Talla
CREATE TABLE product_stock (
  id INT PRIMARY KEY AUTO_INCREMENT,
  productId INT NOT NULL,
  sizeId INT NOT NULL,
  quantity INT DEFAULT 0,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (productId) REFERENCES products(id) ON DELETE CASCADE,
  FOREIGN KEY (sizeId) REFERENCES sizes(id),
  UNIQUE KEY unique_product_size (productId, sizeId),
  INDEX idx_product (productId)
);

-- Tabla de Carrito
CREATE TABLE cart_items (
  id INT PRIMARY KEY AUTO_INCREMENT,
  userId INT NOT NULL,
  productId INT NOT NULL,
  sizeId INT NOT NULL,
  quantity INT NOT NULL,
  addedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (productId) REFERENCES products(id),
  FOREIGN KEY (sizeId) REFERENCES sizes(id),
  INDEX idx_user (userId),
  UNIQUE KEY unique_cart_item (userId, productId, sizeId)
);

-- Tabla de Órdenes
CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  orderNumber VARCHAR(50) UNIQUE NOT NULL,
  userId INT NOT NULL,
  status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
  totalAmount DECIMAL(10, 2) NOT NULL,
  shippingAddress TEXT NOT NULL,
  shippingCity VARCHAR(100),
  shippingState VARCHAR(100),
  shippingZip VARCHAR(20),
  shippingCountry VARCHAR(100),
  customerEmail VARCHAR(320),
  customerPhone VARCHAR(20),
  stripePaymentId VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id),
  INDEX idx_user (userId),
  INDEX idx_status (status),
  INDEX idx_created (createdAt)
);

-- Tabla de Items de Órdenes
CREATE TABLE order_items (
  id INT PRIMARY KEY AUTO_INCREMENT,
  orderId INT NOT NULL,
  productId INT NOT NULL,
  sizeId INT NOT NULL,
  quantity INT NOT NULL,
  priceAtPurchase DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (orderId) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY (productId) REFERENCES products(id),
  FOREIGN KEY (sizeId) REFERENCES sizes(id),
  INDEX idx_order (orderId)
);

-- Tabla de Pagos
CREATE TABLE payments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  orderId INT NOT NULL,
  stripePaymentIntentId VARCHAR(255) UNIQUE,
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  status VARCHAR(50),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (orderId) REFERENCES orders(id),
  INDEX idx_order (orderId)
);
```

### 5.2 Relaciones

```
users (1) ──→ (N) cart_items
users (1) ──→ (N) orders
products (1) ──→ (N) product_images
products (1) ──→ (N) product_stock
products (1) ──→ (N) order_items
categories (1) ──→ (N) products
brands (1) ──→ (N) products
sizes (1) ──→ (N) product_stock
sizes (1) ──→ (N) order_items
orders (1) ──→ (N) order_items
orders (1) ──→ (1) payments
```

---

## 6. Procedimientos tRPC

### 6.1 Procedimientos Públicos

```typescript
// Productos
trpc.products.list(filters)        // Listar productos con filtros
trpc.products.search(query)        // Buscar productos
trpc.products.getById(id)          // Obtener detalle de producto

// Autenticación
trpc.auth.me()                     // Obtener usuario actual
trpc.auth.logout()                 // Cerrar sesión
```

### 6.2 Procedimientos Protegidos (Usuarios)

```typescript
// Carrito
trpc.cart.add(productId, sizeId, quantity)
trpc.cart.remove(cartItemId)
trpc.cart.updateQuantity(cartItemId, quantity)
trpc.cart.list()
trpc.cart.clear()

// Órdenes
trpc.orders.create(shippingData, items)
trpc.orders.getUserOrders()
trpc.orders.getById(orderId)

// Pagos
trpc.payments.createPaymentIntent(orderId, amount)
trpc.payments.confirmPayment(paymentIntentId)

// Usuarios
trpc.users.getProfile()
trpc.users.updateProfile(data)
```

### 6.3 Procedimientos Protegidos (Administrador)

```typescript
// Productos (Admin)
trpc.admin.products.create(data)
trpc.admin.products.update(id, data)
trpc.admin.products.delete(id)
trpc.admin.products.list()
trpc.admin.products.updateStock(productId, sizeId, quantity)

// Órdenes (Admin)
trpc.admin.orders.list(filters)
trpc.admin.orders.getById(id)
trpc.admin.orders.updateStatus(id, status)

// Estadísticas
trpc.admin.statistics.getSales(period)
trpc.admin.statistics.getTopProducts()
trpc.admin.statistics.getRevenue()

// IA
trpc.admin.generateImage(prompt)
```

---

## 7. Cronograma de Desarrollo

### 7.1 Fases de Desarrollo

| Fase | Duración | Actividades | Entregables |
|------|----------|-------------|-------------|
| 1. Análisis y Diseño | 2 días | Requisitos, diagramas, prototipos | Documentación completa |
| 2. Setup Inicial | 1 día | Configuración proyecto, BD, auth | Proyecto inicializado |
| 3. Backend - Productos | 2 días | Schema, procedures, servicios | APIs de productos |
| 4. Backend - Carrito | 1 día | Schema, procedures | APIs del carrito |
| 5. Backend - Órdenes | 2 días | Schema, procedures, emails | APIs de órdenes |
| 6. Backend - Pagos | 1 día | Integración Stripe | APIs de pagos |
| 7. Frontend - Catálogo | 2 días | Componentes, páginas | Catálogo funcional |
| 8. Frontend - Carrito | 1 día | Componentes, lógica | Carrito funcional |
| 9. Frontend - Checkout | 2 días | Formularios, integración Stripe | Checkout funcional |
| 10. Frontend - Admin | 2 días | Dashboard, gestión productos | Panel admin funcional |
| 11. Integraciones | 1 día | Email, IA, notificaciones | Integraciones activas |
| 12. Testing | 1 día | Pruebas unitarias e integración | Suite de tests |
| 13. Optimización | 1 día | Performance, SEO, accesibilidad | Optimizaciones aplicadas |
| 14. Despliegue | 1 día | Configuración, publicación | Proyecto en producción |

**Total:** ~20 días de desarrollo

---

## 8. Estándares de Codificación

### 8.1 Convenciones de Nombres

```typescript
// Componentes React: PascalCase
export function ProductCard() {}
export const ProductGrid = () => {}

// Funciones y variables: camelCase
const getUserProducts = () => {}
const productCount = 10

// Constantes: UPPER_SNAKE_CASE
const MAX_CART_ITEMS = 100
const API_TIMEOUT = 5000

// Tipos y Interfaces: PascalCase
interface Product {}
type CartItem = {}

// Procedimientos tRPC: camelCase con punto
trpc.products.list
trpc.admin.products.create
```

### 8.2 Estructura de Componentes

```typescript
/**
 * ProductCard Component
 * 
 * Displays a single product with image, name, price and action buttons.
 * 
 * @component
 * @example
 * return (
 *   <ProductCard product={product} onAddToCart={handleAdd} />
 * )
 */
interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: number) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  // Hook declarations
  const [isLoading, setIsLoading] = useState(false);
  
  // Event handlers
  const handleClick = () => {
    // Implementation
  };
  
  // Render
  return (
    <div className="product-card">
      {/* JSX */}
    </div>
  );
}
```

### 8.3 Comentarios en el Código

```typescript
// Comentarios de una línea para explicaciones breves
const total = subtotal + tax; // Cálculo del total incluyendo impuestos

/**
 * Función para calcular el total de una orden
 * 
 * @param items - Array de items de la orden
 * @param taxRate - Tasa de impuesto (0-1)
 * @returns Total de la orden incluyendo impuestos
 */
function calculateOrderTotal(items: OrderItem[], taxRate: number): number {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return subtotal * (1 + taxRate);
}

// TODO: Implementar validación de stock
// FIXME: Este cálculo puede ser incorrecto en casos edge
// NOTE: Esta función es crítica para el checkout
```

### 8.4 Manejo de Errores

```typescript
// Backend - Procedimientos tRPC
export const createOrder = protectedProcedure
  .input(createOrderSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      // Validación
      if (!input.items || input.items.length === 0) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'La orden debe tener al menos un producto'
        });
      }
      
      // Lógica
      const order = await OrderService.create(input);
      return order;
    } catch (error) {
      if (error instanceof TRPCError) throw error;
      
      console.error('Error creating order:', error);
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Error al crear la orden'
      });
    }
  });

// Frontend - Manejo de errores
const { mutate: createOrder, isPending } = trpc.orders.create.useMutation({
  onSuccess: (data) => {
    toast.success('Orden creada exitosamente');
    navigate(`/order/${data.id}`);
  },
  onError: (error) => {
    toast.error(error.message || 'Error al crear la orden');
  }
});
```

---

## 9. Estrategias de Testing

### 9.1 Testing Unitario

```typescript
// server/products.test.ts
import { describe, it, expect } from 'vitest';
import { calculateDiscount } from './products';

describe('calculateDiscount', () => {
  it('should calculate discount correctly', () => {
    const result = calculateDiscount(100, 0.1);
    expect(result).toBe(90);
  });
  
  it('should handle zero discount', () => {
    const result = calculateDiscount(100, 0);
    expect(result).toBe(100);
  });
});
```

### 9.2 Testing de Componentes

```typescript
// client/src/components/__tests__/ProductCard.test.tsx
import { render, screen } from '@testing-library/react';
import { ProductCard } from '../ProductCard';

describe('ProductCard', () => {
  it('renders product name', () => {
    const product = { id: 1, name: 'Test Product', price: 99.99 };
    render(<ProductCard product={product} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });
});
```

### 9.3 Cobertura de Tests

- **Objetivo:** Mínimo 80% de cobertura de código
- **Enfoque:** Funciones críticas, servicios, componentes principales
- **Ejecución:** `pnpm test`

---

## 10. Seguridad

### 10.1 Medidas de Seguridad

- **Autenticación:** OAuth con Manus
- **Autorización:** Validación de roles en procedures
- **Validación:** Zod schemas en backend
- **Encriptación:** SSL/TLS para datos en tránsito
- **Pagos:** PCI DSS compliance con Stripe
- **CORS:** Configuración restrictiva
- **Rate Limiting:** Implementar para APIs
- **CSRF Protection:** Tokens CSRF en formularios
- **SQL Injection:** Prevención con ORM (Drizzle)
- **XSS Prevention:** Sanitización de input, React escaping

### 10.2 Variables de Entorno Sensibles

```
DATABASE_URL=mysql://user:password@host/db
JWT_SECRET=long-random-secret-key
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
MANUS_OAUTH_CLIENT_ID=...
MANUS_OAUTH_CLIENT_SECRET=...
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
SENDGRID_API_KEY=...
MANUS_LLM_API_KEY=...
```

---

## 11. Performance

### 11.1 Optimizaciones

- **Frontend:**
  - Code splitting con Vite
  - Lazy loading de imágenes
  - Compresión de assets
  - Caché de componentes
  - Memoización de funciones

- **Backend:**
  - Índices en BD
  - Caché de consultas frecuentes
  - Paginación de resultados
  - Compresión de respuestas

- **General:**
  - CDN para assets estáticos
  - Compresión gzip
  - Minificación de CSS/JS

### 11.2 Métricas de Performance

- **Página de inicio:** < 2 segundos
- **Catálogo:** < 3 segundos
- **Detalle de producto:** < 2 segundos
- **Checkout:** < 3 segundos
- **API response:** < 500ms

---

## 12. Despliegue

### 12.1 Ambiente de Producción

- **Hosting:** Manus (incluido)
- **Base de Datos:** MySQL en la nube
- **Storage:** AWS S3
- **CDN:** CloudFront (opcional)
- **Monitoreo:** Logs y alertas

### 12.2 Proceso de Despliegue

1. Crear checkpoint en Git
2. Ejecutar tests
3. Build de producción
4. Desplegar a servidor
5. Verificar funcionamiento
6. Monitorear logs

---

## 13. Mantenimiento y Soporte

### 13.1 Tareas de Mantenimiento

- **Diario:** Monitoreo de logs y errores
- **Semanal:** Backups de BD
- **Mensual:** Análisis de performance
- **Trimestral:** Actualización de dependencias
- **Anual:** Auditoría de seguridad

### 13.2 Documentación

- Documentación técnica (este documento)
- Documentación de API (comentarios en código)
- README del proyecto
- Guía de instalación y setup
- Guía de contribución

---

**Documento preparado por:** Equipo de Desarrollo  
**Fecha:** Diciembre 2025  
**Versión:** 1.0
