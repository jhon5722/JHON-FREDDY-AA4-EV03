# Diagrama de Secuencia - Zapatillas JyR

## 1. Secuencia: Compra de Producto

```mermaid
sequenceDiagram
    participant Cliente
    participant Frontend as Frontend (React)
    participant Backend as Backend (tRPC)
    participant BD as Base de Datos
    participant Stripe
    participant Email
    
    Cliente->>Frontend: 1. Navega a catálogo
    Frontend->>Backend: 2. Solicita productos
    Backend->>BD: 3. Consulta productos
    BD-->>Backend: 4. Retorna productos
    Backend-->>Frontend: 5. Retorna productos
    Frontend-->>Cliente: 6. Muestra catálogo
    
    Cliente->>Frontend: 7. Selecciona producto
    Frontend->>Backend: 8. Solicita detalles
    Backend->>BD: 9. Consulta detalles
    BD-->>Backend: 10. Retorna detalles
    Backend-->>Frontend: 11. Retorna detalles
    Frontend-->>Cliente: 12. Muestra detalles
    
    Cliente->>Frontend: 13. Agrega al carrito
    Frontend->>Frontend: 14. Actualiza carrito local
    Frontend-->>Cliente: 15. Confirma adición
    
    Cliente->>Frontend: 16. Procede a checkout
    Frontend->>Backend: 17. Obtiene carrito
    Backend->>BD: 18. Consulta carrito
    BD-->>Backend: 19. Retorna carrito
    Backend-->>Frontend: 20. Retorna carrito
    Frontend-->>Cliente: 21. Muestra checkout
    
    Cliente->>Frontend: 22. Ingresa datos de envío
    Frontend->>Frontend: 23. Valida datos
    Frontend-->>Cliente: 24. Confirma validación
    
    Cliente->>Frontend: 25. Realiza pago
    Frontend->>Stripe: 26. Envía datos de tarjeta
    Stripe-->>Frontend: 27. Retorna token
    Frontend->>Backend: 28. Crea intención de pago
    Backend->>Stripe: 29. Crea Payment Intent
    Stripe-->>Backend: 30. Retorna Payment Intent
    Backend-->>Frontend: 31. Retorna Payment Intent
    Frontend->>Stripe: 32. Confirma pago
    Stripe-->>Frontend: 33. Pago confirmado
    
    Frontend->>Backend: 34. Confirma pago en backend
    Backend->>BD: 35. Crea orden
    BD-->>Backend: 36. Orden creada
    Backend->>BD: 37. Limpia carrito
    Backend->>Email: 38. Envía email de confirmación
    Email-->>Backend: 39. Email enviado
    Backend-->>Frontend: 40. Orden confirmada
    Frontend-->>Cliente: 41. Muestra confirmación
    Email-->>Cliente: 42. Recibe email de confirmación
```

## 2. Secuencia: Gestión de Productos (Admin)

```mermaid
sequenceDiagram
    participant Admin
    participant Frontend as Frontend (React)
    participant Backend as Backend (tRPC)
    participant BD as Base de Datos
    participant S3 as AWS S3
    participant LLM as Manus LLM
    
    Admin->>Frontend: 1. Accede a panel admin
    Frontend->>Backend: 2. Valida rol de admin
    Backend->>BD: 3. Consulta usuario
    BD-->>Backend: 4. Retorna usuario
    Backend-->>Frontend: 5. Acceso concedido
    Frontend-->>Admin: 6. Muestra panel
    
    Admin->>Frontend: 7. Selecciona crear producto
    Frontend-->>Admin: 8. Muestra formulario
    
    Admin->>Frontend: 9. Ingresa datos del producto
    Admin->>Frontend: 10. Sube imágenes
    Frontend->>S3: 11. Carga imágenes
    S3-->>Frontend: 12. Retorna URLs
    Frontend-->>Admin: 13. Confirma carga
    
    Admin->>Frontend: 14. Solicita descripción con IA
    Frontend->>Backend: 15. Envía prompt al LLM
    Backend->>LLM: 16. Genera descripción
    LLM-->>Backend: 17. Retorna descripción
    Backend-->>Frontend: 18. Retorna descripción
    Frontend-->>Admin: 19. Muestra descripción generada
    
    Admin->>Frontend: 20. Revisa y confirma
    Frontend->>Frontend: 21. Valida formulario
    Frontend->>Backend: 22. Envía datos del producto
    Backend->>Backend: 23. Valida datos
    Backend->>BD: 24. Crea producto
    BD-->>Backend: 25. Producto creado
    Backend-->>Frontend: 26. Confirmación
    Frontend-->>Admin: 27. Muestra éxito
```

## 3. Secuencia: Autenticación OAuth

```mermaid
sequenceDiagram
    participant Usuario
    participant Frontend as Frontend (React)
    participant Backend as Backend (Node.js)
    participant Manus as Manus OAuth
    participant BD as Base de Datos
    
    Usuario->>Frontend: 1. Hace clic en "Iniciar Sesión"
    Frontend->>Manus: 2. Redirige a login de Manus
    Manus-->>Usuario: 3. Muestra formulario de login
    
    Usuario->>Manus: 4. Ingresa credenciales
    Manus->>Manus: 5. Valida credenciales
    Manus-->>Frontend: 6. Redirige a callback
    
    Frontend->>Backend: 7. Envía código de autorización
    Backend->>Manus: 8. Intercambia código por token
    Manus-->>Backend: 9. Retorna token
    Backend->>BD: 10. Consulta usuario por openId
    BD-->>Backend: 11. Usuario no existe
    Backend->>BD: 12. Crea nuevo usuario
    BD-->>Backend: 13. Usuario creado
    Backend->>Backend: 14. Crea sesión
    Backend-->>Frontend: 15. Retorna sesión
    Frontend->>Frontend: 16. Guarda token en cookie
    Frontend-->>Usuario: 17. Redirige a inicio
```

## 4. Secuencia: Actualización de Estado de Orden

```mermaid
sequenceDiagram
    participant Admin
    participant Frontend as Frontend (React)
    participant Backend as Backend (tRPC)
    participant BD as Base de Datos
    participant Email
    participant Cliente
    
    Admin->>Frontend: 1. Accede a gestión de pedidos
    Frontend->>Backend: 2. Solicita lista de pedidos
    Backend->>BD: 3. Consulta pedidos
    BD-->>Backend: 4. Retorna pedidos
    Backend-->>Frontend: 5. Retorna pedidos
    Frontend-->>Admin: 6. Muestra lista
    
    Admin->>Frontend: 7. Selecciona un pedido
    Frontend->>Backend: 8. Solicita detalles
    Backend->>BD: 9. Consulta detalles
    BD-->>Backend: 10. Retorna detalles
    Backend-->>Frontend: 11. Retorna detalles
    Frontend-->>Admin: 12. Muestra detalles
    
    Admin->>Frontend: 13. Cambia estado a "Enviado"
    Frontend->>Backend: 14. Actualiza estado
    Backend->>Backend: 15. Valida transición
    Backend->>BD: 16. Actualiza orden
    BD-->>Backend: 17. Orden actualizada
    Backend->>Email: 18. Envía notificación
    Email-->>Backend: 19. Email enviado
    Backend-->>Frontend: 20. Confirmación
    Frontend-->>Admin: 21. Muestra éxito
    Email-->>Cliente: 22. Recibe notificación
```

## 5. Secuencia: Procesamiento de Pago con Stripe

```mermaid
sequenceDiagram
    participant Cliente
    participant Frontend as Frontend (React)
    participant StripeJS as Stripe.js
    participant Backend as Backend (tRPC)
    participant StripeAPI as Stripe API
    participant BD as Base de Datos
    
    Cliente->>Frontend: 1. Ingresa datos de tarjeta
    Frontend->>StripeJS: 2. Valida datos
    StripeJS-->>Frontend: 3. Validación OK
    Frontend->>Backend: 4. Crea Payment Intent
    Backend->>StripeAPI: 5. POST /payment_intents
    StripeAPI-->>Backend: 6. Retorna Payment Intent
    Backend-->>Frontend: 7. Retorna clientSecret
    
    Frontend->>StripeJS: 8. Confirma pago
    StripeJS->>StripeAPI: 9. Procesa pago
    StripeAPI-->>StripeJS: 10. Pago procesado
    StripeJS-->>Frontend: 11. Pago confirmado
    
    Frontend->>Backend: 12. Confirma pago en backend
    Backend->>StripeAPI: 13. Verifica estado
    StripeAPI-->>Backend: 14. Pago confirmado
    Backend->>BD: 15. Crea orden
    BD-->>Backend: 16. Orden creada
    Backend-->>Frontend: 17. Orden confirmada
    Frontend-->>Cliente: 18. Redirige a confirmación
```

## 6. Secuencia: Búsqueda y Filtrado de Productos

```mermaid
sequenceDiagram
    participant Usuario
    participant Frontend as Frontend (React)
    participant Backend as Backend (tRPC)
    participant BD as Base de Datos
    
    Usuario->>Frontend: 1. Ingresa término de búsqueda
    Frontend->>Frontend: 2. Aplica debounce
    Frontend->>Backend: 3. Envía búsqueda
    Backend->>BD: 4. Consulta full-text search
    BD-->>Backend: 5. Retorna resultados
    Backend-->>Frontend: 6. Retorna resultados
    Frontend-->>Usuario: 7. Muestra resultados
    
    Usuario->>Frontend: 8. Selecciona filtros
    Frontend->>Frontend: 9. Actualiza estado
    Frontend->>Backend: 10. Envía filtros
    Backend->>Backend: 11. Construye query
    Backend->>BD: 12. Consulta con filtros
    BD-->>Backend: 13. Retorna resultados
    Backend-->>Frontend: 14. Retorna resultados
    Frontend-->>Usuario: 15. Muestra productos filtrados
```

## 7. Secuencia: Generación de Imágenes con IA

```mermaid
sequenceDiagram
    participant Admin
    participant Frontend as Frontend (React)
    participant Backend as Backend (tRPC)
    participant LLM as Manus LLM API
    participant S3 as AWS S3
    participant BD as Base de Datos
    
    Admin->>Frontend: 1. Accede a generador de imágenes
    Admin->>Frontend: 2. Ingresa descripción
    Frontend->>Backend: 3. Envía prompt
    Backend->>LLM: 4. Genera imagen
    LLM-->>Backend: 5. Retorna URL de imagen
    Backend->>S3: 6. Descarga imagen
    S3-->>Backend: 7. Retorna imagen
    Backend->>S3: 8. Sube a bucket propio
    S3-->>Backend: 9. Retorna URL
    Backend-->>Frontend: 10. Retorna URL
    Frontend-->>Admin: 11. Muestra imagen generada
    
    Admin->>Frontend: 12. Guarda imagen para producto
    Frontend->>Backend: 13. Asocia imagen a producto
    Backend->>BD: 14. Actualiza producto
    BD-->>Backend: 15. Actualizado
    Backend-->>Frontend: 16. Confirmación
    Frontend-->>Admin: 17. Muestra éxito
```

## 8. Secuencia: Carrito de Compras

```mermaid
sequenceDiagram
    participant Usuario
    participant Frontend as Frontend (React)
    participant LocalStorage
    participant Backend as Backend (tRPC)
    participant BD as Base de Datos
    
    Usuario->>Frontend: 1. Agrega producto al carrito
    Frontend->>Frontend: 2. Valida disponibilidad
    Frontend->>LocalStorage: 3. Guarda en localStorage
    LocalStorage-->>Frontend: 4. Guardado
    Frontend-->>Usuario: 5. Confirma adición
    
    Usuario->>Frontend: 6. Cambia cantidad
    Frontend->>Frontend: 7. Actualiza cantidad
    Frontend->>LocalStorage: 8. Actualiza localStorage
    LocalStorage-->>Frontend: 9. Actualizado
    Frontend-->>Usuario: 10. Muestra total actualizado
    
    Usuario->>Frontend: 11. Elimina producto
    Frontend->>Frontend: 12. Elimina del carrito
    Frontend->>LocalStorage: 13. Actualiza localStorage
    LocalStorage-->>Frontend: 14. Actualizado
    Frontend-->>Usuario: 15. Muestra carrito actualizado
    
    Usuario->>Frontend: 16. Procede a checkout
    Frontend->>Backend: 17. Sincroniza carrito
    Backend->>BD: 18. Guarda carrito
    BD-->>Backend: 19. Guardado
    Backend-->>Frontend: 20. Confirmación
    Frontend-->>Usuario: 21. Redirige a checkout
```

## 9. Secuencia: Notificación por Email

```mermaid
sequenceDiagram
    participant Sistema
    participant EmailService
    participant EmailProvider as Email Provider<br/>Nodemailer/SendGrid
    participant Admin
    participant Cliente
    
    Sistema->>EmailService: 1. Evento: Nueva Orden
    EmailService->>EmailService: 2. Prepara datos
    EmailService->>EmailService: 3. Genera plantilla
    EmailService->>EmailProvider: 4. Envía email admin
    EmailProvider-->>EmailService: 5. Email enviado
    EmailService->>EmailProvider: 6. Envía email cliente
    EmailProvider-->>EmailService: 7. Email enviado
    EmailService-->>Sistema: 8. Confirmación
    EmailProvider-->>Admin: 9. Recibe email
    EmailProvider-->>Cliente: 10. Recibe email
```

## 10. Secuencia: Sincronización de Stock

```mermaid
sequenceDiagram
    participant Admin
    participant Frontend as Frontend (React)
    participant Backend as Backend (tRPC)
    participant BD as Base de Datos
    participant Cache
    
    Admin->>Frontend: 1. Actualiza stock
    Frontend->>Backend: 2. Envía nueva cantidad
    Backend->>Backend: 3. Valida cantidad
    Backend->>BD: 4. Actualiza stock
    BD-->>Backend: 5. Stock actualizado
    Backend->>Cache: 6. Invalida caché
    Cache-->>Backend: 7. Caché invalidado
    Backend-->>Frontend: 8. Confirmación
    Frontend-->>Admin: 9. Muestra éxito
    
    Backend->>Backend: 10. Publica evento
    Backend->>Frontend: 11. Notifica cambio
    Frontend-->>Frontend: 12. Actualiza disponibilidad
```

---

## Leyenda de Símbolos

| Símbolo | Significado |
|---------|------------|
| → | Solicitud/Mensaje |
| ← | Respuesta |
| ↔ | Comunicación bidireccional |
| ✓ | Validación exitosa |
| ✗ | Validación fallida |

---

**Documento preparado por:** Equipo de Desarrollo  
**Fecha:** Diciembre 2025  
**Versión:** 1.0
