<script setup>
import { ref, computed, watch, onBeforeMount } from 'vue'

const addListener = false
const imgSrc = ref('');


onBeforeMount(() => {
  window.openImageView = (img) => {
    imgSrc.value = img.src;
    // 获取节点大小
  }
})

const containerStyle = computed(()=> {
  return {
    display: imgSrc.value ? 'flex' : 'none'
  }
})

watch(imgSrc, (src) => {
  if (src && !addListener) {
    document.addEventListener('keydown', handleEscClose)
  }
  if (!src) {
    document.removeEventListener('keydown', handleEscClose)
  }
})

const handleEscClose = (e) => {
  if (e.keyCode === 27) {
    handleClose()
  }
}

const handleWheel = (e) => {
  e.preventDefault();
}

const handleClose = () => {
  imgSrc.value = ''
}

</script>
<template>
  <Teleport to="body">
    <div 
      :style="containerStyle"
      class="w-image-view-container"
      @wheel="handleWheel"
    >
      <div v-if="imgSrc" class="w-image-view-content">
        <img :src="imgSrc" />
      </div>
      <div v-if="imgSrc" class="w-image-view-mask" @click="handleClose"></div>
    </div>
  </Teleport>
</template>
<style lang="less" scoped>
.w-image-view-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  direction: ltr;
  font-size: 0;
  line-height: 0;
  overflow: hidden;
  touch-action: none;
  user-select: none;
  display: none;
  z-index: 30;
  justify-content: center;
  align-items: center;

  .w-image-view-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 50%);
  }

  .w-image-view-content {
    position: absolute;
    z-index: 2;
    max-width: 80%;
  }
}
</style>