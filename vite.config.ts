import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Plugins
import host from 'vite-plugin-host';
import viteCompression from 'vite-plugin-compression';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    host(),
    viteCompression({
      algorithm: "brotliCompress",
      verbose: true,
    }),
  ],
});
