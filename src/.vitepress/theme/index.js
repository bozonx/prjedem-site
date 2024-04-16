// You can directly import Vue files in the theme entry
// VitePress is pre-configured with @vitejs/plugin-vue.
// import Layout from './Layout.vue'
//
// export default {
//   Layout,
//   enhanceApp({ app, router, siteData }) {
//     // ...
//   }
// }
//

import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './custom.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  // enhanceApp({ app }) {
  //   // register your custom global components
  //   app.component('MyGlobalComponent' /* ... */)
  // }
  Layout,
}
