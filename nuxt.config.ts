export default defineNuxtConfig({
  css: ['@/assets/main.css'],
  vite: {
    server: {
      hmr: true
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@nuxt/eslint'
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  eslint: {
    stylistic: {}
  },
  compatibilityDate: '2025-02-01',
  app: {
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap'
      }
    ]
  }
})
