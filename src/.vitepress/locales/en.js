import configBase from "../configBase.js";
import commonParams from "../commonParams";

const LANG = "en";
const DOC = `/${LANG}/${commonParams.docUrl}/`;

export default {
  label: "English",
  title: "Project Eden",
  description:
    "The Eden Project is a network of anarchist communes built on a mixture of socialist and market economies",
  themeConfig: {
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
    returnToTopLabel: "Return to top",
    sidebarMenuLabel: "Menu",
    darkModeSwitchLabel: "Appearance",
    darkModeSwitchTitle: "Switch to dark theme",
    lightModeSwitchTitle: "Switch to light theme",
    footer: {
      message: "Copying is allowed only with a link to the source",
      copyright: "Copyright © 2024-present Project Edem",
    },
    docFooter: {
      prev: "Previous page",
      next: "Next page",
    },
    outline: {
      label: "On this page",
    },
    editLink: {
      pattern: commonParams.editLinkPattern,
      text: "Edit this page on GitHub",
    },
    lastUpdated: {
      ...configBase.themeConfig.lastUpdated,
      text: "Updated at",
    },
  },
  search: {
    options: {
      locales: {
        // don't forget to select while translate
        en: {
          translations: {
            button: {
              buttonText: "Search",
              buttonAriaLabel: "Search",
            },
            modal: {
              noResultsText: "No results for",
              resetButtonTitle: "Reset search",
              displayDetails: "Display detailed list",
              backButtonTitle: "Close search",
              footer: {
                selectText: "to select",
                selectKeyAriaLabel: "enter",
                navigateText: "to navigate",
                navigateUpKeyAriaLabel: "up arrow",
                navigateDownKeyAriaLabel: "down arrow",
                closeText: "to close",
                closeKeyAriaLabel: "escape",
              },
            },
          },
        },
      },
    },
  },
};
