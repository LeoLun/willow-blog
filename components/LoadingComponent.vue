<script setup lang="ts">

</script>

<template>
  <div class="loading-container">
    <div class="loading"></div>
  </div>
</template>

<style lang="less" scoped>
.loading-container {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--vp-code-block-bg);

  .loading {
    width: 60px;
    height: 60px;
    border: 2px solid var(--vp-c-brand);
    border-top-color: transparent;
    border-radius: 100%;

    animation: circle infinite 0.75s linear;
  }

  // 转转转动画
  @keyframes circle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>