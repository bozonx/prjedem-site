import commonParams from "../commonParams";

const LANG = "ru";

export default {
  label: "Русский",
  title: "Проект Эдем",
  description: "Проект Эдем это анархисткая коммуна в Аргентине",
  themeConfig: {
    siteTitle: "Проект Эдем",
    returnToTopLabel: "Наверх",
    sidebarMenuLabel: "Меню",
    darkModeSwitchTitle: "Переключиться на тёмную тему",
    lightModeSwitchTitle: "Переключиться на светлую тему",
    outline: {
      label: "На этой странице",
    },
    footer: {
      message: "Копирование разрешено только со ссылкой на источник",
      copyright: "Copyright © 2024-present Project Eden",
    },
    editLink: {
      pattern: commonParams.editLinkPattern,
      text: "Редактировать эту страницу на GitHub",
    },
    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница",
    },
    lastUpdated: {
      text: "Последнее обновление",
      ...commonParams.lastUpdated,
    },
    nav: [
      { text: "Донат", link: `/${LANG}/${commonParams.donateUrl}` },
      { text: "Гид", link: `/${LANG}/${commonParams.guideUrl}` },
      { text: "Блог", link: commonParams.blogUrl },
      { text: "Мы в соц сетях", link: `/${LANG}/${commonParams.linksUrl}` },
      { text: "О нас", link: `/${LANG}/${commonParams.aboutUrl}` },
    ],
    sidebar: [
      // {
      //   text: 'Блог',
      //   items: [
      //     { text: 'Самые свежие', link: '/ru/blog/recent' },
      //     { text: 'Тэги', link: '/ru/blog/alltags' },
      //   ]
      // },
      {
        //text: 'Гид по проекту',
        items: [
          { text: "Введение", link: `/${LANG}/guide/` },
          { text: "Экономика", link: `/${LANG}/guide/economics` },
        ],
      },
    ],
  },
};
