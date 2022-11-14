<script setup>
import { useData } from 'vitepress';
import PageListItem from '../components/PageListItem.vue';

const { theme } = useData();


const pageByYear = {};

// 按年份分类
theme.value.pages.forEach(item => {
  const time = new Date(item.create);
  const year = time.getFullYear();
  if (pageByYear[year]) {
    pageByYear[year].push(item)
  } else {
    pageByYear[year] = [item]
  }
})

</script>
<template>
  <div class="archive-container">
    <div v-for="(pages, key) in pageByYear" class="item-content">
      <h1 class="item-year">{{ key }}年</h1>
      <PageListItem v-for="page in pages" :item="page" />
    </div>
  </div>
</template>
<style lang="less" scoped>
.archive-container {
  width: 800px;
  margin: auto;
}

.item-content {
  margin: 16px 0;
}

.item-year {
  font-size: 24px;
}
</style>