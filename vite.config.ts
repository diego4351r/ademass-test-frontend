import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "src/assets/styles/abstracts/mixins/index" as *;
          @use "src/assets/styles/abstracts/functions/index" as *;
          @use "src/assets/styles/abstracts/variables/colors" as *;
          `,
      },
    },
  },
});
