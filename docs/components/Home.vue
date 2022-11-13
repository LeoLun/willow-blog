<script setup>
import { ref } from 'vue';
import { useData } from 'vitepress';
import PageListItem from './PageListItem.vue';

const { theme, localePath } = useData();

console.log('localePath', localePath.value)
const pageInfo = ref(theme.value.pages);

</script>
<template>
  <div >
    <div>
      <PageListItem v-for="page in pageInfo" :item="page" />
    </div>
  </div>
</template>
<style lang="less" scoped>
</style>