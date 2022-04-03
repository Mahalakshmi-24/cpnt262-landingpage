import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  components: [
    "~/Components",
    "~/Components/ui",
    "~/Components/cardlayout",
    "~/Components/footer",
    "~/Components/Hero",
    "~/Components/article",
    "~/Components/section",
    "~/pages",
  ],
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: [],
});