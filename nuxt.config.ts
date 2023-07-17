// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    baseURL: '/~ge75cos/public/'
  },
  devtools: { enabled: true },
  css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ['vuetify'],
   },
vite: {
    define: {
        'process.env.DEBUG': false,
    },
  },
})
