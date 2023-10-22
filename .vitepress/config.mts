// @ts-nocheck
import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';
// import federation from "@originjs/vite-plugin-federation";
// import topLevelAwait from "vite-plugin-top-level-await";
import CreatePages from './utils/create-pages';

const getConfig = async () => {
  return withMermaid(
    defineConfig({
      title: 'leolun',
      base: '/willow-blog/',
      lang: 'zh-CN',
      description: 'leolun blog',
      outDir: './dist',
      titleTemplate: 'blog',
      head: [
        ['link', {rel:'shortcut icon', type: 'image/svg+xml', href:'/willow-blog/logo.svg'}],
        ['link', {rel:'stylesheet', href:'/willow-blog/index.css'}]
      ],
      themeConfig: {
        outlineTitle: '目录',
        pages: await CreatePages(),
        nav: [
          { text: '小游戏', link: '/game-list' },
        ],
      },
      // your existing vitepress config...
      // optionally, you can pass MermaidConfig
      mermaid: {
        // refer https://mermaid-js.github.io/mermaid/#/Setup for options
      },
      // vite: {
      //   plugins: [
      //     topLevelAwait(),
      //     federation({
      //         name: 'host-app',
      //         remotes: {
      //             remote_app: "http://127.0.0.1:5500/assets/remoteEntry.js",
      //         },
      //         shared: ['vue']
      //     })
      //   ]
      // }
    })
  );
}

export default getConfig()
