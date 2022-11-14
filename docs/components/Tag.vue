<script setup>
import { computed } from 'vue'
const props = defineProps({
  full: {
    type: Boolean,
    default: true
  }
})


const clazz = computed(() => {
  return {
    "tag-plain": !props.full,
    "tag-full": props.full,
  }
})
</script>

<template>
  <div class="tag-container tag-plain" :class="clazz">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.tag-container {
  display: inline-block;
  box-sizing: content-box;
  padding: 0 9px;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  border-radius: 9999px;
  border: 1px solid var(--vp-c-brand);
}

.tag-plain {
  color: var(--vp-c-brand);
  background-color: var(--vp-c-bg);
}

.tag-full {
  color: var(--vp-c-text-dark-1);
  background-color: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
}
</style>