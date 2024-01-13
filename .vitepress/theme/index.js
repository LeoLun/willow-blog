import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import PageInfo from '../../components/PageInfo.vue'
import Tags from '../../components/Tags.vue'
import Header from '../../components/Header.vue'
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';


export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('PageInfo', PageInfo);
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // Should there be a new?
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-after': () => h(Tags),
      'layout-top': () => h(Header)
    })
  }
}
