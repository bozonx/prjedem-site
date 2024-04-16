// .vitepress/config.js
export default {
  lang: 'en-US',
  //lang: 'ru-RU',
  // site-level options
  title: 'Project Edem',
  //titleTemplate: ':title - Custom Suffix',
  description: 'Project Edem is a anarchist community in Argentina',
  //head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  outDir: '../docs',
  cacheDir: '../.cache',
  metaChunk: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://example.com'
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/pages' 
    },
//    en: {
//      label: 'English',
//      lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
//      link: '/pages/en' // default /fr/ -- shows on navbar translations menu, can be external
//    },
    ru: {
      label: 'Russian',
      lang: 'ru', // optional, will be added  as `lang` attribute on `html` tag
      link: '/ru/pages' // default /fr/ -- shows on navbar translations menu, can be external
    }
  },

  themeConfig: {
    // theme-level options

    i18nRouting: true,
    //logo: '/logo.svg',
    siteTitle: 'Hello World',
    aside: true,
    externalLinkIcon: true,
    // outline: {
    //   label: 'On this page',
    // },
    nav: [
            { text: 'Blog', link: '/blog' },
      { text: 'About', link: '/pages/about' },

            {
                      text: 'Dropdown Menu',
                      items: [
                                  { text: 'Item A', link: '/item-1' },
                                  { text: 'Item B', link: '/item-2' },
                                  { text: 'Item C', link: '/item-3' }
                                ]
                    }
          ],
    sidebar: [
            {
                      text: 'Guide',
                      items: [
                                  { text: 'Introduction', link: '/introduction' },
                                  { text: 'Getting Started', link: '/getting-started' },
                                  
                                ]
                    }
          ],
    socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
            { icon: 'twitter', link: '...' },
            // You can also add custom icons by passing SVG as string:
      //       {
      //               icon: {
      //                         svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
      //                                 },
      //                                         link: '...',
      //                                                 // You can include a custom label for accessibility too (optional but recommended):
      //                                                         ariaLabel: 'cool link'
      //                                                               }
                                                                         ],
    footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
          },
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
}
