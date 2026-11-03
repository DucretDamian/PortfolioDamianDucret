# Modelo 2D o 3D Personalizado de tu Gata

En esta carpeta (`public/cat/`) puedes colocar tu propio archivo 2D o 3D cuando quieras reemplazar la ilustración minimalista por defecto:

### Opción A: Usar una ilustración / sprite 2D propio (`.png`, `.webp`, `.svg`, `.gif`)
1. Guarda tu archivo aquí, por ejemplo: `public/cat/mi-gata.png`
2. En `src/components/hero/DeskScene.astro`, cambia el componente a:
   ```astro
   <CatWidget mode="2d" src="/cat/mi-gata.png" />
   ```

### Opción B: Usar un modelo 3D interactivo (`.glb` o `.gltf`)
1. Guarda tu modelo 3D aquí, por ejemplo: `public/cat/mi-gata.glb` (puedes crearlo en Blender, Blockbench o Spline).
2. En `src/components/hero/DeskScene.astro`, cambia el componente a:
   ```astro
   <CatWidget mode="3d" src="/cat/mi-gata.glb" />
   ```
   El componente cargará automáticamente `<model-viewer>` permitiendo rotar y ver el modelo 3D con sombras suaves sobre la mesa manteniendo el texto flotante y el contador de caricias.
