import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Icons from 'vite-plugin-icons'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': `${join(__dirname, 'src')}`
    }
  },
  plugins: [Vue(), Icons()]
})
