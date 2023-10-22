<script setup>
import { useData, useRouter } from 'vitepress';
import { ref, computed } from 'vue'
import PageListItem from '../components/PageListItem.vue';
import Tag from '../components/Tag.vue';

const { theme } = useData();
const router = useRouter();
const currentTag = ref('');
const pageByYear = {};
const years = [];
// 按年份分类
theme.value.pages.forEach(item => {
  const time = new Date(item.create);
  const year = time.getFullYear();
  if (!years.includes(year)) {
    years.push(year)
  }

  if (pageByYear[year]) {
    pageByYear[year].push(item)
  } else {
    pageByYear[year] = [item]
  }
})

const tags = {}

theme.value.pages.forEach((item) => {
  item.tags.forEach((tag) => {
    if (tags[tag]) {
      tags[tag]++;
    } else {
      tags[tag] = 1;
    }
  })
})

const handleTagClick = (tag) => {
  if (currentTag.value === tag) {
    currentTag.value = ''
  } else {
    currentTag.value = tag
  }
}

const pageInfo = computed(() => {
  return theme.value.pages.filter((item) => {
    return item.tags.includes(currentTag.value)
  })
});

</script>
<template>
  <div class="container">
    <div class="aside">
      <img class="header" src="../assets/header.jpg" />
      <h1 class="name">LeoLun</h1>
      <div class="subtitle">Stay hungry, Stay Foolish</div>
      <div class="link-tags">
        <a href="https://github.com/LeoLun" target="_blank">
          <svg class="link-tags-item" t="1671865387694" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="2737" xmlns:xlink="http://www.w3.org/1999/xlink"
            width="200" height="200">
            <path d="M511.968 73.152q119.424 0 220.288 58.848t159.712 159.712 58.848 220.288q0 143.424-83.712 258.016t-216.288 158.56q-15.424 2.848-22.848-4t-7.424-17.152q0-1.728 0.288-43.712t0.288-76.864q0-55.424-29.728-81.152 32.576-3.424 58.56-10.272t53.728-22.272 46.272-38.016 30.272-60 11.712-86.016q0-68-45.152-117.728 21.152-52-4.576-116.576-16-5.152-46.272 6.272t-52.576 25.152l-21.728 13.728q-53.152-14.848-109.728-14.848t-109.728 14.848q-9.152-6.272-24.288-15.424t-47.712-22.016-48.576-7.712q-25.728 64.576-4.576 116.576-45.152 49.728-45.152 117.728 0 48.576 11.712 85.728t30.016 60 46.016 38.272 53.728 22.272 58.56 10.272q-22.272 20.576-28 58.848-12 5.728-25.728 8.576t-32.576 2.848-37.44-12.288-31.712-35.712q-10.848-18.272-27.712-29.728t-28.288-13.728l-11.424-1.728q-12 0-16.576 2.56t-2.848 6.56 5.152 8 7.424 6.848l4 2.848q12.576 5.728 24.864 21.728t18.016 29.152l5.728 13.152q7.424 21.728 25.152 35.136t38.272 17.152 39.712 4 31.712-2.016l13.152-2.272q0 21.728 0.288 50.56t0.288 31.136q0 10.272-7.424 17.152t-22.848 4q-132.576-44-216.288-158.56t-83.712-258.016q0-119.424 58.848-220.288t159.712-159.712 220.288-58.848zM239.392 703.424q1.728-4-4-6.848-5.728-1.728-7.424 1.152-1.728 4 4 6.848 5.152 3.424 7.424-1.152zM257.12 722.848q4-2.848-1.152-9.152-5.728-5.152-9.152-1.728-4 2.848 1.152 9.152 5.728 5.728 9.152 1.728zM274.272 748.576q5.152-4 0-10.848-4.576-7.424-9.728-3.424-5.152 2.848 0 10.272t9.728 4zM298.272 772.576q4.576-4.576-2.272-10.848-6.848-6.848-11.424-1.728-5.152 4.576 2.272 10.848 6.848 6.848 11.424 1.728zM330.848 786.848q1.728-6.272-7.424-9.152-8.576-2.272-10.848 4t7.424 8.576q8.576 3.424 10.848-3.424zM366.848 789.728q0-7.424-9.728-6.272-9.152 0-9.152 6.272 0 7.424 9.728 6.272 9.152 0 9.152-6.272zM399.968 784q-1.152-6.272-10.272-5.152-9.152 1.728-8 8.576t10.272 4.576 8-8z" p-id="2738">
            </path>
          </svg>      
        </a>
      </div>
      <div class="tags-container">
        <template v-for="(value, key) in tags">
          <Tag
            v-if="key"
            class="tag-item"
            :full="key === currentTag"
            @click="handleTagClick(key)">
            {{ key }} {{value}}
          </Tag>
        </template>
      </div>
    </div>
    <div class="content">
      <div v-if="!currentTag" v-for="year in years" class="item-content">
        <h1 class="item-year">{{ year }}年</h1>
        <PageListItem v-for="page in pageByYear[year]" :item="page" />
      </div>
      <div v-else class="item-content">
        <h1 class="item-tags-title">筛选标签 "{{ currentTag }}"</h1>
        <PageListItem v-for="page in pageInfo" :key="page.url" :item="page" />
      </div>
    </div>
  </div>
</template>
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

  .tags-container {
    display: flex;
    overflow: hidden;
    width: 100%;
    flex-flow: wrap;
    margin-top: 10px;
    justify-content: center;

    .tag-item {
      cursor: pointer;
      margin-bottom: 5px;
      margin-right: 5px;
    }
  }

  .aside {
    position: relative;
    display: none;
    flex-grow: 1;
    padding-right: 32px;
    width: 100%;
    max-width: 256px;
    text-align: center;
    margin-top: -80px;

    @media (min-width: 960px) {
      display: block;
    }
  }

  .content {
    position: relative;
    margin: 0 auto;
    width: 100%;
    padding: 0 16px 16px;

    @media (min-width: 960px) {
      max-width: 752px;
      padding: 32px 32px 128px;
    }

    @media (min-width: 1280px) {
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
  margin-bottom: 16px;

  &+.item-content {
    margin-top: 32px;
  }
}

.item-year {
  font-size: 24px;
}

.item-tags-title {
  font-size: 24px;
  margin-bottom: 24px;
}

.link-tags {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 16px;
}

.link-tags-item {
  width: 30px;
  height: 30px;
  fill: var(--vp-c-text-1);
}
</style>