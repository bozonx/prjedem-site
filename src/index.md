
<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData, inBrowser } from 'vitepress'
import { watchEffect } from 'vue'

const { lang } = useData()
watchEffect(() => {
  if (inBrowser) {
    window.location.replace('/' + navigator.language + '/');
  }
})
</script>
