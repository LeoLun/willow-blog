// .vitepress/config.js
import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';

import CreatePages from './utils/create-pages';

const getConfig = async () => {
  return withMermaid(
    defineConfig({
      title: 'leolun',
      base: '/willow-blog/',
      lang: 'zh-CN',
      description: 'leolun blog',
      outDir: '../dist',
      titleTemplate: 'blog',
      head: [
        ['link', {rel:'icon', type: 'image/svg+xml', href:'/logo.svg'}],
        ['link', {rel:'stylesheet', href:'/index.css'}],
        // ['script', {type:'text/javascript'}, PageInfo]
      ],
      themeConfig: {
        outlineTitle: '目录',
        pages: await CreatePages(),
        // nav: [
        //   { text: '标签', link: '/pages/local-https-debug' },
        //   { text: '归档', link: '/pages/how-to-use-github-actions-deploy-github-pages' }
        // ],
      },
      // your existing vitepress config...
      // optionally, you can pass MermaidConfig
      mermaid: {
        // refer https://mermaid-js.github.io/mermaid/#/Setup for options
      },
    })
  );
}

export default getConfig()
