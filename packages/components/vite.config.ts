import { defineConfig } from 'vitest/config'
import { quasar } from '@quasar/vite-plugin'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [quasar(), vue()]
})