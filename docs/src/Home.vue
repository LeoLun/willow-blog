<script setup>
import { ref } from 'vue';
import { useData } from 'vitepress';
import PageListItem from '../components/PageListItem.vue';

const { theme } = useData();

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