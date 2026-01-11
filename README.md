# 🏀 Invictus Basketball Academy

![Basketball](https://img.shields.io/badge/Sport-Basketball-orange)
![Status](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)

> **Sitio web oficial de la Academia de Básquetbol Invictus**  
> Formando campeones dentro y fuera de la cancha desde 2016

---

## 📋 Descripción

Invictus Basketball Academy es una plataforma web moderna y responsive diseñada para una academia de básquetbol de élite. El sitio presenta los programas de entrenamiento, el equipo de entrenadores profesionales, galerías de momentos destacados, testimonios de atletas y un blog con noticias y anuncios.

### ✨ Características Principales

- **🎨 Diseño Deportivo Moderno**: Colores vibrantes (naranja y negro) con animaciones dinámicas
- **📱 100% Responsive**: Adaptado para dispositivos móviles, tablets y desktop
- **⚡ Rendimiento Optimizado**: Carga rápida con imágenes lazy-loading
- **🎯 Navegación Intuitiva**: Menú sticky con indicador de sección activa
- **📸 Galería Interactiva**: Sistema de filtros para categorizar imágenes
- **💬 Testimonios Dinámicos**: Carrusel automático con controles manuales
- **📝 Blog Funcional**: Sistema de filtros, búsqueda y paginación
- **📧 Formularios Validados**: Contacto con validación en tiempo real
- **🔍 SEO Optimizado**: Meta tags y estructura semántica

---

## 🚀 Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Variables personalizadas, Grid, Flexbox, animaciones
- **JavaScript ES6+**: Vanilla JS sin dependencias externas

### Librerías Externas
- **Font Awesome 6.5.1**: Sistema de iconografía
- **Google Fonts**: 
  - Bebas Neue (títulos)
  - Roboto (texto general)

### APIs de Imágenes
- **Unsplash**: Imágenes de alta calidad para galería y blog
- **Pravatar**: Avatares para testimonios y autores

---

## 📁 Estructura del Proyecto

```
invictus/
│
├── index.html              # Página principal
├── blog.html               # Página de blog/noticias
├── README.md               # Documentación
│
├── css/
│   └── style.css           # Estilos principales (~1500 líneas)
│
├── js/
│   └── main.js             # JavaScript funcional (~800 líneas)
│
└── images/
    └── (imágenes del proyecto)
```

---

## 🎯 Secciones Implementadas

### Página Principal (index.html)

1. **Hero Section**
   - Título impactante con animación
   - Call-to-actions destacados
   - Fondo con overlay dinámico

2. **Sobre la Academia**
   - Historia y misión
   - Estadísticas destacadas (500+ atletas, 25+ campeonatos)
   - Imagen con badge de años de experiencia

3. **Programas de Entrenamiento**
   - Mini Basketball (6-10 años)
   - Desarrollo Juvenil (11-16 años) - MÁS POPULAR
   - Élite Competitivo (17+ años)
   - Entrenamiento Personal

4. **Equipo de Entrenadores**
   - Perfiles profesionales con certificaciones
   - Enlaces a redes sociales
   - Hover effects interactivos

5. **Galería de Momentos**
   - Filtros: Todos, Entrenamientos, Partidos, Eventos
   - 8 imágenes de alta calidad
   - Overlay con información al hover

6. **Testimonios**
   - 5 testimonios reales
   - Carrusel con auto-avance (6 segundos)
   - Controles de navegación manual

7. **Formulario de Contacto**
   - Campos validados en tiempo real
   - Selector de programa de interés
   - Información de contacto completa
   - Enlaces a redes sociales

8. **Footer**
   - Enlaces rápidos organizados
   - Información de contacto
   - Créditos del desarrollador

### Página de Blog (blog.html)

1. **Header del Blog**
   - Título destacado
   - Fondo temático

2. **Sistema de Filtros**
   - Por categoría: Noticias, Eventos, Resultados, Consejos
   - Búsqueda en tiempo real

3. **Grid de Posts**
   - 8 artículos completos
   - Cards con imagen, categoría, fecha, autor
   - Paginación funcional (6 posts por página)

4. **Sidebar**
   - Post destacado
   - Lista de categorías con contador
   - Posts recientes
   - Newsletter
   - Enlaces sociales

---

## ⚙️ Funcionalidades JavaScript

### Navegación
- Menú hamburguesa responsive
- Scroll smooth entre secciones
- Indicador de sección activa
- Navbar con efecto al hacer scroll

### Galería
- Sistema de filtros dinámico
- Animación al cambiar categoría
- Lazy loading de imágenes

### Testimonios
- Carrusel con transiciones suaves
- Auto-avance cada 6 segundos
- Controles prev/next

### Blog
- Filtrado por categoría
- Búsqueda en tiempo real con debounce
- Paginación dinámica
- Sidebar interactivo

### Formularios
- Validación en tiempo real
- Feedback visual al usuario
- Prevención de envíos vacíos

### Animaciones
- Scroll animations con Intersection Observer
- Fade-in para elementos al aparecer en viewport
- Transiciones suaves en toda la UI

### Botón Scroll-to-Top
- Aparece después de 500px de scroll
- Animación suave al subir

---

## 🎨 Paleta de Colores

```css
--primary-color: #ff6b35       /* Naranja vibrante */
--secondary-color: #f7931e     /* Naranja dorado */
--dark-bg: #0a0a0a             /* Negro profundo */
--dark-secondary: #1a1a1a      /* Gris oscuro */
--dark-tertiary: #2a2a2a       /* Gris medio */
--white: #ffffff               /* Blanco puro */
--text-light: #e0e0e0          /* Gris claro */
--text-gray: #a0a0a0           /* Gris texto */
--border-color: #333333        /* Borde sutil */
```

---

## 🚀 Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (recomendado: VS Code)

### Pasos para Ejecutar

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/invictus-basketball.git
cd invictus-basketball
```

2. **Abrir el proyecto**
```bash
# Opción 1: Abrir directamente en el navegador
# Hacer doble clic en index.html

# Opción 2: Usar Live Server (VS Code)
# Click derecho en index.html > "Open with Live Server"

# Opción 3: Servidor HTTP simple con Python
python -m http.server 8000
# Abrir http://localhost:8000
```

3. **Navegar**
- Página principal: `index.html`
- Blog: `blog.html`

---

## 📱 Responsive Design

### Breakpoints

- **Desktop**: 992px+ (diseño completo)
- **Tablet**: 768px - 991px (adaptaciones menores)
- **Mobile**: < 768px (menú hamburguesa, columnas únicas)

### Características Responsive

- Grid adaptativo en todas las secciones
- Menú hamburguesa en móviles
- Imágenes optimizadas por tamaño de pantalla
- Botones y formularios touch-friendly
- Tipografía escalable con `clamp()`

---

## 🎯 Próximas Mejoras

### Funcionalidades Planeadas

- [ ] Sistema de backend para blog real
- [ ] Base de datos para formularios
- [ ] Sistema de reserva de clases online
- [ ] Panel de administración
- [ ] Integración con pasarela de pago
- [ ] Sistema de login para atletas
- [ ] Portal de videos de entrenamientos
- [ ] Chat en vivo
- [ ] PWA (Progressive Web App)
- [ ] Multi-idioma (ES/EN)

### Optimizaciones Técnicas

- [ ] Implementar Service Workers
- [ ] Optimización de imágenes con WebP
- [ ] Minificación de CSS/JS
- [ ] CDN para recursos estáticos
- [ ] Analytics y métricas
- [ ] Tests automatizados

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 👨‍💻 Autor

**Fernando Poblete**  
Desarrollador Full Stack

- GitHub: [@fernandopoblete](https://github.com/fernandopoblete)
- Email: fernando@example.com

---

## 🙏 Agradecimientos

- **Unsplash**: Por las imágenes de alta calidad
- **Font Awesome**: Por el excelente sistema de iconos
- **Google Fonts**: Por las tipografías profesionales
- **Pravatar**: Por los avatares de testimonios

---

## 📞 Contacto del Proyecto

**Invictus Basketball Academy**

- 📍 Dirección: Av. Principal 1234, Santiago, Chile
- 📱 Teléfono: +56 9 8765 4321
- 📧 Email: info@invictusbasketball.cl
- 🌐 Instagram: [@invictusbasketball](https://instagram.com/invictusbasketball)
- 🌐 Facebook: [/invictusbasketball](https://facebook.com/invictusbasketball)
- 🌐 Twitter: [@invictusbasket](https://twitter.com/invictusbasket)
- 🌐 YouTube: [Invictus Basketball](https://youtube.com/invictusbasketball)

---

## 📊 Estadísticas del Proyecto

- **Líneas de código**: ~4,000+
- **Páginas**: 2 (index, blog)
- **Secciones**: 8 principales
- **Componentes**: 15+ reutilizables
- **Animaciones**: 20+ efectos
- **Tiempo de desarrollo**: 3 días

---

<div align="center">

**🏀 Made with ❤️ by Fernando Poblete**

[⬆ Volver arriba](#-invictus-basketball-academy)

</div>
