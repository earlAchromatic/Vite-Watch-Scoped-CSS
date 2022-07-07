const path = require('path')
const { defineConfig } = require('vite')
import vue from '@vitejs/plugin-vue'


module.exports = defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      'test': path.resolve(__dirname, 'node_modules/vite-watch-scoped-css'),
      'vue': "vue/dist/vue.esm-bundler.js"
    }
  },
  server: {
    watch: {
      ignored: ['!*/node_modules/vite-watch-scoped-css/**']
    }
  },
  // The watched package must be excluded from optimization,
  // so that it can appear in the dependency graph and trigger hot reload.
  optimizeDeps: {
    exclude: ['vite-watch-scoped-css']
  },
  plugins: [vue()],
})