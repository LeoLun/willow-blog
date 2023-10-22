<script setup>
import { onMounted } from 'vue'
import { useData } from 'vitepress';
import Tag from './Tag.vue';

onMounted(() => {
  const { page, theme } = useData();
  const { relativePath } = page.value;
  const { pages } = theme.value;
  const pageInfo = pages.find(item => item.relativePath === relativePath);
  const { tags } = pageInfo
})

</script>
<template>
  <div v-if="tags && tags.length" class="tags-container">
    <template v-for="tag in tags">
      <Tag v-if="tag" class="tag-item">{{tag}}</Tag>
    </template>
  </div>
</template>

<style lang="less" scoped>
.tags-container {
  margin-top: 32px;
}

.tag-item {
  margin: 0 4px;
}
</style>