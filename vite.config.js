import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', 
  build: {
    rollupOptions: {
      output: {
        // Generar todos los archivos en la raíz del directorio de salida
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        // Colocar los assets (imágenes, fuentes, etc.) en la raíz del directorio de salida
        dir: 'dist'
      }
    }
  }
})
