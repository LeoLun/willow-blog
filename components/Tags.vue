<script setup>
import { onMounted, ref } from 'vue'
import { useData } from 'vitepress';
import Tag from './Tag.vue';

const pageTags = ref()

onMounted(() => {
  const { page, theme } = useData();
  const { relativePath } = page.value;
  const { pages } = theme.value;
  const pageInfo = pages.find(item => item.relativePath === relativePath);
  const { tags } = pageInfo
  pageTags.value = tags
})

</script>
<template>
  <div v-if="pageTags && pageTags.length" class="tags-container">
    <template v-for="tag in pageTags">
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
