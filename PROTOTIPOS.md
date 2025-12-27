# Prototipos y Mockups - Zapatillas JyR

**Proyecto:** Tienda en Línea de Moda  
**Versión:** 1.0  
**Fecha:** Diciembre 2025

---

## 1. Descripción de Prototipos

Los prototipos presentados a continuación representan los wireframes de baja fidelidad y mockups de alta fidelidad de las páginas principales de la aplicación. Estos sirven como guía visual para el desarrollo frontend.

---

## 2. Prototipo: Página de Inicio

### 2.1 Wireframe de Baja Fidelidad

```
┌─────────────────────────────────────────────────────┐
│  LOGO    BÚSQUEDA    CATEGORÍAS    👤  🛒          │ ← Header
├─────────────────────────────────────────────────────┤
│                                                     │
│          ╔═══════════════════════════════╗         │
│          ║   HERO SECTION                ║         │
│          ║   "Colección Exclusiva"       ║         │
│          ║   [CTA: Compra Ahora]         ║         │
│          ╚═══════════════════════════════╝         │
│                                                     │
├─────────────────────────────────────────────────────┤
│ PRODUCTOS DESTACADOS                                │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐  │
│ │ IMAGEN  │ │ IMAGEN  │ │ IMAGEN  │ │ IMAGEN  │  │
│ │ Nombre  │ │ Nombre  │ │ Nombre  │ │ Nombre  │  │
│ │ $99.99  │ │ $99.99  │ │ $99.99  │ │ $99.99  │  │
│ │ [Agreg] │ │ [Agreg] │ │ [Agreg] │ │ [Agreg] │  │
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘  │
├─────────────────────────────────────────────────────┤
│ OFERTAS ESPECIALES                                  │
│ ╔═════════════════════════════════════════════════╗ │
│ ║ DESCUENTO 30% EN ZAPATILLAS SELECCIONADAS      ║ │
│ ║ [Ver Ofertas]                                   ║ │
│ ╚═════════════════════════════════════════════════╝ │
├─────────────────────────────────────────────────────┤
│ © 2025 Zapatillas JyR | Contacto | Términos       │ ← Footer
└─────────────────────────────────────────────────────┘
```

### 2.2 Mockup de Alta Fidelidad

```
┌─────────────────────────────────────────────────────┐
│ 🔷 ZAPATILLAS JyR   [Búsqueda...]  Hombre Mujer   │
│                                      👤  🛒(3)      │
├─────────────────────────────────────────────────────┤
│                                                     │
│        ╔═══════════════════════════════════╗       │
│        ║  COLECCIÓN PREMIUM 2025           ║       │
│        ║  Zapatillas de Lujo               ║       │
│        ║  Descubre nuestras nuevas         ║       │
│        ║  colecciones exclusivas           ║       │
│        ║                                   ║       │
│        ║  [EXPLORAR CATÁLOGO] [OFERTAS]   ║       │
│        ╚═══════════════════════════════════╝       │
│                                                     │
├─────────────────────────────────────────────────────┤
│ PRODUCTOS DESTACADOS                                │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ │
│ │   [Imagen]   │ │   [Imagen]   │ │   [Imagen]   │ │
│ │              │ │              │ │              │ │
│ │ Nike Air Max │ │ Adidas Ultra │ │ Puma RS-X    │ │
│ │ ⭐⭐⭐⭐⭐   │ │ ⭐⭐⭐⭐⭐   │ │ ⭐⭐⭐⭐⭐   │ │
│ │ $149.99      │ │ $129.99      │ │ $119.99      │ │
│ │ [Agregar]    │ │ [Agregar]    │ │ [Agregar]    │ │
│ └──────────────┘ └──────────────┘ └──────────────┘ │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ │
│ │   [Imagen]   │ │   [Imagen]   │ │   [Imagen]   │ │
│ │              │ │              │ │              │ │
│ │ Converse All │ │ Vans Old     │ │ New Balance  │ │
│ │ ⭐⭐⭐⭐⭐   │ │ ⭐⭐⭐⭐⭐   │ │ ⭐⭐⭐⭐⭐   │ │
│ │ $89.99       │ │ $99.99       │ │ $139.99      │ │
│ │ [Agregar]    │ │ [Agregar]    │ │ [Agregar]    │ │
│ └──────────────┘ └──────────────┘ └──────────────┘ │
├─────────────────────────────────────────────────────┤
│ ╔═════════════════════════════════════════════════╗ │
│ ║ 🎉 OFERTA ESPECIAL: 30% DESCUENTO             ║ │
│ ║ En zapatillas seleccionadas                    ║ │
│ ║ [VER TODAS LAS OFERTAS] →                      ║ │
│ ╚═════════════════════════════════════════════════╝ │
├─────────────────────────────────────────────────────┤
│ © 2025 Zapatillas JyR | Contacto | Términos       │
└─────────────────────────────────────────────────────┘
```

---

## 3. Prototipo: Catálogo de Productos

### 3.1 Wireframe de Baja Fidelidad

```
┌──────────────────────────────────────────────────┐
│ HEADER                                           │
├──────────────────────────────────────────────────┤
│ BÚSQUEDA │ FILTROS │ ORDENAR                    │
├────────┬──────────────────────────────────────────┤
│        │ PRODUCTOS                               │
│ FILTRO │ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │
│        │ │      │ │      │ │      │ │      │  │
│ Categ. │ │ Prod │ │ Prod │ │ Prod │ │ Prod │  │
│ Marca  │ │      │ │      │ │      │ │      │  │
│ Precio │ └──────┘ └──────┘ └──────┘ └──────┘  │
│ Talla  │ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │
│        │ │      │ │      │ │      │ │      │  │
│ [Limpiar] │ Prod │ │ Prod │ │ Prod │ │ Prod │  │
│        │ │      │ │      │ │      │ │      │  │
│        │ └──────┘ └──────┘ └──────┘ └──────┘  │
│        │ [Siguiente]                           │
├────────┴──────────────────────────────────────────┤
│ FOOTER                                          │
└──────────────────────────────────────────────────┘
```

### 3.2 Mockup de Alta Fidelidad

```
┌──────────────────────────────────────────────────┐
│ 🔷 ZAPATILLAS JyR   [Búsqueda...]  👤  🛒(3)   │
├──────────────────────────────────────────────────┤
│ [🔍 Buscar...] │ ↓ Ordenar por │ Filtros ☰    │
├────────┬───────────────────────────────────────────┤
│        │ CATÁLOGO DE ZAPATILLAS                  │
│ FILTROS│ ┌──────────────┐ ┌──────────────┐      │
│        │ │   [Imagen]   │ │   [Imagen]   │      │
│ Marca  │ │              │ │              │      │
│ ☐ Nike │ │ Nike Air Max │ │ Adidas Ultra │      │
│ ☐ Adidas│ │ $149.99      │ │ $129.99      │      │
│ ☐ Puma │ │ Stock: 15    │ │ Stock: 8     │      │
│ ☐ Converse│ │ [Detalles]   │ │ [Detalles]   │      │
│        │ └──────────────┘ └──────────────┘      │
│ Precio │ ┌──────────────┐ ┌──────────────┐      │
│ $0-$50 │ │   [Imagen]   │ │   [Imagen]   │      │
│ $50-$100│ │              │ │              │      │
│ $100-$150│ │ Puma RS-X    │ │ Converse All │      │
│ $150+  │ │ $119.99      │ │ $89.99       │      │
│        │ │ Stock: 12    │ │ Stock: 20    │      │
│ Talla  │ │ [Detalles]   │ │ [Detalles]   │      │
│ ☐ 35   │ └──────────────┘ └──────────────┘      │
│ ☐ 36   │ ┌──────────────┐ ┌──────────────┐      │
│ ☐ 37   │ │   [Imagen]   │ │   [Imagen]   │      │
│ ☐ 38   │ │              │ │              │      │
│ ☐ 39   │ │ Vans Old     │ │ New Balance  │      │
│ ☐ 40   │ │ $99.99       │ │ $139.99      │      │
│ ☐ 41   │ │ Stock: 18    │ │ Stock: 5     │      │
│ ☐ 42   │ │ [Detalles]   │ │ [Detalles]   │      │
│        │ └──────────────┘ └──────────────┘      │
│ [Limpiar] │ [◀ Anterior] [1] [2] [3] [Siguiente ▶] │
├────────┴───────────────────────────────────────────┤
│ © 2025 Zapatillas JyR | Contacto | Términos      │
└──────────────────────────────────────────────────┘
```

---

## 4. Prototipo: Detalle de Producto

### 4.1 Wireframe de Baja Fidelidad

```
┌─────────────────────────────────────────────────┐
│ HEADER                                          │
├─────────────────────────────────────────────────┤
│ ◀ Volver                                        │
│                                                 │
│ ┌──────────────────┐  ┌─────────────────────┐  │
│ │                  │  │ Nombre Producto     │  │
│ │   GALERÍA        │  │ ⭐⭐⭐⭐⭐ (120)    │  │
│ │   IMÁGENES       │  │ Marca: Nike         │  │
│ │                  │  │ Categoría: Running  │  │
│ │                  │  │                     │  │
│ │                  │  │ Precio: $149.99     │  │
│ │                  │  │ Stock: 15 unidades  │  │
│ │                  │  │                     │  │
│ │                  │  │ Talla: [Selector]   │  │
│ │                  │  │ Cantidad: [1] +-    │  │
│ │                  │  │                     │  │
│ │                  │  │ [Agregar al Carrito]│  │
│ │                  │  │ [Agregar a Favoritos]│ │
│ └──────────────────┘  └─────────────────────┘  │
│                                                 │
│ DESCRIPCIÓN DEL PRODUCTO                        │
│ ┌─────────────────────────────────────────────┐ │
│ │ Descripción larga del producto...           │ │
│ │ Características principales...              │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ RESEÑAS                                         │
│ ┌─────────────────────────────────────────────┐ │
│ │ Usuario 1: ⭐⭐⭐⭐⭐ \"Excelente\"       │ │
│ │ Usuario 2: ⭐⭐⭐⭐ \"Muy bueno\"        │ │
│ └─────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────┤
│ PRODUCTOS RELACIONADOS                          │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐           │
│ │      │ │      │ │      │ │      │           │
│ │ Prod │ │ Prod │ │ Prod │ │ Prod │           │
│ └──────┘ └──────┘ └──────┘ └──────┘           │
├─────────────────────────────────────────────────┤
│ FOOTER                                          │
└─────────────────────────────────────────────────┘
```

### 4.2 Mockup de Alta Fidelidad

```
┌─────────────────────────────────────────────────┐
│ 🔷 ZAPATILLAS JyR   [Búsqueda...]  👤  🛒(3)  │
├─────────────────────────────────────────────────┤
│ ◀ Volver al catálogo                           │
│                                                 │
│ ┌──────────────────┐  ┌──────────────────────┐ │
│ │                  │  │ Nike Air Max 90      │ │
│ │   [Imagen 1]     │  │ ⭐⭐⭐⭐⭐ (127 reseñas)│
│ │                  │  │ Marca: Nike          │ │
│ │ [Img2] [Img3]    │  │ Categoría: Running   │ │
│ │ [Img4] [Img5]    │  │ Color: Blanco/Negro  │ │
│ │                  │  │                      │ │
│ │                  │  │ PRECIO: $149.99      │ │
│ │                  │  │ Stock: 15 unidades   │ │
│ │                  │  │                      │ │
│ │                  │  │ Selecciona tu talla: │ │
│ │                  │  │ [35] [36] [37] [38]  │ │
│ │                  │  │ [39] [40] [41] [42]  │ │
│ │                  │  │                      │ │
│ │                  │  │ Cantidad:            │ │
│ │                  │  │ [−] 1 [+]            │ │
│ │                  │  │                      │ │
│ │                  │  │ [AGREGAR AL CARRITO] │ │
│ │                  │  │ [♡ Agregar Favorito]│ │
│ └──────────────────┘  └──────────────────────┘ │
│                                                 │
│ DESCRIPCIÓN                                     │
│ ┌──────────────────────────────────────────────┐│
│ │ Las Nike Air Max 90 son zapatillas clásicas  ││
│ │ con tecnología Air Max para máxima comodidad.││
│ │                                              ││
│ │ Características:                             ││
│ │ • Tecnología Air Max                         ││
│ │ • Suela de goma duradera                     ││
│ │ • Forro transpirable                         ││
│ │ • Peso: 350g                                 ││
│ └──────────────────────────────────────────────┘│
│                                                 │
│ RESEÑAS (127)                                   │
│ ┌──────────────────────────────────────────────┐│
│ │ ⭐⭐⭐⭐⭐ Juan M.                            ││
│ │ \"Excelentes zapatillas, muy cómodas\"      ││
│ │ Hace 2 semanas                               ││
│ │                                              ││
│ │ ⭐⭐⭐⭐ María G.                            ││
│ │ \"Buena calidad, llegaron rápido\"          ││
│ │ Hace 1 mes                                   ││
│ └──────────────────────────────────────────────┘│
│                                                 │
│ PRODUCTOS RELACIONADOS                          │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────┐ │
│ │  [Imagen]    │ │  [Imagen]    │ │ [Imagen] │ │
│ │ Nike Air Max │ │ Adidas Ultra │ │ Puma RS  │ │
│ │ $149.99      │ │ $129.99      │ │ $119.99  │ │
│ │ [Detalles]   │ │ [Detalles]   │ │[Detalles]│ │
│ └──────────────┘ └──────────────┘ └──────────┘ │
├─────────────────────────────────────────────────┤
│ © 2025 Zapatillas JyR | Contacto | Términos   │
└─────────────────────────────────────────────────┘
```

---

## 5. Prototipo: Carrito de Compras

### 5.1 Mockup de Alta Fidelidad

```
┌─────────────────────────────────────────────────┐
│ 🔷 ZAPATILLAS JyR   [Búsqueda...]  👤  🛒(3)  │
├─────────────────────────────────────────────────┤
│ MI CARRITO (3 productos)                        │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ [Img] Nike Air Max 90          Talla: 40   │ │
│ │       Cantidad: [−] 1 [+]                   │ │
│ │       Precio: $149.99                       │ │
│ │       Subtotal: $149.99          [Eliminar]│ │
│ ├─────────────────────────────────────────────┤ │
│ │ [Img] Adidas Ultra Boost        Talla: 39  │ │
│ │       Cantidad: [−] 2 [+]                   │ │
│ │       Precio: $129.99 c/u                   │ │
│ │       Subtotal: $259.98          [Eliminar]│ │
│ ├─────────────────────────────────────────────┤ │
│ │ [Img] Converse All Star         Talla: 38  │ │
│ │       Cantidad: [−] 1 [+]                   │ │
│ │       Precio: $89.99                        │ │
│ │       Subtotal: $89.99           [Eliminar]│ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ RESUMEN DE COMPRA                           │ │
│ │ Subtotal:                          $499.96  │ │
│ │ Impuestos (19%):                   $94.99   │ │
│ │ Envío:                             $9.99    │ │
│ │ ─────────────────────────────────────────── │ │
│ │ TOTAL:                             $604.94  │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ [PROCEDER AL CHECKOUT]  [CONTINUAR COMPRANDO]  │
│                                                 │
│ ¿Tienes un código de descuento?                │
│ [Código] [Aplicar]                             │
├─────────────────────────────────────────────────┤
│ © 2025 Zapatillas JyR | Contacto | Términos   │
└─────────────────────────────────────────────────┘
```

---

## 6. Prototipo: Checkout

### 6.1 Mockup de Alta Fidelidad

```
┌─────────────────────────────────────────────────┐
│ 🔷 ZAPATILLAS JyR   [Búsqueda...]  👤  🛒(3)  │
├─────────────────────────────────────────────────┤
│ CHECKOUT - PASO 1 DE 3                          │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ DATOS DE ENVÍO                              │ │
│ │                                             │ │
│ │ Nombre Completo:                            │ │
│ │ [_________________________________]         │ │
│ │                                             │ │
│ │ Correo Electrónico:                         │ │
│ │ [_________________________________]         │ │
│ │                                             │ │
│ │ Teléfono:                                   │ │
│ │ [_________________________________]         │ │
│ │                                             │ │
│ │ Dirección:                                  │ │
│ │ [_________________________________]         │ │
│ │                                             │ │
│ │ Ciudad:                                     │ │
│ │ [_________________________________]         │ │
│ │                                             │ │
│ │ Departamento/Estado:                        │ │
│ │ [_________________________________]         │ │
│ │                                             │ │
│ │ Código Postal:                              │ │
│ │ [_________________________________]         │ │
│ │                                             │ │
│ │ País:                                       │ │
│ │ [▼ Colombia_________________]               │ │
│ │                                             │ │
│ │ ☐ Guardar esta dirección                    │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ [CANCELAR]  [SIGUIENTE PASO →]                 │
├─────────────────────────────────────────────────┤
│ © 2025 Zapatillas JyR | Contacto | Términos   │
└─────────────────────────────────────────────────┘
```

---

## 7. Prototipo: Pago (Stripe)

### 7.1 Mockup de Alta Fidelidad

```
┌─────────────────────────────────────────────────┐
│ 🔷 ZAPATILLAS JyR   [Búsqueda...]  👤  🛒(3)  │
├─────────────────────────────────────────────────┤
│ CHECKOUT - PASO 2 DE 3                          │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ INFORMACIÓN DE PAGO                         │ │
│ │                                             │ │
│ │ Nombre en la tarjeta:                       │ │
│ │ [_________________________________]         │ │
│ │                                             │ │
│ │ Número de tarjeta:                          │ │
│ │ [____ ____ ____ ____] [Stripe Secure]      │ │
│ │                                             │ │
│ │ Fecha de vencimiento:  Código de seguridad: │ │
│ │ [__ / __]              [___]                │ │
│ │                                             │ │
│ │ ☐ Guardar esta tarjeta para futuras compras │ │
│ │                                             │ │
│ │ Dirección de facturación:                   │ │
│ │ ☐ Usar dirección de envío                   │ │
│ │ ☐ Usar dirección diferente                  │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ RESUMEN DE COMPRA                               │
│ Subtotal:                          $499.96     │
│ Impuestos (19%):                   $94.99      │
│ Envío:                             $9.99       │
│ ─────────────────────────────────────────────  │
│ TOTAL:                             $604.94     │
│                                                 │
│ [CANCELAR]  [CONFIRMAR PAGO]                   │
├─────────────────────────────────────────────────┤
│ © 2025 Zapatillas JyR | Contacto | Términos   │
└─────────────────────────────────────────────────┘
```

---

## 8. Prototipo: Confirmación de Orden

### 8.1 Mockup de Alta Fidelidad

```
┌─────────────────────────────────────────────────┐
│ 🔷 ZAPATILLAS JyR   [Búsqueda...]  👤  🛒(0)  │
├─────────────────────────────────────────────────┤
│                                                 │
│        ╔═════════════════════════════╗         │
│        ║  ✓ ¡ORDEN CONFIRMADA!      ║         │
│        ╚═════════════════════════════╝         │
│                                                 │
│ Número de Orden: #ORD-2025-001234              │
│ Fecha: 24 de Diciembre de 2025                 │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ DETALLES DE LA ORDEN                        │ │
│ │                                             │ │
│ │ Nike Air Max 90 (Talla 40)      x1 $149.99 │ │
│ │ Adidas Ultra Boost (Talla 39)   x2 $259.98 │ │
│ │ Converse All Star (Talla 38)    x1 $89.99  │ │
│ │                                             │ │
│ │ Subtotal:                       $499.96    │ │
│ │ Impuestos:                      $94.99     │ │
│ │ Envío:                          $9.99      │ │
│ │ ─────────────────────────────────────────  │ │
│ │ TOTAL PAGADO:                   $604.94    │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ INFORMACIÓN DE ENVÍO                        │ │
│ │                                             │ │
│ │ Enviado a:                                  │ │
│ │ Juan Pérez                                  │ │
│ │ Calle 123 #456, Apartamento 789            │ │
│ │ Bogotá, Cundinamarca 110111                │ │
│ │ Colombia                                    │ │
│ │                                             │ │
│ │ Tiempo de entrega estimado: 3-5 días hábiles│
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ Se ha enviado un email de confirmación a:      │
│ juan.perez@email.com                           │
│                                                 │
│ [VER MIS PEDIDOS]  [CONTINUAR COMPRANDO]       │
│                                                 │
│ ¿Necesitas ayuda? Contacta a nuestro equipo   │
│ Email: soporte@zapatillasjyr.com              │
├─────────────────────────────────────────────────┤
│ © 2025 Zapatillas JyR | Contacto | Términos   │
└─────────────────────────────────────────────────┘
```

---

## 9. Prototipo: Panel de Administración

### 9.1 Mockup de Alta Fidelidad

```
┌─────────────────────────────────────────────────┐
│ 🔷 ZAPATILLAS JyR   [Búsqueda...]  👤  🛒(3)  │
├─────────────────────────────────────────────────┤
│ PANEL DE ADMINISTRACIÓN                         │
│                                                 │
│ ☰ MENÚ                                          │
│ ├─ Dashboard                                    │
│ ├─ Productos                                    │
│ ├─ Pedidos                                      │
│ ├─ Clientes                                     │
│ ├─ Reportes                                     │
│ ├─ Generador de Imágenes IA                    │
│ └─ Configuración                                │
│                                                 │
│ ┌──────────────────────────────────────────────┐│
│ │ DASHBOARD                                    ││
│ │                                              ││
│ │ Estadísticas del Mes:                        ││
│ │ ┌─────────────┐ ┌─────────────┐             ││
│ │ │ Ventas      │ │ Pedidos     │             ││
│ │ │ $12,450.50  │ │ 127         │             ││
│ │ └─────────────┘ └─────────────┘             ││
│ │ ┌─────────────┐ ┌─────────────┐             ││
│ │ │ Clientes    │ │ Productos   │             ││
│ │ │ 234         │ │ 45          │             ││
│ │ └─────────────┘ └─────────────┘             ││
│ │                                              ││
│ │ Productos Más Vendidos:                      ││
│ │ 1. Nike Air Max 90      - 45 unidades       ││
│ │ 2. Adidas Ultra Boost   - 38 unidades       ││
│ │ 3. Converse All Star    - 32 unidades       ││
│ │                                              ││
│ │ Pedidos Recientes:                           ││
│ │ ┌──────────────────────────────────────────┐││
│ │ │ #ORD-001234 | Juan Pérez | $604.94 | ✓  │││
│ │ │ #ORD-001233 | María García | $349.99 | ✓ │││
│ │ │ #ORD-001232 | Carlos López | $199.99 | ⏳││
│ │ └──────────────────────────────────────────┘││
│ └──────────────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│ © 2025 Zapatillas JyR | Contacto | Términos   │
└─────────────────────────────────────────────────┘
```

---

## 10. Prototipo: Gestión de Productos (Admin)

### 10.1 Mockup de Alta Fidelidad

```
┌─────────────────────────────────────────────────┐
│ 🔷 ZAPATILLAS JyR   [Búsqueda...]  👤  🛒(3)  │
├─────────────────────────────────────────────────┤
│ GESTIÓN DE PRODUCTOS                            │
│                                                 │
│ [+ CREAR PRODUCTO]  [Búsqueda...]  [Filtros]   │
│                                                 │
│ ┌──────────────────────────────────────────────┐│
│ │ ID  │ Nombre          │ Marca   │ Precio │ ││
│ ├──────────────────────────────────────────────┤│
│ │ 1   │ Nike Air Max 90 │ Nike    │ $149.99│ ││
│ │     │ Stock: 15       │         │ [✎][🗑]│ ││
│ ├──────────────────────────────────────────────┤│
│ │ 2   │ Adidas Ultra    │ Adidas  │ $129.99│ ││
│ │     │ Stock: 8        │         │ [✎][🗑]│ ││
│ ├──────────────────────────────────────────────┤│
│ │ 3   │ Converse All    │ Converse│ $89.99 │ ││
│ │     │ Stock: 20       │         │ [✎][🗑]│ ││
│ └──────────────────────────────────────────────┘│
│                                                 │
│ [◀ Anterior] [1] [2] [3] [Siguiente ▶]         │
├─────────────────────────────────────────────────┤
│ © 2025 Zapatillas JyR | Contacto | Términos   │
└─────────────────────────────────────────────────┘
```

---

## 11. Prototipo: Formulario de Creación de Producto

### 11.1 Mockup de Alta Fidelidad

```
┌─────────────────────────────────────────────────┐
│ 🔷 ZAPATILLAS JyR   [Búsqueda...]  👤  🛒(3)  │
├─────────────────────────────────────────────────┤
│ CREAR NUEVO PRODUCTO                            │
│                                                 │
│ ┌──────────────────────────────────────────────┐│
│ │ INFORMACIÓN BÁSICA                           ││
│ │                                              ││
│ │ Nombre del Producto:                         ││
│ │ [_________________________________]          ││
│ │                                              ││
│ │ Descripción:                                 ││
│ │ [_________________________________]          ││
│ │ [_________________________________]          ││
│ │ [_________________________________]          ││
│ │                                              ││
│ │ Marca:                                       ││
│ │ [▼ Selecciona una marca___]                  ││
│ │                                              ││
│ │ Categoría:                                   ││
│ │ [▼ Selecciona una categoría___]              ││
│ │                                              ││
│ │ Precio:                                      ││
│ │ [_____________]                              ││
│ │                                              ││
│ │ IMÁGENES                                     ││
│ │ [📁 Subir Imágenes]                          ││
│ │ [Imagen 1] [Imagen 2] [Imagen 3]             ││
│ │                                              ││
│ │ STOCK POR TALLA                              ││
│ │ Talla 35: [___] unidades                     ││
│ │ Talla 36: [___] unidades                     ││
│ │ Talla 37: [___] unidades                     ││
│ │ Talla 38: [___] unidades                     ││
│ │ Talla 39: [___] unidades                     ││
│ │ Talla 40: [___] unidades                     ││
│ │                                              ││
│ │ [GENERAR DESCRIPCIÓN CON IA]                 ││
│ │                                              ││
│ │ [CANCELAR]  [GUARDAR PRODUCTO]               ││
│ └──────────────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│ © 2025 Zapatillas JyR | Contacto | Términos   │
└─────────────────────────────────────────────────┘
```

---

## 12. Notas sobre los Prototipos

### 12.1 Consideraciones de Diseño

- Los prototipos siguen la guía de estilos definida
- Se utilizan colores de la paleta (Oro, Azul Marino, Grises)
- La tipografía es clara y legible
- El espaciado es uniforme y generoso
- Los componentes son reutilizables

### 12.2 Responsive Design

- Los prototipos se adaptan a dispositivos móviles
- Se utiliza grid layout para productos
- Los formularios son accesibles en todos los tamaños
- Las imágenes se escalan proporcionalmente

### 12.3 Interactividad

- Los botones tienen estados hover y active
- Los formularios tienen validación visual
- Las transiciones son suaves
- Los errores se muestran de forma clara

---

## 13. Próximos Pasos

1. **Validación con usuarios:** Realizar testing con usuarios reales
2. **Iteraciones:** Ajustar prototipos basado en feedback
3. **Especificaciones de desarrollo:** Crear especificaciones técnicas detalladas
4. **Implementación:** Desarrollar componentes en React

---

**Documento preparado por:** Equipo de Diseño  
**Fecha:** Diciembre 2025  
**Versión:** 1.0
