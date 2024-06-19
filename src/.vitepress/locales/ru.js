import configBase from "../configBase.js";
import commonParams from "../commonParams";

const LANG = "ru";
const DOC = `/${LANG}/${commonParams.docUrl}/`;

export default {
  label: "Русский",
  title: "Проект Эдем",
  description:
    "Проект Эдем это сеть анархистких комунн построенных на смесе сициалистической и рыночной экономики",
  themeConfig: {
    sidebar: {
      [DOC]: [
        {
          text: "Гид по проекту",
          items: [
            { text: "Введение", link: DOC },
            { text: "Экономика", link: DOC + "economics" },
          ],
        },
      ],
    },

    nav: [
      { text: "Донат", link: `/${LANG}/${commonParams.donateUrl}` },
      { text: "Описание проекта", link: DOC },
      { text: "Блог", link: commonParams.blogUrl },
      { text: "Мы в соц сетях", link: `/${LANG}/${commonParams.linksUrl}` },
      { text: "О нас", link: `/${LANG}/${commonParams.aboutUrl}` },
    ],
    siteTitle: "Проект Эдем",
    returnToTopLabel: "Наверх",
    sidebarMenuLabel: "Меню",
    darkModeSwitchLabel: "Тема",
    darkModeSwitchTitle: "Переключиться на тёмную тему",
    lightModeSwitchTitle: "Переключиться на светлую тему",
    footer: {
      message: "Копирование разрешено только со ссылкой на источник",
      copyright: "Copyright © 2024-present Project Edem",
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
          // don't forget to select while translate
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
                backButtonTitle: "Закрыть поиск",
                footer: {
                  selectText: "Выбрать",
                  selectKeyAriaLabel: "Кнопка ввод",
                  navigateText: "Навигация",
                  navigateUpKeyAriaLabel: "Стрелка вверх",
                  navigateDownKeyAriaLabel: "Стрелка вниз",
                  closeText: "Закрыть",
                  closeKeyAriaLabel: "Кнопка escape",
                },
              },
            },
          },
        },
      },
    },
  },
};
