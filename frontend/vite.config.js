import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),  // This sets the alias for "src"
    },
  },
  server: {
    host: true,
    port: 5173,
  },
});
