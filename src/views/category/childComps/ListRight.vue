<template>
  <div class="listright">
      <scroll class="content"
              :ymUpLoad='true'>
          <list-sub>
            <ul class="rightul">
                <li v-for="(item,index) in maitkey" :key="index">
                    <div class="subimg">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="subtext">{{item.title}}</div>
                </li>
            </ul>
          </list-sub>
          <!-- <tab-control :titles="['综合','新品','销量']"
                       @tabClick="tabclick"></tab-control> -->
          <goods-list :goods="goods"></goods-list>
      </scroll>
      
  </div>
</template>

<script>
import scroll from "components/common/scroll/YmScroll"

import GoodsList from "components/content/goods/GoodsList"
import TabControl from "components/content/tabControl/TabControl"

import ListSub from './ListSub.vue'

export default {
  name: "ListRight",
  data () {
    return {
        currentype: 'pop',
        ztaima: 0,
        mini: null,
        good: []
    }
  },
  props: ['maitkey',"miniwallkey","goods"],
  components: {
      scroll,
      ListSub,
      TabControl,
      GoodsList, 
  },
//   updated() {
//       console.log(this.goodsh)
//   },
//   watch: {
//       goodst:{
//           handler(newval,oldval){
//               this.good = newval
//               console.log(newval)
//           }
//       }
//   },
  methods: {
      debounce(func, wait) {
        let timer;console.log("延时器")
        return function(args) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
            func.apply(this, args)
            }, wait)  
        }
      },
    //   tabclick(index) {
    //       switch(index){
    //         case 0 :
    //           this.currentype = 'pop';
    //         break
    //         case 1 :
    //           this.currentype = 'new';
    //         break
    //         case 2 :
    //           this.currentype = 'sell';
    //       }
    //       console.log(this.goodst)
    //     //   this.good = this.goods[this.currentype].list[0]
    //   },
    },
}
</script>

<style scoped>
ul{
    list-style: none;
}
.content{
    width: 100%;
    height: calc(100vh - 120px);
    overflow: hidden;
}
.rightul{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
}
.rightul li{
    width: 100px;
    height: 130px;
}
.subimg{
    width: 100px;
    height: 100px;
}
.subimg img{
    width: 100px;
}
.subtext{
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
}
</style>