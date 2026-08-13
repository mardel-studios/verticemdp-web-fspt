import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
devToolbar: {
    enabled: false
  },
  site: 'https://pettigiani-fiscal.com.ar',
  vite: {
    plugins: [tailwindcss()],
  },
});
