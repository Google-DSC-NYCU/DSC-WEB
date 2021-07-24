import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Icons from 'vite-plugin-icons'
import { join } from 'path'

// https://cn.vitejs.dev/config/#resolve-conditions

export default defineConfig({
  base: './',
  mode: 'production',
  resolve: {
    alias: {
      '@': `${join(__dirname, 'src')}`
    }
  },
  plugins: [Vue(), Icons()]
})
