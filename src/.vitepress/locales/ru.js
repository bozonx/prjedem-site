import {
  LANG,
  base,
} from "vitepress-sls-blog-tmpl/src/configs/siteLocalesBase/ru.js";
import commonParams from "../commonParams";

const DOC = `/${LANG}/${commonParams.docUrl}/`;

export default {
  ...base,
  title: "Проект Эдем",
  description:
    "Проект Эдем это сеть анархистких комунн построенных на смесе сициалистической и рыночной экономики",
  themeConfig: {
    ...base.themeConfig,
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
    footer: {
      message: "Копирование разрешено только со ссылкой на источник",
      copyright: "Copyright © 2024-present Project Edem",
    },
    editLink: {
      pattern: commonParams.editLinkPattern,
      ...base.themeConfig.editLink,
    },
  },
};
