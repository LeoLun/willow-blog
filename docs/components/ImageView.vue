<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const addListener = false
const imgSrc = ref('');
const imgWidth = ref(0);
const imgHeight = ref(0);

const openImage = (imgDom) => {
  const { naturalWidth, naturalHeight } = imgDom;
  // 获取当前页面大小
  const { clientWidth, clientHeight } = document.documentElement;
  const maxWidth = clientWidth * 0.8;
  const maxHeight = clientHeight * 0.8;
  let width = naturalWidth;
  let height = naturalHeight;
  let scaleWidth = 1;
  let scaleHeight = 1;
  if (width > maxWidth) {
    scaleWidth = maxWidth / width;
  }
  if (height > maxHeight) {
    scaleHeight = maxHeight / height;
  }
  const scale = scaleWidth > scaleHeight ? scaleHeight : scaleWidth;
  imgWidth.value = scale * width;
  imgHeight.value = scale * height;
  imgSrc.value = imgDom.src;
}

const containerStyle = computed(()=> {
  return {
    display: imgSrc.value ? 'flex' : 'none',
  }
})

const imageStyle = computed(() => {
  return {
    width: `${imgWidth.value}px`,
    height: `${imgHeight.value}px`
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

onMounted(() => {
  setTimeout(()=>{
    const images = document.querySelectorAll('img');
    images.forEach(function (img) {
      img.style.cursor = 'zoom-in'
      img.addEventListener('click', () => {
        openImage(img)
      })
    })
  })
})

</script>
<template>
  <Teleport to="body">
    <div 
      :style="containerStyle"
      class="w-image-view-container"
      @wheel="handleWheel"
    >
      <div v-if="imgSrc" class="w-image-view-content">
        <img :src="imgSrc" :style="imageStyle" />
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
  }
}
</style>