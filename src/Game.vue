<script setup>
import { onMounted, defineAsyncComponent, ref } from 'vue';

import { WebComponent } from "./libs/asyncComponent.js"

const currentComponent = ref();


onMounted(() => {
  currentComponent.value = WebComponent
})

const handleKeydown = (event) => {
  console.log('event', event)
}

</script>
<template>
  <div class="container">
    <div class="wasm-content" @keydown="handleKeydown" index="1">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>
<style lang="less" scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
}

.wasm-content {
  margin-top: 30px;
  width: 1180px;
  height: auto;
}
</style>
