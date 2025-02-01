export default defineNuxtConfig({
  css: ["@/assets/main.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@nuxt/eslint",
  ],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  eslint: {
    stylistic: {},
  },

  compatibilityDate: "2025-02-01",
});
