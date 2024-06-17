import { defineConfig } from "vitepress";
import en from "./locales/en";
import ru from "./locales/ru";

export default defineConfig({
  //head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  outDir: "../docs",
  cacheDir: "../.cache",
  metaChunk: true,
  lastUpdated: true,
  cleanUrls: true,
  sitemap: {
    hostname: "https://example.com",
  },
  lang: "en-US",
  //title: "Project Edem blog",
  //description: "Blog of the Project Edem an anarchist community in Argentina",
  locales: {
    root: {
      lang: "en-US",
    },
    en: {
      lang: "en-US",
      ...en,
    },

    ru: {
      lang: "ru-RU",
      ...ru,
    },
  },

  themeConfig: {
    i18nRouting: true,
    //logo: '/logo.svg',
    externalLinkIcon: true,
    socialLinks: [
      { icon: "github", link: "https://github.com/bozonx/prjedem-site" },
    ],
  },
});
