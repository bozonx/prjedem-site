export default {
  //head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  outDir: "../docs",
  cacheDir: "../.cache",
  metaChunk: true,
  lastUpdated: true,
  cleanUrls: true,
  lang: "en-US",
  //title: "Project Edem blog",
  //description: "Blog of the Project Edem an anarchist community in Argentina",
  locales: {
    root: { lang: "en-US" },
  },

  themeConfig: {
    i18nRouting: true,
    //logo: '/logo.svg',
    externalLinkIcon: true,
    search: {
      provider: "local",
    },

    // for locale files use
    lastUpdated: {
      formatOptions: {
        dateStyle: "medium",
        forceLocale: true,
      },
    },
  },
};
