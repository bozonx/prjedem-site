import { defineConfig } from 'vitepress'
import en from './locales/en'
import ru from './locales/ru'


export default defineConfig({
  //head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  outDir: '../docs',
  cacheDir: '../.cache',
  metaChunk: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://example.com'
  },

  lang: 'en-US',
  title: 'Project Edem',
  //titleTemplate: ':title - Custom Suffix',
  description: 'Project Edem is a anarchist community in Argentina',
  locales: {
    root: {
      lang: 'en-US',
      link: '/en', 
      ...en,
    },
//    en: {
//      label: 'English',
//      lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
//      link: '/pages/en' // default /fr/ -- shows on navbar translations menu, can be external
//    },
    ru: {
      link: '/ru', 
      lang: 'ru-RU',
      ...ru,
    },
  },

  themeConfig: {
    i18nRouting: true,
    //logo: '/logo.svg',
    aside: true,
    externalLinkIcon: true,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bozonx/prjedem-site' },
    ],
    editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
          },
    lastUpdated: {
            text: 'Updated at',
            formatOptions: {
                      dateStyle: 'full',
                      timeStyle: 'medium'
                    }
          },
    docFooter: {
            prev: 'Pagina prior',
            next: 'Proxima pagina'
          },

    
  }
})
