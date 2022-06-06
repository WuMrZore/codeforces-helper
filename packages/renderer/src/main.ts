import { createApp } from 'vue'
import App from './App.vue'
import './samples/node-api'

// vue-router
import router from './router'

// 配置 naive ui 的字体样式
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

createApp(App)
  .use(router)
  .mount('#app')
  .$nextTick(window.removeLoading)
