import { defineConfig } from 'vite';

export default defineConfig({
  base: '/ds881-curriculo-GRR20221087/',
  server: {
    host: '0.0.0.0',
    port: 8080,
    watch: {
      usePolling: true,
    }
  }
});