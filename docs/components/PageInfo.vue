<script setup>
import { useData } from 'vitepress';

const { page, theme } = useData();
const { relativePath } = page.value;
const { pages } = theme.value;
const pageInfo = pages.find(item => item.relativePath === relativePath);
const { update, create } = pageInfo

const isUpdate = update > create;
const time = isUpdate ? update : create;

const formatTime = (time) => {
  const timeDate = new Date(time);
  const year = timeDate.getFullYear();
  const month = timeDate.getMonth() + 1;
  const day = timeDate.getDate();
  const house = timeDate.getHours();
  const minutes = timeDate.getMinutes();
  return `${year}年${month}月${day}日 ${house}:${minutes}`;
}

const timeString = formatTime(time)

</script>
<template>
  <div class="page-info">
    <div>{{timeString}}</div>
  </div>
</template>

<style lang="less" scoped>
.page-info {
  margin-top: 16px;
}
</style>