import head from './config/nuxt.head.js'

export default {
  head,
  
  build: {
    extractCSS: true
  },
  css: [
    '@/assets/theme.css'
  ]
}