import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [],
  components: [
    "~/Components",
    "~/Components/ui",
    "~/Components/cardlayout",
    "~/Components/footer",
    "~/Components/hero",
    "~/Components/article",
    "~/Components/section",
    "~/pages",
  ],
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: [],
});