# Ambiente Ozono · sitio web

Sitio de [ambienteozono.cl](https://www.ambienteozono.cl) construido con [Astro](https://astro.build) y publicado en Netlify.

## Desarrollo

```bash
npm install
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera el sitio estático en dist/
```

## Estructura

- `src/pages/` páginas del sitio (inicio, soluciones, somos-ao3, preguntas-frecuentes, blog)
- `src/components/` componentes reutilizables
- `src/data/site.js` contacto, industrias, línea Sewec Ozon, preguntas frecuentes y artículos
- `public/_redirects` redirecciones desde las URLs del sitio WordPress anterior

## Publicación

Netlify toma la configuración de `netlify.toml` (comando `npm run build`, carpeta `dist`). Cada push a `main` publica el sitio.

---
Desarrollado por Cristóbal Venegas · CIVF · Commercial Vibe Coding
