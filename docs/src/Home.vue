<script setup>
import { useData } from 'vitepress';
import PageListItem from '../components/PageListItem.vue';

const { theme } = useData();


const pageByYear = {};

// 按年份分类
theme.value.pages.forEach(item => {
  const time = new Date(item.create);
  const year = time.getFullYear();
  if (pageByYear[year]) {
    pageByYear[year].push(item)
  } else {
    pageByYear[year] = [item]
  }
})

</script>
<template>
  <div class="container">
    <div class="aside">
      <img class="header" src="../assets/header.jpg" />
      <h1 class="name">LeoLun</h1>
      <div class="subtitle">Stay hungry, Stay Foolish</div>
    </div>
    <div class="content">
      <div v-for="(pages, key) in pageByYear" class="item-content">
        <h1 class="item-year">{{ key }}年</h1>
        <PageListItem v-for="page in pages" :item="page" />
      </div>
    </div>
  </div>
</template>
<style lang="less">
.VPHome {
  padding: 32px 24px 96px;
  width: 100%;

  @media (min-width: 960px) {
    padding: 32px 32px 0;
  }

  @media (min-width: 768px) {
    padding: 48px 32px 128px;
  }
}
</style>
<style lang="less" scoped>
.VPHome {
  .container {
    margin: 0 auto;
    width: 100%;

    @media (min-width: 960px) {
      display: flex;
      justify-content: center;
      max-width: 992px;
    }

    @media (min-width: 1280px) {
      display: flex;
      justify-content: center;
    }

    @media (min-width: 1440px) {
      max-width: 1104px;
    }
  }

  .aside {
    position: relative;
    display: none;
    order: 2;
    flex-grow: 1;
    padding-left: 32px;
    width: 100%;
    max-width: 256px;
    text-align: center;

    @media (min-width: 1280px) {
      display: block;
    }
  }

  .content {
    position: relative;
    margin: 0 auto;
    width: 100%;

    @media (min-width: 960px) {
      max-width: 752px;
      padding: 0 32px 128px;
    }

    @media (min-width: 1280px) {
      order: 1;
      margin: 0;
      min-width: 640px;
    }

    @media (min-width: 1440px) {
      max-width: 784px;
    }
  }
}

.header {
  width: 125px;
  border-radius: 3px;
}

.name {
  font-size: 24px;
}

.subtitle {
  margin-top: 16px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}


.item-content {
  margin: 16px 0;
}

.item-year {
  font-size: 24px;
}
</style>