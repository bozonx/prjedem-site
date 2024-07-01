import {
  LANG,
  base,
} from "vitepress-sls-blog-tmpl/src/configs/siteLocalesBase/ru.js";
import commonParams from "../commonParams";

const DOC = `/${LANG}/${commonParams.docUrl}/`;

export default {
  ...base,
  title: "Project Eden",
  description:
    "The Eden Project is a network of anarchist communes built on a mixture of socialist and market economies",
  themeConfig: {
    ...base.themeConfig,
    sidebar: {
      [DOC]: [
        {
          text: "Guide",
          items: [
            { text: "Introduction", link: DOC },
            { text: "Economics", link: DOC + "economics" },
          ],
        },
      ],
    },
    nav: [
      { text: "Donate", link: `/${LANG}/${commonParams.donateUrl}` },
      { text: "Description", link: DOC },
      { text: "Blog", link: commonParams.blogUrl },
      { text: "Our social media", link: `/${LANG}/${commonParams.linksUrl}` },
      { text: "About us", link: `/${LANG}/${commonParams.aboutUrl}` },
    ],
    siteTitle: "Project Eden",
    footer: {
      message: "Copying is allowed only with a link to the source",
      copyright: "Copyright © 2024-present Project Edem",
    },
    editLink: {
      pattern: commonParams.editLinkPattern,
      ...base.themeConfig.editLink,
    },
  },
};
