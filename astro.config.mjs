// @ts-check
import { defineConfig } from 'astro/config';

// Sitio estático. build.format "file" genera /soluciones.html, que Netlify sirve como /soluciones.
export default defineConfig({
  site: 'https://www.ambienteozono.cl',
  build: { format: 'file' },
  trailingSlash: 'never',
});
