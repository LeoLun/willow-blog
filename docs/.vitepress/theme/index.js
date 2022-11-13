import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import PageInfo from '../../components/PageInfo.vue'
import Tags from '../../components/Tags.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('PageInfo', PageInfo);
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-after': () => h(Tags)
    })
  }
}
