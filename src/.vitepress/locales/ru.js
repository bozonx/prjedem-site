import configBase from "../configBase.js";
import commonParams from "../commonParams";

const LANG = "ru";

export default {
  label: "Русский",
  title: "Проект Эдем",
  description: "Проект Эдем это анархисткая коммуна в Аргентине",
  themeConfig: {
    sidebar: {
      [`/${LANG}/guide/`]: [
        {
          text: "Гид по проекту",
          items: [
            { text: "Введение", link: `/${LANG}/guide/` },
            { text: "Экономика", link: `/${LANG}/guide/economics` },
          ],
        },
      ],
    },
    nav: [
      { text: "Донат", link: `/${LANG}/${commonParams.donateUrl}` },
      { text: "Гид", link: `/${LANG}/${commonParams.guideUrl}` },
      { text: "Блог", link: commonParams.blogUrl },
      { text: "Мы в соц сетях", link: `/${LANG}/${commonParams.linksUrl}` },
      { text: "О нас", link: `/${LANG}/${commonParams.aboutUrl}` },
    ],
    siteTitle: "Проект Эдем",
    returnToTopLabel: "Наверх",
    sidebarMenuLabel: "Меню",
    // Appearance
    darkModeSwitchLabel: "Тема",
    darkModeSwitchTitle: "Переключиться на тёмную тему",
    lightModeSwitchTitle: "Переключиться на светлую тему",
    footer: {
      message: "Копирование разрешено только со ссылкой на источник",
      copyright: "Copyright © 2024-present Project Eden",
    },
    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница",
    },
    outline: {
      label: "На этой странице",
    },
    editLink: {
      pattern: commonParams.editLinkPattern,
      text: "Редактировать эту страницу на GitHub",
    },
    lastUpdated: {
      ...configBase.themeConfig.lastUpdated,
      text: "Последнее обновление",
    },
    search: {
      options: {
        locales: {
          ru: {
            translations: {
              button: {
                buttonText: "Искать",
                buttonAriaLabel: "Искать",
              },
              modal: {
                noResultsText: "Ничего не найдено",
                resetButtonTitle: "Стереть",
                displayDetails: "Больше деталей",
                backButtonTitle: "Назад",
                footer: {
                  selectText: "Выбрать",
                  navigateText: "Навигация",
                  closeText: "Закрыть",
                },
              },
            },
          },
        },
      },
    },
  },
};
