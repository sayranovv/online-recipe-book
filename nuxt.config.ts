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
  compatibilityDate: '2025-02-01'
})
