const path = require('path')
const { defineConfig } = require('vite')
import vue from '@vitejs/plugin-vue'

module.exports = defineConfig({
    resolve: {
        alias: {
          'vue': "vue/dist/vue.esm-bundler.js"
        }
      },
    plugins: [
      vue()
    ],
    build: {
        minify: false,
        watch: true,
        lib: {
          entry: path.resolve(__dirname, 'index.js'),
          formats: ['es'],
        },
        rollupOptions: {
          plugins: [],
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue'
            }
          }
        }
      }
})