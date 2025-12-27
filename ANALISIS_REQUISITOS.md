# Análisis de Requisitos - Zapatillas JyR

**Proyecto:** Tienda en Línea de Moda (Zapatillas)  
**Cliente:** Zapatillas JyR  
**Fecha:** Diciembre 2025  
**Autor:** Equipo de Desarrollo  
**Versión:** 1.0

---

## 1. Introducción

**Zapatillas JyR** es una plataforma de comercio electrónico especializada en la venta de zapatillas y accesorios de moda. El proyecto busca proporcionar una experiencia de compra elegante, intuitiva y segura, combinando un catálogo robusto, un sistema de pago integrado y herramientas de administración avanzadas.

### 1.1 Propósito del Documento

Este documento especifica los requisitos funcionales y no funcionales del sistema, establece historias de usuario, define la arquitectura técnica y proporciona los artefactos necesarios para el desarrollo del proyecto.

### 1.2 Alcance

El proyecto incluye:

- Desarrollo de frontend con React JS y TailwindCSS
- Backend con Node.js, Express y tRPC
- Base de datos MySQL
- Integración con Stripe para pagos
- Panel de administración
- Sistema de autenticación con OAuth
- Notificaciones por email
- Generación de imágenes con IA

---

## 2. Requisitos Funcionales

### 2.1 Gestión de Productos

| Requisito | Descripción | Prioridad |
|-----------|-------------|-----------|
| RF-001 | Catálogo de productos con filtros por categoría, talla, precio y marca | Alta |
| RF-002 | Página de detalle de producto con galería de imágenes, descripción y disponibilidad | Alta |
| RF-003 | Sistema de búsqueda por nombre y características | Alta |
| RF-004 | Panel de administración para crear, editar, eliminar y actualizar stock de productos | Alta |
| RF-005 | Gestión de categorías, marcas y tallas | Media |
| RF-006 | Generación de imágenes promocionales con IA | Media |

### 2.2 Carrito de Compras

| Requisito | Descripción | Prioridad |
|-----------|-------------|-----------|
| RF-007 | Sistema de carrito con gestión de cantidades | Alta |
| RF-008 | Eliminación de productos del carrito | Alta |
| RF-009 | Persistencia del carrito en sesión/localStorage | Alta |
| RF-010 | Cálculo automático de subtotal, impuestos y total | Alta |

### 2.3 Autenticación y Usuarios

| Requisito | Descripción | Prioridad |
|-----------|-------------|-----------|
| RF-011 | Autenticación con OAuth (Manus) | Alta |
| RF-012 | Perfil de usuario con información personal | Alta |
| RF-013 | Historial de pedidos del usuario | Alta |
| RF-014 | Sistema de roles (usuario, administrador) | Alta |

### 2.4 Checkout y Pagos

| Requisito | Descripción | Prioridad |
|-----------|-------------|-----------|
| RF-015 | Formulario de datos de envío | Alta |
| RF-016 | Resumen de compra antes de pagar | Alta |
| RF-017 | Integración con Stripe para pagos con tarjeta | Alta |
| RF-018 | Confirmación de pago y generación de orden | Alta |

### 2.5 Notificaciones

| Requisito | Descripción | Prioridad |
|-----------|-------------|-----------|
| RF-019 | Notificaciones automáticas por email al administrador | Alta |
| RF-020 | Confirmación de pedido al cliente por email | Media |

### 2.6 Página de Inicio

| Requisito | Descripción | Prioridad |
|-----------|-------------|-----------|
| RF-021 | Página de inicio con productos destacados | Alta |
| RF-022 | Sección de ofertas especiales | Media |
| RF-023 | Navegación clara y accesible | Alta |

---

## 3. Requisitos No Funcionales

| Requisito | Descripción | Prioridad |
|-----------|-------------|-----------|
| RNF-001 | Rendimiento: Carga de página < 3 segundos | Alta |
| RNF-002 | Seguridad: Encriptación de datos sensibles (SSL/TLS) | Alta |
| RNF-003 | Escalabilidad: Capacidad para manejar 1000+ usuarios concurrentes | Media |
| RNF-004 | Disponibilidad: Uptime >= 99.5% | Alta |
| RNF-005 | Compatibilidad: Funciona en navegadores modernos (Chrome, Firefox, Safari, Edge) | Alta |
| RNF-006 | Responsive: Diseño adaptable a dispositivos móviles | Alta |
| RNF-007 | Mantenibilidad: Código comentado y documentado | Alta |
| RNF-008 | Usabilidad: Interfaz intuitiva y accesible (WCAG 2.1 AA) | Media |

---

## 4. Historias de Usuario

### 4.1 Como Cliente

**HU-001: Navegar por el catálogo de productos**

```
Como cliente, quiero navegar por el catálogo de zapatillas
para encontrar productos que me interesen.

Criterios de aceptación:
- Puedo ver una lista de productos con imagen, nombre y precio
- Puedo filtrar por categoría, talla, precio y marca
- Puedo ordenar por precio, popularidad o fecha
- La búsqueda es rápida y responsiva
```

**HU-002: Ver detalles de un producto**

```
Como cliente, quiero ver detalles completos de un producto
para tomar una decisión de compra informada.

Criterios de aceptación:
- Veo una galería de imágenes del producto
- Veo descripción, precio, disponibilidad y tallas
- Puedo seleccionar talla y cantidad
- Veo reseñas y calificaciones (si aplica)
```

**HU-003: Agregar productos al carrito**

```
Como cliente, quiero agregar productos al carrito
para comprar múltiples artículos.

Criterios de aceptación:
- Puedo agregar productos con talla y cantidad seleccionadas
- El carrito se actualiza en tiempo real
- Veo el total del carrito en la navegación
- Puedo ver el contenido del carrito en cualquier momento
```

**HU-004: Gestionar el carrito**

```
Como cliente, quiero gestionar mi carrito
para modificar mi compra antes de pagar.

Criterios de aceptación:
- Puedo cambiar la cantidad de productos
- Puedo eliminar productos del carrito
- El total se recalcula automáticamente
- Puedo ver el resumen del carrito
```

**HU-005: Realizar checkout**

```
Como cliente, quiero completar el proceso de compra
para recibir mis productos.

Criterios de aceptación:
- Ingreso mis datos de envío
- Reviso el resumen de la compra
- Realizo el pago de forma segura con Stripe
- Recibo confirmación de la orden
```

**HU-006: Ver historial de pedidos**

```
Como cliente, quiero ver mi historial de pedidos
para rastrear mis compras.

Criterios de aceptación:
- Veo una lista de mis pedidos anteriores
- Puedo ver detalles de cada pedido
- Puedo ver el estado del pedido
```

### 4.2 Como Administrador

**HU-007: Gestionar productos**

```
Como administrador, quiero gestionar el catálogo de productos
para mantener la tienda actualizada.

Criterios de aceptación:
- Puedo crear nuevos productos con detalles completos
- Puedo editar información de productos existentes
- Puedo eliminar productos
- Puedo actualizar el stock
- Puedo ver el listado de productos
```

**HU-008: Ver pedidos**

```
Como administrador, quiero ver los pedidos realizados
para procesarlos y enviarlos.

Criterios de aceptación:
- Veo una lista de todos los pedidos
- Puedo filtrar por estado, fecha o cliente
- Veo detalles completos de cada pedido
- Recibo notificaciones de nuevos pedidos
```

**HU-009: Generar imágenes promocionales**

```
Como administrador, quiero generar imágenes promocionales
para crear contenido de marketing.

Criterios de aceptación:
- Puedo describir la imagen que quiero generar
- El sistema genera imágenes usando IA
- Puedo descargar y usar las imágenes generadas
```

---

## 5. Casos de Uso Principales

### 5.1 Caso de Uso: Compra de Producto

```
Actor Principal: Cliente
Precondición: Cliente está autenticado

Flujo Principal:
1. Cliente navega al catálogo
2. Cliente busca o filtra productos
3. Cliente selecciona un producto
4. Cliente ve detalles y galería de imágenes
5. Cliente selecciona talla y cantidad
6. Cliente agrega al carrito
7. Cliente procede al checkout
8. Cliente ingresa datos de envío
9. Cliente revisa resumen de compra
10. Cliente realiza pago con Stripe
11. Sistema confirma la orden
12. Cliente recibe confirmación por email

Flujo Alternativo (Producto sin stock):
- En paso 5, si la talla no está disponible, mostrar mensaje

Postcondición: Orden creada, pago procesado, email enviado
```

### 5.2 Caso de Uso: Gestión de Productos (Admin)

```
Actor Principal: Administrador
Precondición: Administrador está autenticado

Flujo Principal:
1. Admin accede al panel de administración
2. Admin selecciona "Gestionar Productos"
3. Admin ve lista de productos
4. Admin selecciona crear nuevo producto
5. Admin ingresa detalles del producto
6. Admin sube imágenes
7. Admin establece precio y stock
8. Admin guarda el producto
9. Sistema confirma la creación

Postcondición: Producto agregado al catálogo
```

---

## 6. Arquitectura del Sistema

### 6.1 Tecnología Stack

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Frontend | React JS | 19.2.1 |
| Styling | TailwindCSS | 4.1.14 |
| Backend | Node.js + Express | 22.13.0 |
| API | tRPC | 11.6.0 |
| Base de Datos | MySQL | 8.0+ |
| ORM | Drizzle | 0.44.5 |
| Autenticación | OAuth (Manus) | - |
| Pagos | Stripe | API v1 |
| Email | Nodemailer/SendGrid | - |
| IA | Manus LLM API | - |
| Almacenamiento | S3 | - |

### 6.2 Estructura de Directorios

```
zapatillas_jyr/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── Cart.tsx
│   │   │   ├── AdminLayout.tsx
│   │   │   └── ...
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── ProductCatalog.tsx
│   │   │   ├── ProductDetail.tsx
│   │   │   ├── Cart.tsx
│   │   │   ├── Checkout.tsx
│   │   │   ├── OrderHistory.tsx
│   │   │   ├── AdminDashboard.tsx
│   │   │   ├── AdminProducts.tsx
│   │   │   └── ...
│   │   ├── contexts/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── index.html
├── server/
│   ├── routers/
│   │   ├── products.ts
│   │   ├── cart.ts
│   │   ├── orders.ts
│   │   ├── admin.ts
│   │   └── ...
│   ├── db.ts
│   ├── routers.ts
│   └── _core/
├── drizzle/
│   ├── schema.ts
│   └── migrations/
├── shared/
│   └── const.ts
├── package.json
└── README.md
```

---

## 7. Modelo de Datos

### 7.1 Entidades Principales

**Usuario**
- id (PK)
- openId (OAuth)
- email
- nombre
- rol (usuario/admin)
- fechaCreacion
- ultimoAcceso

**Producto**
- id (PK)
- nombre
- descripción
- precio
- marca
- categoría
- stock
- imágenes
- tallas disponibles
- fechaCreacion

**CarritoItem**
- id (PK)
- usuarioId (FK)
- productoId (FK)
- talla
- cantidad
- fechaAñadido

**Orden**
- id (PK)
- usuarioId (FK)
- fechaPedido
- estado
- total
- direccionEnvío
- datosEnvío
- items

**OrdenItem**
- id (PK)
- ordenId (FK)
- productoId (FK)
- cantidad
- precio
- talla

---

## 8. Flujo de Datos

```
Cliente (Frontend)
    ↓
React Components
    ↓
tRPC Client
    ↓
API REST (/api/trpc)
    ↓
tRPC Router
    ↓
Procedures (Lógica de Negocio)
    ↓
Database Layer (Drizzle ORM)
    ↓
MySQL Database
```

---

## 9. Consideraciones de Seguridad

- **Autenticación:** OAuth con Manus
- **Autorización:** Verificación de roles en procedures
- **Encriptación:** SSL/TLS para datos en tránsito
- **Validación:** Validación de entrada en backend y frontend
- **Pagos:** PCI DSS compliance con Stripe
- **Sesiones:** Cookies seguras y httpOnly
- **CORS:** Configuración restrictiva

---

## 10. Consideraciones de Rendimiento

- **Caché:** Implementar caché de productos
- **Lazy Loading:** Carga perezosa de imágenes
- **Compresión:** Compresión de imágenes y assets
- **CDN:** Usar CDN para assets estáticos
- **Índices:** Índices en base de datos para búsquedas
- **Paginación:** Paginación en listados de productos

---

## 11. Plan de Desarrollo

| Fase | Duración | Actividades |
|------|----------|-------------|
| Análisis y Diseño | 2 días | Requisitos, diagramas, prototipos |
| Backend | 3 días | Base de datos, APIs, autenticación |
| Frontend | 3 días | Componentes, páginas, integración |
| Integraciones | 2 días | Stripe, email, IA |
| Testing | 1 día | Pruebas unitarias e integración |
| Despliegue | 1 día | Configuración y publicación |

**Total:** ~12 días de desarrollo

---

## 12. Criterios de Aceptación del Proyecto

- ✅ Todas las funcionalidades implementadas según requisitos
- ✅ Código comentado y documentado
- ✅ Estándares de codificación aplicados
- ✅ Pruebas unitarias con cobertura > 80%
- ✅ Versionamiento con Git
- ✅ Documentación técnica completa
- ✅ Diagramas UML generados
- ✅ Prototipos y mockups disponibles
- ✅ Despliegue exitoso

---

## 13. Riesgos y Mitigación

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|--------|-----------|
| Integración Stripe fallida | Media | Alto | Testing temprano, documentación oficial |
| Performance en catálogo | Media | Medio | Paginación, caché, índices |
| Seguridad de pagos | Baja | Crítico | PCI DSS, validación, SSL |
| Disponibilidad de BD | Baja | Alto | Backups, monitoreo, redundancia |

---

**Documento preparado por:** Equipo de Desarrollo  
**Fecha de aprobación:** Diciembre 2025  
**Versión:** 1.0
