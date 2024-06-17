<script setup>
import { useData, inBrowser } from 'vitepress'
import { watchEffect } from 'vue'

const { site } = useData()
const langindexes = Object.keys(site.value.locales)
  .filter((item) => item !== 'root')

watchEffect(() => {
  if (inBrowser) {
    const langToRedirect = (langindexes.includes(navigator.language))
      ? navigator.language
      : 'en'

    window.location.replace('/' + langToRedirect + '/');
  }
})
</script>
