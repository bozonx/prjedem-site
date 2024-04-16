// .vitepress/config.js
export default {
  lang: 'en-US',
  // site-level options
  title: 'VitePress',
  titleTemplate: ':title - Custom Suffix',
  description: 'Just playing around.',
  //srcDir: 'content',
  outDir: '../docs',

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    ru: {
      label: 'Russian',
      lang: 'ru', // optional, will be added  as `lang` attribute on `html` tag
      link: '/ru/guide' // default /fr/ -- shows on navbar translations menu, can be external

      // other locale specific properties...
    }
  },

  themeConfig: {
    // theme-level options
  }
}
