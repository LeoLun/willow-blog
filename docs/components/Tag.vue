<template>
  <div class="tag-container">
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.tag-container {
  display: inline-block;
  padding: 0 9px;
  height: 24px;
  font-size: 12px;
  border-radius: 9999px;
  color: #FFFFFF;
  background-color: var(--vp-c-brand);
}
</style>