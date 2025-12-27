# Guía de Estilos - Zapatillas JyR

**Proyecto:** Tienda en Línea de Moda  
**Versión:** 1.0  
**Fecha:** Diciembre 2025

---

## 1. Filosofía de Diseño

**Zapatillas JyR** adopta un estilo **elegante y sofisticado** que transmite calidad, lujo y confianza. El diseño se caracteriza por:

- **Minimalismo refinado:** Espacios en blanco generosos, tipografía clara
- **Sofisticación:** Colores neutros con acentos elegantes
- **Accesibilidad:** Contraste suficiente, navegación intuitiva
- **Modernidad:** Componentes actuales, animaciones sutiles
- **Lujo:** Detalles cuidados, imágenes de alta calidad

---

## 2. Paleta de Colores

### 2.1 Colores Primarios

| Color | Código | Uso | Descripción |
|-------|--------|-----|-------------|
| Blanco | `#FFFFFF` | Fondo principal | Limpio y elegante |
| Negro | `#1A1A1A` | Texto principal | Sofisticado, no puro negro |
| Gris Oscuro | `#2D2D2D` | Texto secundario | Subtítulos, descripciones |
| Gris Claro | `#F5F5F5` | Fondos secundarios | Secciones, tarjetas |

### 2.2 Colores de Acento

| Color | Código | Uso | Descripción |
|-------|--------|-----|-------------|
| Oro | `#D4AF37` | Botones, highlights | Lujo, elegancia |
| Plata | `#C0C0C0` | Bordes, detalles | Sofisticación |
| Azul Marino | `#1B3A6B` | Enlaces, acciones | Confianza, profesionalismo |
| Rojo Suave | `#E63946` | Alertas, errores | Atención sin agresividad |

### 2.3 Colores de Estado

| Estado | Color | Código |
|--------|-------|--------|
| Éxito | Verde | `#2ECC71` |
| Error | Rojo | `#E63946` |
| Advertencia | Naranja | `#F39C12` |
| Información | Azul | `#3498DB` |

### 2.4 Gradientes

```css
/* Gradiente elegante para hero */
background: linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%);

/* Gradiente sutil para tarjetas */
background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%);

/* Gradiente de acento */
background: linear-gradient(135deg, #D4AF37 0%, #C0C0C0 100%);
```

---

## 3. Tipografía

### 3.1 Familias de Fuentes

```css
/* Fuente Principal - Elegante y Moderna */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Fuente de Títulos - Sofisticada */
font-family: 'Playfair Display', Georgia, serif;

/* Fuente Monoespaciada - Código */
font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
```

### 3.2 Escala Tipográfica

| Elemento | Tamaño | Peso | Altura de Línea | Uso |
|----------|--------|------|-----------------|-----|
| H1 | 48px | 700 | 1.2 | Títulos principales |
| H2 | 36px | 700 | 1.3 | Títulos de sección |
| H3 | 28px | 600 | 1.4 | Subtítulos |
| H4 | 24px | 600 | 1.4 | Títulos de tarjeta |
| Body | 16px | 400 | 1.6 | Texto principal |
| Small | 14px | 400 | 1.5 | Texto secundario |
| Caption | 12px | 400 | 1.4 | Etiquetas, metadatos |

### 3.3 Ejemplos de Tipografía

```html
<!-- Título Principal -->
<h1 class="text-4xl font-bold text-gray-900">Zapatillas JyR</h1>

<!-- Subtítulo -->
<h2 class="text-2xl font-semibold text-gray-700">Colección Exclusiva</h2>

<!-- Texto Principal -->
<p class="text-base font-normal text-gray-600">
  Descubre nuestras zapatillas premium...
</p>

<!-- Texto Pequeño -->
<span class="text-sm font-normal text-gray-500">Disponible en stock</span>
```

---

## 4. Espaciado y Layout

### 4.1 Sistema de Espaciado

```css
/* Escala de espaciado (basada en 8px) */
--space-0: 0px;
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-7: 28px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
```

### 4.2 Márgenes y Padding

| Elemento | Padding | Margen |
|----------|---------|--------|
| Botón | 12px 24px | 0 |
| Tarjeta | 24px | 16px |
| Sección | 48px | 0 |
| Contenedor | 20px | 0 |

### 4.3 Grid Layout

```css
/* Grid de productos */
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
gap: 24px;
padding: 48px 20px;
```

---

## 5. Componentes Visuales

### 5.1 Botones

```css
/* Botón Primario */
.btn-primary {
  background-color: #D4AF37;
  color: #1A1A1A;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #C0A028;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(212, 175, 55, 0.3);
}

/* Botón Secundario */
.btn-secondary {
  background-color: transparent;
  color: #1B3A6B;
  border: 2px solid #1B3A6B;
  padding: 10px 22px;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: #1B3A6B;
  color: #FFFFFF;
}

/* Botón Terciario */
.btn-tertiary {
  background-color: transparent;
  color: #2D2D2D;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-tertiary:hover {
  background-color: #F5F5F5;
}
```

### 5.2 Tarjetas

```css
/* Tarjeta Base */
.card {
  background-color: #FFFFFF;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}

/* Tarjeta de Producto */
.product-card {
  background-color: #FFFFFF;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  transform: scale(1.02);
}

.product-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover img {
  transform: scale(1.05);
}
```

### 5.3 Formularios

```css
/* Input Base */
.input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #E5E5E5;
  border-radius: 4px;
  font-size: 16px;
  font-family: inherit;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: #D4AF37;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
}

.input:invalid {
  border-color: #E63946;
}

/* Label */
.label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #1A1A1A;
}

/* Error Message */
.error-message {
  color: #E63946;
  font-size: 12px;
  margin-top: 4px;
}
```

### 5.4 Navegación

```css
/* Navbar */
.navbar {
  background-color: #FFFFFF;
  border-bottom: 1px solid #E5E5E5;
  padding: 16px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* Nav Link */
.nav-link {
  color: #2D2D2D;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #D4AF37;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #D4AF37;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}
```

---

## 6. Sombras y Profundidad

```css
/* Sombra Suave */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

/* Sombra Media */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);

/* Sombra Profunda */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

/* Sombra Elevada */
box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);

/* Sombra Interna */
box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
```

---

## 7. Bordes y Radios

```css
/* Radio Suave */
border-radius: 4px;

/* Radio Medio */
border-radius: 8px;

/* Radio Grande */
border-radius: 12px;

/* Radio Circular */
border-radius: 50%;

/* Bordes */
border: 1px solid #E5E5E5;
border: 2px solid #D4AF37;
```

---

## 8. Animaciones y Transiciones

### 8.1 Transiciones

```css
/* Transición Suave */
transition: all 0.3s ease;

/* Transición Rápida */
transition: all 0.15s ease;

/* Transición Lenta */
transition: all 0.5s ease;

/* Transiciones Específicas */
transition: background-color 0.3s ease, transform 0.3s ease;
```

### 8.2 Animaciones

```css
/* Fade In */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide Up */
@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Scale */
@keyframes scale {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}

/* Pulse */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
```

---

## 9. Iconografía

### 9.1 Estilo de Iconos

- **Fuente:** Lucide React (24px por defecto)
- **Color:** Heredar del texto o usar color de acento
- **Peso:** Consistente (2px de grosor)
- **Espaciado:** 8px entre icono y texto

### 9.2 Iconos Comunes

| Icono | Uso | Código |
|-------|-----|--------|
| 🛒 | Carrito | `<ShoppingCart />` |
| ❤️ | Favoritos | `<Heart />` |
| 🔍 | Búsqueda | `<Search />` |
| 👤 | Usuario | `<User />` |
| 📦 | Envío | `<Package />` |
| ✓ | Confirmación | `<Check />` |
| ✕ | Cerrar | `<X />` |
| ⋮ | Menú | `<Menu />` |

---

## 10. Responsive Design

### 10.1 Breakpoints

```css
/* Mobile First */
/* Extra Small (xs): 0px - 640px */
/* Small (sm): 640px - 768px */
/* Medium (md): 768px - 1024px */
/* Large (lg): 1024px - 1280px */
/* Extra Large (xl): 1280px+ */

/* Ejemplos */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
```

### 10.2 Adaptaciones Responsivas

| Elemento | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Grid Productos | 1 columna | 2 columnas | 4 columnas |
| Padding | 16px | 24px | 48px |
| Fuente Body | 14px | 15px | 16px |
| Altura Hero | 300px | 400px | 600px |

---

## 11. Accesibilidad

### 11.1 Contraste de Colores

- **Texto sobre fondo:** Mínimo 4.5:1 (WCAG AA)
- **Componentes UI:** Mínimo 3:1 (WCAG AA)
- **Texto grande:** Mínimo 3:1 (WCAG AA)

### 11.2 Focus States

```css
/* Focus visible para teclado */
:focus-visible {
  outline: 2px solid #D4AF37;
  outline-offset: 2px;
}

/* No outline en mouse */
:focus:not(:focus-visible) {
  outline: none;
}
```

### 11.3 Etiquetas y ARIA

```html
<!-- Input con label -->
<label for="email">Correo Electrónico</label>
<input id="email" type="email" />

<!-- Botón con aria-label -->
<button aria-label="Cerrar diálogo">×</button>

<!-- Icono con aria-hidden -->
<span aria-hidden="true">→</span>
```

---

## 12. Ejemplos de Layouts

### 12.1 Página de Inicio

```
┌─────────────────────────────────────────┐
│           HEADER / NAVBAR               │
├─────────────────────────────────────────┤
│                                         │
│        HERO SECTION                     │
│        (Imagen + CTA)                   │
│                                         │
├─────────────────────────────────────────┤
│  PRODUCTOS DESTACADOS                   │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │
│  │      │ │      │ │      │ │      │  │
│  │ Prod │ │ Prod │ │ Prod │ │ Prod │  │
│  │      │ │      │ │      │ │      │  │
│  └──────┘ └──────┘ └──────┘ └──────┘  │
├─────────────────────────────────────────┤
│  OFERTAS ESPECIALES                     │
│  [Banner con descuento]                 │
├─────────────────────────────────────────┤
│           FOOTER                        │
└─────────────────────────────────────────┘
```

### 12.2 Página de Catálogo

```
┌──────────────────────────────────────────┐
│         HEADER / NAVBAR                  │
├──────────────────────────────────────────┤
│ FILTROS │ BÚSQUEDA │ ORDENAR             │
├────────┬──────────────────────────────────┤
│        │  PRODUCTOS                       │
│ Filtro │  ┌──────┐ ┌──────┐ ┌──────┐   │
│        │  │      │ │      │ │      │   │
│ Categ. │  │ Prod │ │ Prod │ │ Prod │   │
│ Marca  │  │      │ │      │ │      │   │
│ Precio │  └──────┘ └──────┘ └──────┘   │
│ Talla  │  ┌──────┐ ┌──────┐ ┌──────┐   │
│        │  │      │ │      │ │      │   │
│        │  │ Prod │ │ Prod │ │ Prod │   │
│        │  │      │ │      │ │      │   │
│        │  └──────┘ └──────┘ └──────┘   │
├────────┴──────────────────────────────────┤
│           FOOTER                         │
└──────────────────────────────────────────┘
```

---

## 13. Patrones de Interfaz

### 13.1 Patrón de Tarjeta de Producto

```
┌─────────────────────────┐
│                         │
│    [IMAGEN PRODUCTO]    │
│                         │
├─────────────────────────┤
│ Nombre Producto         │
│ ⭐⭐⭐⭐⭐ (5 reseñas)    │
│ $99.99                  │
│ Disponible en stock     │
├─────────────────────────┤
│  [Agregar al Carrito]   │
└─────────────────────────┘
```

### 13.2 Patrón de Formulario

```
┌─────────────────────────────────┐
│ Título del Formulario           │
├─────────────────────────────────┤
│ Etiqueta                        │
│ [Input]                         │
│                                 │
│ Etiqueta                        │
│ [Input]                         │
│                                 │
│ Etiqueta                        │
│ [Select]                        │
│                                 │
│ ☐ Aceptar términos              │
├─────────────────────────────────┤
│  [Enviar]  [Cancelar]           │
└─────────────────────────────────┘
```

---

## 14. Guía de Implementación en TailwindCSS

### 14.1 Configuración de Colores

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      'primary': '#D4AF37',
      'primary-dark': '#C0A028',
      'secondary': '#1B3A6B',
      'accent': '#E63946',
      'success': '#2ECC71',
      'warning': '#F39C12',
      'error': '#E63946',
      'info': '#3498DB',
      'neutral-900': '#1A1A1A',
      'neutral-700': '#2D2D2D',
      'neutral-100': '#F5F5F5',
      'neutral-50': '#FFFFFF',
    },
  },
};
```

### 14.2 Clases Personalizadas

```css
/* En index.css */
@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-primary text-neutral-900 font-semibold rounded transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg;
  }
  
  .btn-secondary {
    @apply px-6 py-3 bg-transparent border-2 border-secondary text-secondary font-semibold rounded transition-all duration-300 hover:bg-secondary hover:text-white;
  }
  
  .card {
    @apply bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1;
  }
  
  .product-card {
    @apply bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-102;
  }
}
```

---

## 15. Checklist de Diseño

- ✅ Paleta de colores consistente
- ✅ Tipografía clara y legible
- ✅ Espaciado uniforme
- ✅ Componentes reutilizables
- ✅ Animaciones sutiles
- ✅ Responsive en todos los dispositivos
- ✅ Accesibilidad WCAG 2.1 AA
- ✅ Contraste suficiente
- ✅ Focus states visibles
- ✅ Iconografía consistente

---

**Documento preparado por:** Equipo de Diseño  
**Fecha:** Diciembre 2025  
**Versión:** 1.0
