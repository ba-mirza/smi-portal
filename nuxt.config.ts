import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ['@element-plus/nuxt'],
  elementPlus: {},
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  vite: {
    plugins: [
      tailwindcss(),
    ]
  }
})
