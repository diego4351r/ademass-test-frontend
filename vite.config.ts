import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@components': fileURLToPath(new URL('./src/components', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "src/assets/styles/abstracts/mixins/index" as *;
          @use "src/assets/styles/abstracts/functions/index" as *;
          @use "src/assets/styles/abstracts/variables/colors" as *;
          `
      }
    }
  }
})
