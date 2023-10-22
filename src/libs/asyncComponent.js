import { defineAsyncComponent } from 'vue';
import * as Vue from 'vue';
import { getModule } from './requestMF.js';

export const WebComponent = defineAsyncComponent({
  loader: () => {
    return new Promise(async (resolve, reject) => {

      let app1 = await getModule("bevy_demo", "https://leolun.github.io/2048-bevy-demo/remoteEntry.js")
      // 注入共享模块
      // 初始化模块，传入需要注入的模块
      const shareModule = {
        vue: {
          "3.2.41": {
            from: undefined,
            get: () => {
              return new Promise((resolve, reject) => {
                resolve(() => {
                  return Vue
                })
              })
            },
            loaded: 1,
          },
        },
      }
      app1.init(shareModule, [])
      let moduleName = "./WasmContainer"
      let getScope = []
      let ModuleCallback = await app1.get(moduleName, getScope)
      resolve(ModuleCallback())
    })
  }
})
