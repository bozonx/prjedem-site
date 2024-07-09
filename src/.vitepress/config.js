import siteConfigBase from "vitepress-sls-blog-tmpl/src/configs/siteConfigBase.js";
import { loadSiteLocale } from "vitepress-sls-blog-tmpl/src/helpers/parseTranslations.js";

const PROPS = {
  // required
  hostname: "https://prjedem.org",
  repo: "https://github.com/bozonx/prjedem-site",
  editLinkPattern: "https://github.com/bozonx/prjedem-site/edit/main/src/:path",

  blogUrl: "https://blog.prjedem.org",
  footerCopyright: "Copyright © 2024-present Project Edem.",

  // used in links
  donateUrl: "page/donate",
  aboutUrl: "page/about",
  linksUrl: "page/links",
  docUrl: "doc",
};
const ru = loadSiteLocale("ru", __filename, PROPS);
const en = loadSiteLocale("en", __filename, PROPS);
const configBase = siteConfigBase(PROPS, en);

export default {
  ...configBase,
  locales: {
    ...configBase.locales,
    en: { lang: "en-US", ...en },
    ru: { lang: "ru-RU", ...ru },
  },
};
