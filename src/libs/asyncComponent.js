import { defineAsyncComponent } from 'vue';
import * as Vue from 'vue';
import { getModule } from './requestMF.js';
import LoadingComponent from '../../components/LoadingComponent.vue';

export const WebComponent = defineAsyncComponent({
  loader: () => {
    return new Promise(async (resolve, reject) => {

      let app = await getModule("bevy_demo", "https://leolun.github.io/2048-bevy-demo/remoteEntry.js");

      // let app = await getModule("bevy_demo", "http://127.0.0.1:5500/remoteEntry.js");
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
      app.init(shareModule, [])
      let moduleName = "./WasmContainer"
      let getScope = []
      let ModuleCallback = await app.get(moduleName, getScope)
      resolve(ModuleCallback())
    })
  },
  loadingComponent: LoadingComponent
})
