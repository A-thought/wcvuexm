import Tost from "./tost"
import { createApp } from 'vue'

const obj = {}

obj.install = function (vue) {
    // document.body.appendChild(Toast.$el)
    //创建组件构造器
    // console.log(Vue.createApp().mount(document.createElement('div'))
    // )
    const TostCo = createApp(Tost).mount(document.createElement('div'))

    // //new的方式 ，根据组件构造器，创建出来一个组件对象
    // const toastzj = new TostCo()

    // //将组件对象，手动挂载到一个元素上
    // toastzj.$mount(document.createElement('div'))

    // //toast.$el  对应的就是div
    document.body.appendChild(TostCo.$el)
    // console.log(vue)
    // vue.Prototype.tost = TostCo
}

export default obj