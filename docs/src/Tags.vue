<script setup>
import { ref, computed } from 'vue';
import { useData } from 'vitepress';
import PageListItem from '../components/PageListItem.vue';
import Tag from '../components/Tag.vue';

const { theme } = useData();

const tags = {}
const currentTag = ref('');

theme.value.pages.forEach((item) => {
  item.tags.forEach((tag) => {
    if (!currentTag.value) {
      currentTag.value = tag
    }
    if (tags[tag]) {
      tags[tag]++;
    } else {
      tags[tag] = 1;
    }
  })
})


const pageInfo = computed(() => {
  return theme.value.pages.filter((item) => {
    return item.tags.includes(currentTag.value)
  })
});

const handleTagClick = (tag) => {
  currentTag.value = tag
}

</script>
<template>
  <div class="tags-container">
    <div class="tags-list-content">
      <template v-for="(value, key) in tags">
        <Tag 
          v-if="key"
          class="tag-item"
          :full="key === currentTag"
          @click="handleTagClick(key)">
          {{ key }} {{value}}
        </Tag>
      </template>
    </div>
    <div>
      <PageListItem v-for="page in pageInfo" :item="page" />
    </div>
  </div>
</template>
<style lang="less" scoped>
.tags-container {
  width: 800px;
  margin: auto;
}
.tags-list-content {
  margin: 16px 0;
}
.tag-item {
  cursor: pointer;
  margin: 0 4px;
}
</style>