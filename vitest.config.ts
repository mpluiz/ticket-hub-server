/// <reference types="vitest" />
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@tests', replacement: path.resolve(__dirname, './tests') }
    ]
  },
  test: {
    globals: true
  }
})
