// .vitepress/config.js
export default {
  //lang: 'en-US',
  lang: 'ru-RU',
  // site-level options
  title: 'Project Edem',
  titleTemplate: ':title - Custom Suffix',
  description: 'Project Edem is a anarchist community in Argentina',
  outDir: '../docs',

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/pages/en' 
    },
//    en: {
//      label: 'English',
//      lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
//      link: '/pages/en' // default /fr/ -- shows on navbar translations menu, can be external
//    },
    ru: {
      label: 'Russian',
      lang: 'ru', // optional, will be added  as `lang` attribute on `html` tag
      link: '/pages/ru' // default /fr/ -- shows on navbar translations menu, can be external
    }
  },

  themeConfig: {
    // theme-level options
  }
}
