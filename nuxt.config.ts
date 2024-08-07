// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-04',
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  devtools: { enabled: true },
  devServer: {
    port: 3160,
  },
  colorMode: {
    classSuffix: '',
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/test-utils/module',
    'nuxt-icon',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
