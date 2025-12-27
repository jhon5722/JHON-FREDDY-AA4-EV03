# Historias de Usuario - Zapatillas JyR

**Proyecto:** Tienda en Línea de Moda  
**Versión:** 1.0  
**Fecha:** Diciembre 2025

---

## 1. Historias de Usuario - Cliente

### HU-001: Explorar Catálogo de Productos

**Como** cliente  
**Quiero** explorar un catálogo completo de zapatillas  
**Para** encontrar productos que me interesen

**Criterios de Aceptación:**

- Veo una página de inicio con productos destacados
- Puedo acceder a la sección de catálogo desde la navegación
- El catálogo muestra una cuadrícula de productos con imagen, nombre, precio y marca
- Cada producto tiene un botón para ver detalles
- La página es responsiva en dispositivos móviles

**Tareas Técnicas:**

- Crear componente `ProductGrid.tsx`
- Implementar procedimiento `products.list` en tRPC
- Crear página `ProductCatalog.tsx`
- Diseñar tarjetas de producto con shadcn/ui

**Estimación:** 4 horas

---

### HU-002: Filtrar Productos

**Como** cliente  
**Quiero** filtrar productos por categoría, talla, precio y marca  
**Para** encontrar exactamente lo que busco

**Criterios de Aceptación:**

- Hay una barra de filtros en el catálogo
- Puedo filtrar por una o múltiples categorías
- Puedo filtrar por rango de precio (mín-máx)
- Puedo filtrar por marca
- Puedo filtrar por talla disponible
- Los filtros se aplican en tiempo real
- Puedo limpiar todos los filtros con un botón
- El número de resultados se actualiza

**Tareas Técnicas:**

- Crear componente `FilterSidebar.tsx`
- Implementar lógica de filtros en `products.list`
- Usar estado local con React hooks
- Optimizar consultas a BD con índices

**Estimación:** 6 horas

---

### HU-003: Buscar Productos por Nombre

**Como** cliente  
**Quiero** buscar productos por nombre o características  
**Para** encontrar rápidamente lo que necesito

**Criterios de Aceptación:**

- Hay una barra de búsqueda visible en el catálogo
- Puedo escribir el nombre del producto
- Los resultados se actualizan mientras escribo (debounced)
- Se muestran sugerencias de búsqueda
- Puedo presionar Enter para buscar
- Los resultados destacan el término buscado

**Tareas Técnicas:**

- Crear componente `SearchBar.tsx`
- Implementar procedimiento `products.search` en tRPC
- Agregar índice full-text en BD para búsqueda rápida
- Implementar debounce en frontend

**Estimación:** 4 horas

---

### HU-004: Ver Detalles de Producto

**Como** cliente  
**Quiero** ver detalles completos de un producto  
**Para** tomar una decisión de compra informada

**Criterios de Aceptación:**

- Veo una galería de imágenes del producto (mínimo 3 imágenes)
- Puedo hacer zoom en las imágenes
- Veo el nombre, marca, precio y descripción
- Veo las tallas disponibles con stock
- Veo la disponibilidad (en stock/agotado)
- Veo especificaciones técnicas (material, color, etc.)
- Hay un botón para agregar al carrito
- Puedo seleccionar talla y cantidad antes de agregar

**Tareas Técnicas:**

- Crear página `ProductDetail.tsx`
- Crear componente `ImageGallery.tsx`
- Implementar procedimiento `products.getById` en tRPC
- Usar Lightbox para zoom de imágenes

**Estimación:** 6 horas

---

### HU-005: Agregar Productos al Carrito

**Como** cliente  
**Quiero** agregar productos al carrito  
**Para** comprar múltiples artículos

**Criterios de Aceptación:**

- Puedo agregar un producto con talla y cantidad seleccionadas
- Se valida que haya stock disponible
- Se valida que haya seleccionado una talla
- Se valida que la cantidad sea válida (1+)
- El carrito se actualiza en tiempo real
- Veo una notificación de confirmación
- El ícono del carrito muestra el número de items

**Tareas Técnicas:**

- Crear procedimiento `cart.add` en tRPC
- Crear contexto `CartContext.tsx`
- Implementar persistencia en localStorage
- Crear hook `useCart.ts`

**Estimación:** 5 horas

---

### HU-006: Ver Carrito de Compras

**Como** cliente  
**Quiero** ver el contenido de mi carrito  
**Para** revisar los productos que voy a comprar

**Criterios de Aceptación:**

- Puedo acceder al carrito desde cualquier página
- Veo una lista de productos en el carrito
- Veo imagen, nombre, talla, cantidad y precio de cada producto
- Se muestra el subtotal, impuestos y total
- Veo un botón para proceder al checkout
- Veo un botón para continuar comprando

**Tareas Técnicas:**

- Crear página `Cart.tsx`
- Crear componente `CartSummary.tsx`
- Implementar cálculo de totales

**Estimación:** 4 horas

---

### HU-007: Gestionar Cantidad en Carrito

**Como** cliente  
**Quiero** cambiar la cantidad de productos en el carrito  
**Para** ajustar mi compra

**Criterios de Aceptación:**

- Puedo aumentar o disminuir la cantidad
- Se valida que no exceda el stock disponible
- Se valida que la cantidad sea mínimo 1
- El total se recalcula automáticamente
- Puedo ver el nuevo total inmediatamente

**Tareas Técnicas:**

- Crear procedimiento `cart.updateQuantity` en tRPC
- Implementar controles +/- en componente CartItem
- Validar stock en backend

**Estimación:** 3 horas

---

### HU-008: Eliminar Productos del Carrito

**Como** cliente  
**Quiero** eliminar productos del carrito  
**Para** cambiar de opinión sobre una compra

**Criterios de Aceptación:**

- Hay un botón eliminar en cada producto del carrito
- Se pide confirmación antes de eliminar
- El producto se elimina inmediatamente
- El total se recalcula
- Se muestra un mensaje de confirmación

**Tareas Técnicas:**

- Crear procedimiento `cart.remove` en tRPC
- Implementar diálogo de confirmación
- Actualizar estado del carrito

**Estimación:** 2 horas

---

### HU-009: Autenticarse en el Sistema

**Como** cliente  
**Quiero** autenticarme en la plataforma  
**Para** acceder a mis datos y realizar compras

**Criterios de Aceptación:**

- Hay un botón de login visible
- Puedo hacer clic para iniciar sesión con OAuth
- Se redirige a la página de login de Manus
- Después de autenticarme, vuelvo a la tienda
- Mi información se carga automáticamente
- Veo mi nombre en la navegación

**Tareas Técnicas:**

- Configurar OAuth con Manus
- Crear procedimiento `auth.me` en tRPC
- Implementar hook `useAuth.ts`
- Crear componente `UserMenu.tsx`

**Estimación:** 3 horas

---

### HU-010: Ver Mi Perfil

**Como** cliente autenticado  
**Quiero** ver y editar mi perfil  
**Para** mantener mis datos actualizados

**Criterios de Aceptación:**

- Veo mi información personal (nombre, email)
- Puedo ver mi dirección de envío guardada
- Puedo editar mi información
- Los cambios se guardan correctamente
- Veo un mensaje de confirmación

**Tareas Técnicas:**

- Crear página `Profile.tsx`
- Crear procedimiento `users.getProfile` y `users.updateProfile`
- Crear formulario con validación

**Estimación:** 4 horas

---

### HU-011: Ver Historial de Pedidos

**Como** cliente autenticado  
**Quiero** ver mis pedidos anteriores  
**Para** rastrear mis compras

**Criterios de Aceptación:**

- Veo una lista de todos mis pedidos
- Cada pedido muestra fecha, número, estado y total
- Puedo hacer clic en un pedido para ver detalles
- Veo los productos que compré
- Veo la dirección de envío
- Veo el estado del envío

**Tareas Técnicas:**

- Crear página `OrderHistory.tsx`
- Crear procedimiento `orders.getUserOrders`
- Crear componente `OrderCard.tsx`

**Estimación:** 4 horas

---

### HU-012: Proceder al Checkout

**Como** cliente  
**Quiero** completar el proceso de compra  
**Para** recibir mis productos

**Criterios de Aceptación:**

- Veo un formulario con campos de envío
- Puedo ingresar o seleccionar dirección
- Veo un resumen de la compra
- Puedo revisar los productos antes de pagar
- Hay un botón para proceder al pago
- Se validan todos los campos requeridos

**Tareas Técnicas:**

- Crear página `Checkout.tsx`
- Crear componente `ShippingForm.tsx`
- Crear componente `OrderSummary.tsx`
- Implementar validación con Zod

**Estimación:** 5 horas

---

### HU-013: Pagar con Stripe

**Como** cliente  
**Quiero** pagar de forma segura con mi tarjeta  
**Para** completar mi compra

**Criterios de Aceptación:**

- Veo un formulario de pago seguro de Stripe
- Puedo ingresar datos de mi tarjeta
- El pago se procesa de forma segura
- Recibo confirmación del pago
- Se crea una orden en el sistema
- Se redirige a página de confirmación

**Tareas Técnicas:**

- Integrar Stripe Elements
- Crear procedimiento `payments.createPaymentIntent`
- Crear procedimiento `orders.create`
- Implementar manejo de errores de pago

**Estimación:** 6 horas

---

### HU-014: Recibir Confirmación de Compra

**Como** cliente  
**Quiero** recibir una confirmación de mi compra  
**Para** tener registro de la transacción

**Criterios de Aceptación:**

- Veo una página de confirmación con número de orden
- Recibo un email con los detalles de la compra
- El email incluye los productos, total y dirección de envío
- Puedo descargar un recibo (PDF)
- Hay un botón para volver a la tienda

**Tareas Técnicas:**

- Crear página `OrderConfirmation.tsx`
- Implementar envío de email con Nodemailer
- Generar PDF de recibo

**Estimación:** 4 horas

---

## 2. Historias de Usuario - Administrador

### HU-015: Acceder al Panel de Administración

**Como** administrador  
**Quiero** acceder a un panel de control  
**Para** gestionar la tienda

**Criterios de Aceptación:**

- Hay un enlace al panel de admin (solo visible para admins)
- Se valida que sea administrador
- El panel muestra un dashboard con estadísticas
- Veo opciones para gestionar productos, pedidos, etc.
- La navegación es clara e intuitiva

**Tareas Técnicas:**

- Crear página `AdminDashboard.tsx`
- Crear componente `AdminLayout.tsx`
- Implementar verificación de rol en frontend y backend
- Crear procedimiento `admin.getDashboard`

**Estimación:** 4 horas

---

### HU-016: Crear Nuevo Producto

**Como** administrador  
**Quiero** crear nuevos productos en el catálogo  
**Para** expandir la oferta de la tienda

**Criterios de Aceptación:**

- Hay un formulario para crear producto
- Puedo ingresar nombre, descripción, precio, marca
- Puedo seleccionar categoría
- Puedo ingresar tallas disponibles y stock
- Puedo subir múltiples imágenes
- Se validan todos los campos requeridos
- El producto se agrega al catálogo

**Tareas Técnicas:**

- Crear página `AdminProducts.tsx`
- Crear componente `ProductForm.tsx`
- Implementar procedimiento `admin.createProduct`
- Implementar carga de imágenes a S3
- Usar validación con Zod

**Estimación:** 6 horas

---

### HU-017: Editar Producto Existente

**Como** administrador  
**Quiero** editar productos existentes  
**Para** mantener la información actualizada

**Criterios de Aceptación:**

- Puedo seleccionar un producto de la lista
- El formulario se carga con los datos actuales
- Puedo modificar cualquier campo
- Puedo agregar o eliminar imágenes
- Los cambios se guardan correctamente
- Se muestra un mensaje de confirmación

**Tareas Técnicas:**

- Crear procedimiento `admin.updateProduct`
- Implementar carga de imágenes adicionales
- Manejar eliminación de imágenes

**Estimación:** 4 horas

---

### HU-018: Eliminar Producto

**Como** administrador  
**Quiero** eliminar productos del catálogo  
**Para** mantener la tienda actualizada

**Criterios de Aceptación:**

- Hay un botón eliminar en cada producto
- Se pide confirmación antes de eliminar
- El producto se elimina de la base de datos
- Las imágenes se eliminan del almacenamiento
- Se muestra un mensaje de confirmación

**Tareas Técnicas:**

- Crear procedimiento `admin.deleteProduct`
- Implementar eliminación de imágenes de S3
- Implementar diálogo de confirmación

**Estimación:** 3 horas

---

### HU-019: Actualizar Stock de Productos

**Como** administrador  
**Quiero** actualizar el stock de productos  
**Para** mantener la disponibilidad actualizada

**Criterios de Aceptación:**

- Puedo ver el stock actual de cada producto
- Puedo editar el stock directamente
- Los cambios se guardan inmediatamente
- Se valida que el stock sea un número válido
- Se muestra un mensaje de confirmación

**Tareas Técnicas:**

- Crear procedimiento `admin.updateStock`
- Implementar edición inline en tabla de productos

**Estimación:** 2 horas

---

### HU-020: Ver Lista de Pedidos

**Como** administrador  
**Quiero** ver todos los pedidos realizados  
**Para** procesarlos y enviarlos

**Criterios de Aceptación:**

- Veo una tabla con todos los pedidos
- Cada fila muestra número, cliente, fecha, estado y total
- Puedo filtrar por estado (pendiente, enviado, entregado)
- Puedo filtrar por fecha
- Puedo hacer clic en un pedido para ver detalles
- Hay un botón para actualizar el estado

**Tareas Técnicas:**

- Crear página `AdminOrders.tsx`
- Crear procedimiento `admin.getOrders`
- Crear componente `OrdersTable.tsx`

**Estimación:** 4 horas

---

### HU-021: Ver Detalles de Pedido

**Como** administrador  
**Quiero** ver los detalles completos de un pedido  
**Para** procesarlo correctamente

**Criterios de Aceptación:**

- Veo información del cliente (nombre, email, teléfono)
- Veo la dirección de envío
- Veo la lista de productos con cantidades y precios
- Veo el total del pedido
- Veo el estado actual del pedido
- Hay un botón para actualizar el estado

**Tareas Técnicas:**

- Crear página `AdminOrderDetail.tsx`
- Crear procedimiento `admin.getOrderById`

**Estimación:** 3 horas

---

### HU-022: Actualizar Estado de Pedido

**Como** administrador  
**Quiero** actualizar el estado de un pedido  
**Para** informar al cliente sobre su envío

**Criterios de Aceptación:**

- Puedo cambiar el estado (pendiente → procesando → enviado → entregado)
- Se valida la transición de estados
- El cliente recibe una notificación por email
- Se muestra un mensaje de confirmación

**Tareas Técnicas:**

- Crear procedimiento `admin.updateOrderStatus`
- Implementar envío de email de notificación
- Validar transiciones de estado

**Estimación:** 3 horas

---

### HU-023: Recibir Notificaciones de Nuevos Pedidos

**Como** administrador  
**Quiero** recibir notificaciones cuando se realiza un nuevo pedido  
**Para** procesarlo rápidamente

**Criterios de Aceptación:**

- Recibo un email cuando se crea un nuevo pedido
- El email incluye detalles del cliente y productos
- El email incluye el total y dirección de envío
- Puedo hacer clic en el email para ir al panel

**Tareas Técnicas:**

- Implementar envío de email en procedimiento `orders.create`
- Usar Nodemailer o SendGrid
- Crear plantilla de email

**Estimación:** 3 horas

---

### HU-024: Generar Imágenes Promocionales con IA

**Como** administrador  
**Quiero** generar imágenes promocionales usando IA  
**Para** crear contenido de marketing

**Criterios de Aceptación:**

- Hay una sección para generar imágenes
- Puedo describir la imagen que quiero
- El sistema genera imágenes usando IA
- Puedo ver las imágenes generadas
- Puedo descargar las imágenes
- Puedo guardar imágenes para usar en productos

**Tareas Técnicas:**

- Crear página `AdminImageGenerator.tsx`
- Integrar Manus LLM API para generación de imágenes
- Crear procedimiento `admin.generateImage`
- Implementar descarga de imágenes

**Estimación:** 4 horas

---

### HU-025: Ver Estadísticas de Ventas

**Como** administrador  
**Quiero** ver estadísticas de ventas  
**Para** analizar el desempeño de la tienda

**Criterios de Aceptación:**

- Veo gráficos de ventas por período
- Veo productos más vendidos
- Veo ingresos totales
- Veo número de pedidos
- Veo número de clientes
- Puedo filtrar por fecha

**Tareas Técnicas:**

- Crear procedimiento `admin.getStatistics`
- Usar Recharts para gráficos
- Implementar filtros de fecha

**Estimación:** 4 horas

---

## 3. Matriz de Trazabilidad

| HU | RF | Prioridad | Estado |
|----|----|-----------|---------| 
| HU-001 | RF-001 | Alta | Pendiente |
| HU-002 | RF-001 | Alta | Pendiente |
| HU-003 | RF-007 | Alta | Pendiente |
| HU-004 | RF-002 | Alta | Pendiente |
| HU-005 | RF-007 | Alta | Pendiente |
| HU-006 | RF-007 | Alta | Pendiente |
| HU-007 | RF-007 | Alta | Pendiente |
| HU-008 | RF-008 | Alta | Pendiente |
| HU-009 | RF-011 | Alta | Pendiente |
| HU-010 | RF-012 | Alta | Pendiente |
| HU-011 | RF-013 | Alta | Pendiente |
| HU-012 | RF-015, RF-016 | Alta | Pendiente |
| HU-013 | RF-017, RF-018 | Alta | Pendiente |
| HU-014 | RF-018, RF-020 | Alta | Pendiente |
| HU-015 | RF-004 | Alta | Pendiente |
| HU-016 | RF-004 | Alta | Pendiente |
| HU-017 | RF-004 | Alta | Pendiente |
| HU-018 | RF-004 | Alta | Pendiente |
| HU-019 | RF-004 | Alta | Pendiente |
| HU-020 | RF-004 | Alta | Pendiente |
| HU-021 | RF-004 | Alta | Pendiente |
| HU-022 | RF-004 | Alta | Pendiente |
| HU-023 | RF-019 | Alta | Pendiente |
| HU-024 | RF-006 | Media | Pendiente |
| HU-025 | RF-005 | Media | Pendiente |

---

**Documento preparado por:** Equipo de Desarrollo  
**Fecha:** Diciembre 2025  
**Versión:** 1.0
