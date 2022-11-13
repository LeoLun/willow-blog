<script setup>
import { useRouter, useData } from 'vitepress';
import Tag from './Tag.vue';

const { localePath } = useData();
const router = useRouter()

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const formatTime = (time) => {
  const timeDate = new Date(time);
  const year = timeDate.getFullYear();
  const month = timeDate.getMonth() + 1;
  const day = timeDate.getDate();
  const house = timeDate.getHours();
  const minutes = timeDate.getMinutes();
  return `${year}年${month}月${day}日 ${house}:${minutes}`;
}

const timeString = formatTime(props.item.create);

const handleOpenPage = () => {
  router.go(localePath.value + props.item.url);
}

</script>
<template>
  <div class="page-item-container">
    <div class="page-item-header">
      <div class="page-item-title" @click="handleOpenPage">{{item.title}}</div>
      <div class="page-item-time">{{timeString}}</div>
    </div>
    <div v-if="item.tags && item.tags.length" class="page-item-tags">
      <template v-for="tag in item.tags">
        <Tag  v-if="tag" class="tag-item">{{tag}}</Tag>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.page-item-container {
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: auto;
  padding: 16px 0;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.page-item-title {
  cursor: pointer;
  text-overflow: ellipsis;
  white-space:nowrap;
  overflow: hidden;
  padding-right: 16px;
  &:hover {
    color: var(--vp-c-brand);
  }
}

.page-item-time {
  white-space:nowrap;
  color: var(--vp-c-text-2);
}
.page-item-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.page-item-tags {
  margin-top: 8px;
}
.tag-item {
  margin: 0 4px;
}
</style>