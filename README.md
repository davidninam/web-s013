# Nina.com.bo - Web Application

Una aplicación web moderna desarrollada con Angular v21 y Material UI.

## 🚀 Características

- **Framework**: Angular v21
- **UI Library**: Angular Material v21
- **Estilos**: SCSS con tema personalizado
- **Responsive Design**: Adaptable a todos los dispositivos
- **Routing**: Navegación entre múltiples páginas

## 🎨 Paleta de Colores Personalizada

- **Primario**: `#4a2b8c` (Morado)
- **Secundario**: `#5a189a` (Morado oscuro)
- **Acento**: `#9d4edd` (Morado claro)
- **Complementarios**: 
  - `#c77dff` (Morado muy claro)
  - `#dec0f1` (Lavanda)
  - `#ffffff` (Blanco)
  - `#b8bedd` (Gris lavanda)

## 📱 Páginas

### Página Principal (/)
- Hero section con llamados a la acción
- Sección de servicios
- Testimonios de clientes
- Footer con enlaces y redes sociales

### Acerca de (/acerca)
- Información sobre Nina.com.bo
- Equipo Nina
- Premios y reconocimientos

### Servicios (/servicios)
- Desarrollo Web
- Desarrollo Móvil
- Software a Medida
- Consultoría Digital

### Contactos (/contactos)
- Formulario de contacto con validación
- Información de contacto

### Login (/login)
- Formulario de inicio de sesión
- Validación de campos

### Registro (/registro)
- Formulario de registro de usuario
- Validación de contraseñas

## 🧩 Componentes

### Layout
- **Navbar**: Barra de navegación responsive con menú hamburguesa
- **Footer**: Pie de página con enlaces y redes sociales

### Landing
- **LandingHero**: Sección hero con gradiente personalizado
- **ServicesSection**: Grid de servicios con iconos
- **Testimonials**: Tarjetas de testimonios con calificaciones

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start
# o
ng serve

# Compilar para producción
npm run build
# o
ng build
```

## 📦 Tecnologías Utilizadas

- Angular 21.0.0
- Angular Material 21.0.0
- TypeScript
- SCSS
- RxJS

## �� Estructura del Proyecto

```
src/
├── app/
│   ├── components/       # Componentes reutilizables
│   │   ├── navbar/
│   │   ├── footer/
│   │   ├── landing-hero/
│   │   ├── services-section/
│   │   └── testimonials/
│   ├── pages/           # Páginas de la aplicación
│   │   ├── home/
│   │   ├── about/
│   │   ├── services/
│   │   ├── contact/
│   │   ├── login/
│   │   └── register/
│   ├── app.config.ts    # Configuración de la app
│   ├── app.routes.ts    # Rutas de navegación
│   └── app.ts          # Componente raíz
├── styles.scss          # Estilos globales y tema
└── index.html          # HTML principal
```

## 🌐 Características Responsive

- **Desktop**: Menú completo en la barra de navegación
- **Tablet**: Adaptación de grids y espaciados
- **Mobile**: Menú hamburguesa con navegación desplegable

## ✨ Buenas Prácticas Implementadas

- Componentes modulares y reutilizables
- Validación de formularios con ReactiveFormsModule
- Uso de signals de Angular
- Importaciones standalone
- Código documentado con comentarios
- Uso de Material Design principles
- Responsive design con Flexbox y Grid

## 📄 Licencia

Ver archivo [LICENSE](LICENSE)

## 👥 Autor

Nina.com.bo - Soluciones digitales innovadoras
