<script setup>
import { useRouter, useData } from 'vitepress';

const router = useRouter()
const data = useData()

const handleGameClick = (key) => {
  const base = data.site.value.base;
  // router.go(`${location.origin}${base}game?id=${key}`);
  location.href = `${location.origin}${base}game?id=${key}`;
}
</script>
<template>
  <div class="container">
    <div class="item" title="2048" @click="handleGameClick('2048')">
      <img class="game-image" src="../assets/2048.png" />
      <div class="game-name">2048</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.VPHome {
  .container {
    display: flex;
    margin: 0 auto;
    width: 100%;
    margin-top: 30px;
    

    @media (min-width: 960px) {
      display: flex;
      max-width: 992px;
    }

    @media (min-width: 1280px) {
      display: flex;
    }

    @media (min-width: 1440px) {
      max-width: 1104px;
    }
  }
}

.item {
  cursor: pointer;
  width: 200px;
  height: 200px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  line-height: 0px;
  position: relative;

  &:hover {
    border-color: var(--vp-c-brand);
  }

  .game-image {
    width: 199px;
    height: 199px;
    margin: 0;
  }

  .game-name {
    position: absolute;
    right: 5px;
    bottom: 30px;
    font-size: 50px;
  }
}
</style>
