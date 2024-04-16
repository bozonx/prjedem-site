
export default {
  label: 'Русский',
  title: 'Проект Эдем',
  themeConfig: {
    siteTitle: 'Проект Эдем',
    outline: {
      label: 'На этой странице',
    },
    footer: {
      message: 'Копирование разрешено только со ссылкой на источник',
      copyright: 'Copyright © 2024-present Project Eden'
    },
    nav: [
      { text: 'Блог', link: '/ru/blog/' },
      { text: 'Гид по проекту', link: '/ru/guide/intro' },
      { text: 'Донат', link: '/ru/donate' },
      { text: 'Мы в соц сетях', link: '/ru/links' },
      { text: 'О нас', link: '/ru/about' },
    ],
    sidebar: [
      {
        text: 'Блог',
        items: [
          { text: 'Самые свежие', link: '/ru/blog/recent' },
          { text: 'Тэги', link: '/ru/blog/alltags' },
        ]
      },
      {
        text: 'Гид по проекту',
        items: [
          { text: 'Введение', link: '/ru/guide/intro' },
          { text: 'Экономика', link: '/ru/guide/economics' },
        ]
      },
    ],
  },
}
