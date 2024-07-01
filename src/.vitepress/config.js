import { defineConfig } from "vitepress";
import siteConfigBase from "vitepress-sls-blog-tmpl/src/configs/siteConfigBase.js";
import en from "./locales/en";
import ru from "./locales/ru";

export default defineConfig({
  ...siteConfigBase,
  sitemap: {
    hostname: "https://prjedem.org",
  },
  locales: {
    ...siteConfigBase.locales,
    en: { lang: "en-US", ...en },
    ru: { lang: "ru-RU", ...ru },
  },

  themeConfig: {
    ...siteConfigBase.themeConfig,
    socialLinks: [
      { icon: "github", link: "https://github.com/bozonx/prjedem-site" },
    ],
  },
});
