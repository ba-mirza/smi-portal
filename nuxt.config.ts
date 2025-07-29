import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ['@element-plus/nuxt', "@prisma/nuxt"],
  elementPlus: {},
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  routeRules: {
    '/auth/**': {
      ssr: false,
      headers: {
        'X-Robots-Tag': 'noindex, nofollow'
      },
    },
    '/dashboard-admin/**': {
      ssr: false,
      headers: {
        'X-Robots-Tag': 'noindex, nofollow'
      },
    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ]
  }
})
