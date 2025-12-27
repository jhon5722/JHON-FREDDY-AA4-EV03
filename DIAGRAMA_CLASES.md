# Diagrama de Clases - Zapatillas JyR

## 1. Diagrama de Clases Principal

```mermaid
classDiagram
    class User {
        -int id
        -string openId
        -string email
        -string name
        -enum role
        -datetime createdAt
        -datetime updatedAt
        -datetime lastSignedIn
        +getProfile()
        +updateProfile()
        +getOrders()
        +getCart()
    }
    
    class Product {
        -int id
        -string name
        -string description
        -decimal price
        -int categoryId
        -int brandId
        -datetime createdAt
        -datetime updatedAt
        +getDetails()
        +getImages()
        +getStock()
        +updateStock()
    }
    
    class Category {
        -int id
        -string name
        -string description
        -datetime createdAt
        +getProducts()
    }
    
    class Brand {
        -int id
        -string name
        -string description
        -datetime createdAt
        +getProducts()
    }
    
    class ProductImage {
        -int id
        -int productId
        -string url
        -string s3Key
        -int displayOrder
        -datetime createdAt
        +delete()
    }
    
    class Size {
        -int id
        -string name
        -datetime createdAt
    }
    
    class ProductStock {
        -int id
        -int productId
        -int sizeId
        -int quantity
        -datetime updatedAt
        +updateQuantity()
        +decreaseStock()
        +isAvailable()
    }
    
    class CartItem {
        -int id
        -int userId
        -int productId
        -int sizeId
        -int quantity
        -datetime addedAt
        +updateQuantity()
        +remove()
        +getTotal()
    }
    
    class Order {
        -int id
        -string orderNumber
        -int userId
        -enum status
        -decimal totalAmount
        -string shippingAddress
        -string shippingCity
        -string shippingState
        -string shippingZip
        -string shippingCountry
        -string customerEmail
        -string customerPhone
        -string stripePaymentId
        -datetime createdAt
        -datetime updatedAt
        +getItems()
        +updateStatus()
        +calculateTotal()
        +getInvoice()
    }
    
    class OrderItem {
        -int id
        -int orderId
        -int productId
        -int sizeId
        -int quantity
        -decimal priceAtPurchase
        +getSubtotal()
    }
    
    class Payment {
        -int id
        -int orderId
        -string stripePaymentIntentId
        -decimal amount
        -string currency
        -string status
        -datetime createdAt
        +processPayment()
        +confirmPayment()
        +refund()
    }
    
    class ShoppingCart {
        -int userId
        -CartItem[] items
        +addItem()
        +removeItem()
        +updateQuantity()
        +clear()
        +getTotal()
        +getSubtotal()
        +getTax()
    }
    
    class OrderService {
        +createOrder()
        +getOrder()
        +updateOrderStatus()
        +cancelOrder()
        +getOrderHistory()
        +calculateTotal()
    }
    
    class ProductService {
        +getProducts()
        +getProductById()
        +searchProducts()
        +filterProducts()
        +createProduct()
        +updateProduct()
        +deleteProduct()
    }
    
    class PaymentService {
        +createPaymentIntent()
        +confirmPayment()
        +refundPayment()
        +getPaymentStatus()
    }
    
    class EmailService {
        +sendOrderConfirmation()
        +sendShippingNotification()
        +sendAdminNotification()
        +sendPasswordReset()
    }
    
    class ImageService {
        +generateImage()
        +uploadImage()
        +deleteImage()
        +getImageUrl()
    }
    
    class AuthService {
        +authenticate()
        +logout()
        +validateToken()
        +refreshToken()
    }
    
    %% Relaciones
    User "1" --> "*" CartItem : tiene
    User "1" --> "*" Order : realiza
    Product "1" --> "*" ProductImage : contiene
    Product "1" --> "*" ProductStock : tiene
    Product "1" --> "*" OrderItem : aparece_en
    Category "1" --> "*" Product : contiene
    Brand "1" --> "*" Product : fabrica
    Size "1" --> "*" ProductStock : define
    Size "1" --> "*" OrderItem : especifica
    CartItem "1" --> "1" Product : referencia
    CartItem "1" --> "1" Size : especifica
    Order "1" --> "*" OrderItem : contiene
    Order "1" --> "1" Payment : genera
    OrderItem "1" --> "1" Product : referencia
    OrderItem "1" --> "1" Size : especifica
    ShoppingCart "1" --> "*" CartItem : agrupa
    
    %% Servicios
    OrderService --|> Order : gestiona
    ProductService --|> Product : gestiona
    PaymentService --|> Payment : gestiona
    EmailService --|> Order : notifica
    ImageService --|> ProductImage : maneja
    AuthService --|> User : autentica
```

## 2. Diagrama de Clases - Entidades de Negocio

```mermaid
classDiagram
    class BaseEntity {
        #int id
        #datetime createdAt
        #datetime updatedAt
        +getId()
        +getCreatedAt()
        +getUpdatedAt()
    }
    
    class Product {
        -string name
        -string description
        -decimal price
        -int categoryId
        -int brandId
        +getName()
        +getPrice()
        +getDescription()
    }
    
    class Order {
        -string orderNumber
        -enum status
        -decimal totalAmount
        -ShippingInfo shippingInfo
        +getOrderNumber()
        +getStatus()
        +getTotal()
        +getShippingInfo()
    }
    
    class ShippingInfo {
        -string address
        -string city
        -string state
        -string zip
        -string country
        -string email
        -string phone
        +validate()
        +format()
    }
    
    class CartItem {
        -int quantity
        -Product product
        -Size size
        +getQuantity()
        +getProduct()
        +getSize()
        +getSubtotal()
    }
    
    class OrderItem {
        -int quantity
        -decimal priceAtPurchase
        -Product product
        -Size size
        +getQuantity()
        +getPriceAtPurchase()
        +getSubtotal()
    }
    
    BaseEntity <|-- Product
    BaseEntity <|-- Order
    BaseEntity <|-- CartItem
    BaseEntity <|-- OrderItem
    Order "1" --> "1" ShippingInfo : contiene
```

## 3. Diagrama de Clases - Servicios

```mermaid
classDiagram
    class IService {
        <<interface>>
    }
    
    class ProductService {
        -ProductRepository repo
        -ImageService imageService
        +list()
        +getById()
        +search()
        +filter()
        +create()
        +update()
        +delete()
    }
    
    class OrderService {
        -OrderRepository repo
        -PaymentService paymentService
        -EmailService emailService
        +create()
        +getById()
        +getUserOrders()
        +updateStatus()
        +cancel()
    }
    
    class CartService {
        -CartRepository repo
        -ProductService productService
        +add()
        +remove()
        +updateQuantity()
        +clear()
        +getTotal()
    }
    
    class PaymentService {
        -StripeClient stripeClient
        -PaymentRepository repo
        +createPaymentIntent()
        +confirmPayment()
        +refund()
    }
    
    class EmailService {
        -EmailProvider provider
        +sendOrderConfirmation()
        +sendShippingUpdate()
        +sendAdminNotification()
    }
    
    class AuthService {
        -OAuthProvider provider
        -UserRepository repo
        +authenticate()
        +logout()
        +validateToken()
    }
    
    class ImageService {
        -S3Client s3Client
        +generateImage()
        +uploadImage()
        +deleteImage()
    }
    
    IService <|-- ProductService
    IService <|-- OrderService
    IService <|-- CartService
    IService <|-- PaymentService
    IService <|-- EmailService
    IService <|-- AuthService
    IService <|-- ImageService
```

## 4. Diagrama de Clases - Repositorios

```mermaid
classDiagram
    class IRepository {
        <<interface>>
        +getById()
        +getAll()
        +create()
        +update()
        +delete()
    }
    
    class ProductRepository {
        -Database db
        +getById()
        +getAll()
        +search()
        +filter()
        +create()
        +update()
        +delete()
    }
    
    class OrderRepository {
        -Database db
        +getById()
        +getByUserId()
        +getAll()
        +create()
        +update()
        +delete()
    }
    
    class CartRepository {
        -Database db
        +getByUserId()
        +add()
        +remove()
        +update()
        +clear()
    }
    
    class UserRepository {
        -Database db
        +getById()
        +getByOpenId()
        +create()
        +update()
        +delete()
    }
    
    class PaymentRepository {
        -Database db
        +getById()
        +getByOrderId()
        +create()
        +update()
    }
    
    IRepository <|-- ProductRepository
    IRepository <|-- OrderRepository
    IRepository <|-- CartRepository
    IRepository <|-- UserRepository
    IRepository <|-- PaymentRepository
```

## 5. Diagrama de Clases - Validación

```mermaid
classDiagram
    class Validator {
        <<interface>>
        +validate()
        +getErrors()
    }
    
    class ProductValidator {
        +validateName()
        +validatePrice()
        +validateDescription()
        +validateImages()
    }
    
    class OrderValidator {
        +validateItems()
        +validateShippingInfo()
        +validateTotal()
    }
    
    class ShippingValidator {
        +validateAddress()
        +validateCity()
        +validateZip()
        +validateCountry()
    }
    
    class PaymentValidator {
        +validateAmount()
        +validateCurrency()
        +validatePaymentMethod()
    }
    
    Validator <|-- ProductValidator
    Validator <|-- OrderValidator
    Validator <|-- ShippingValidator
    Validator <|-- PaymentValidator
```

## 6. Diagrama de Clases - DTOs (Data Transfer Objects)

```mermaid
classDiagram
    class CreateProductDTO {
        -string name
        -string description
        -decimal price
        -int categoryId
        -int brandId
        -File[] images
        -ProductStockDTO[] stock
    }
    
    class CreateOrderDTO {
        -CartItemDTO[] items
        -ShippingInfoDTO shippingInfo
        -string paymentMethodId
    }
    
    class UpdateOrderStatusDTO {
        -int orderId
        -enum newStatus
        -string notes
    }
    
    class PaymentIntentDTO {
        -int orderId
        -decimal amount
        -string currency
    }
    
    class ShippingInfoDTO {
        -string address
        -string city
        -string state
        -string zip
        -string country
        -string email
        -string phone
    }
    
    class ProductStockDTO {
        -int sizeId
        -int quantity
    }
    
    class CartItemDTO {
        -int productId
        -int sizeId
        -int quantity
    }
```

## 7. Diagrama de Clases - Enums

```mermaid
classDiagram
    class UserRole {
        <<enumeration>>
        USER
        ADMIN
    }
    
    class OrderStatus {
        <<enumeration>>
        PENDING
        PROCESSING
        SHIPPED
        DELIVERED
        CANCELLED
    }
    
    class PaymentStatus {
        <<enumeration>>
        PENDING
        PROCESSING
        SUCCEEDED
        FAILED
        REFUNDED
    }
    
    class Currency {
        <<enumeration>>
        USD
        EUR
        MXN
        COP
    }
```

## 8. Relaciones Complejas

### 8.1 Relación: Usuario → Carrito → Orden

```
User (1)
  ├─ ShoppingCart (1)
  │   └─ CartItem (*)
  │       ├─ Product (1)
  │       └─ Size (1)
  └─ Order (*)
      ├─ OrderItem (*)
      │   ├─ Product (1)
      │   └─ Size (1)
      └─ Payment (1)
```

### 8.2 Relación: Producto → Categoría, Marca, Stock

```
Product (1)
  ├─ Category (1)
  ├─ Brand (1)
  ├─ ProductImage (*)
  └─ ProductStock (*)
      └─ Size (1)
```

### 8.3 Relación: Orden → Pago → Stripe

```
Order (1)
  ├─ OrderItem (*)
  │   └─ Product (1)
  ├─ Payment (1)
  │   └─ Stripe (external)
  └─ ShippingInfo (1)
```

## 9. Patrones de Diseño Utilizados

| Patrón | Uso | Clase |
|--------|-----|-------|
| Repository | Acceso a datos | ProductRepository, OrderRepository |
| Service | Lógica de negocio | ProductService, OrderService |
| DTO | Transferencia de datos | CreateProductDTO, CreateOrderDTO |
| Factory | Creación de objetos | OrderFactory, PaymentFactory |
| Observer | Eventos | EmailService (escucha eventos de Order) |
| Strategy | Algoritmos de pago | PaymentService (Stripe, PayPal) |
| Singleton | Instancia única | Database, StripeClient |

---

**Documento preparado por:** Equipo de Desarrollo  
**Fecha:** Diciembre 2025  
**Versión:** 1.0
