// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    "~/assets/style/variables.css",
    "~/assets/style/reset.css",
    "~/assets/style/global.css",
  ],

  modules: ["nuxt-snackbar"],

  snackbar: {
    top: true,
    right: true,
    duration: 3000,
  },
});
