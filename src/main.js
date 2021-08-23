import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Fastclick from "fastclick"
import VueLazy from "vue3-lazy"
// import tost from 'components/common/tost'

//解决移动端300mm 延时加载
Fastclick.attach(document.body)

//使用图片懒加载插件

createApp(App).
use(store).
use(router).
use(VueLazy,{
    loading: require("assets/img/common/jz.gif")
}).
mount('#app')
