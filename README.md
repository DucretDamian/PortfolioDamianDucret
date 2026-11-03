# Portfolio Personal — Damián Ducret

Repositorio oficial de mi portfolio personal interactivo, diseñado para mostrar mis proyectos, stack tecnológico, experiencia e identidad como desarrollador.

---

## 1. Estructura del Sitio

1. **Inicio (Escena Interactiva):**
   - Presentación con mi nombre y un fondo ilustrado compuesto por una computadora, mesa y pared.
   - **Easter Eggs y Widgets:** Elementos interactivos tanto en la mesa como en la pared con micro-animaciones y textos flotantes (*tooltips*).
   - **Post-its en la Pared:** Notas adhesivas interactivas con ideas y proyectos futuros.
2. **Apartado de Proyectos:**
   - Listado de proyectos **actuales (en desarrollo)** y **finalizados**.
   - Incluye descripción detallada, previsualización (imagen o diagrama de arquitectura) y enlace directo al repositorio en GitHub.
3. **Tecnologías y Experiencia:**
   - Stack de herramientas, lenguajes y recorrido técnico.
4. **Contacto:**
   - Enlaces directos a redes profesionales y vías de contacto.

---

## 2. Stack Tecnológico y Configuración

- **Framework Principal:** [Astro](https://astro.build/) (arquitectura orientada a velocidad extrema, SEO y componentes limpios).
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (diseño adaptativo, utilidades modernas y soporte para modo claro/oscuro).
- **Hosting y CI/CD:** [Vercel](https://vercel.com/)
  - **Application Preset:** `Astro`
  - **Root Directory:** `./`
  - **Build Command:** `astro build` (`npm run build`)
  - **Output Directory:** `dist`

### Estructura de Directorios Planificada

```text
src/
├── assets/             # Imágenes de proyectos, diagramas y recursos gráficos del escritorio
├── components/
│   ├── layout/         # Navbar y Footer
│   ├── hero/           # Escena de Inicio: Pared, Mesa, PC, Post-its y Easter Eggs
│   ├── projects/       # Tarjetas de proyectos (Actuales y Finalizados) con preview
│   ├── stack/          # Tecnologías y experiencia
│   └── contact/        # Sección de contacto y enlaces
├── data/               # Datos tipados de proyectos, post-its y tecnologías
├── layouts/
│   └── Layout.astro    # Plantilla principal, SEO y configuración global
└── pages/
    └── index.astro     # Página principal
```

---

## 3. Metodología de Ramas (GitFlow)

El proyecto utiliza la metodología **GitFlow** acompañada de **Conventional Commits** para mantener un historial limpio, ordenado y trazable.

### Ramas Principales
- **`main`**: Rama de producción. Contiene únicamente código estable y desplegable en el dominio principal de Vercel.
- **`develop`**: Rama principal de integración y desarrollo. Todas las funcionalidades se fusionan aquí antes de pasar a una versión de producción.

### Ramas de Desarrollo y Soporte
- **`feature/*`**: Ramas creadas a partir de `develop` para construir cada sección o funcionalidad (se fusionan de vuelta en `develop` al completarse):
  - `feature/setup-astro`: Inicialización de Astro + Tailwind CSS y estructura base.
  - `feature/hero-desk`: Escena principal del escritorio, pared, post-its y easter eggs.
  - `feature/projects`: Sección de proyectos en curso y finalizados con previsualizaciones.
  - `feature/stack-experience`: Sección de tecnologías y experiencia.
  - `feature/contact`: Sección de contacto y cierre.
- **`release/*`**: Ramas creadas desde `develop` cuando se cierra una versión lista para subir a producción (`main`).
- **`hotfix/*`**: Ramas creadas desde `main` para corregir errores críticos en producción de forma inmediata (fusionándose luego tanto en `main` como en `develop`).

### Convención de Commits
- `feat:` Nueva funcionalidad o sección.
- `fix:` Corrección de errores.
- `style:` Ajustes visuales, diseño o formato que no alteran la lógica.
- `docs:` Cambios en la documentación (`README.md`, comentarios, diagramas).
- `chore:` Configuración de herramientas, dependencias o estructura del proyecto.
