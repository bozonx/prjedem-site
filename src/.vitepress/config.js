import { defineConfig } from "vitepress";
import configBase from "./configBase.js";
import en from "./locales/en";
import ru from "./locales/ru";

export default defineConfig({
  ...configBase,
  sitemap: {
    hostname: "https://prjedem.org",
  },
  locales: {
    ...configBase.locales,
    en: { lang: "en-US", ...en },
    ru: { lang: "ru-RU", ...ru },
  },

  themeConfig: {
    ...configBase.themeConfig,
    socialLinks: [
      { icon: "github", link: "https://github.com/bozonx/prjedem-site" },
    ],
  },
});
