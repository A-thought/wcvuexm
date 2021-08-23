<template>
  <div id="home" >
    <nav-bar class="home-nav">
      <template v-slot:center>
        购物街
      </template>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']" 
                   @tabClick="tabClick" 
                   ref="tabcontrorefone"
                   class="tabctclass"
                   v-show="tabcontrolfixed"></tab-control>
    <ym-scroll class="content" 
               ref="ymscroll"  
               :prope="propepar" 
               @jtscroll="ymjtscroll"
               @ymupload="ymupload()"
               :ym-up-load="true"
               >
      <home-swiper :banners="banners" @homesw="homeswimgload()"></home-swiper>
      <recommends-view :recommends="recommends"></recommends-view>
      <feature-view class="fetureview" ></feature-view>
      <tab-control :titles="['流行','新款','精选']" 
                   @tabClick="tabClick" 
                   ref="tabcontroreftwo"></tab-control>
      <goods-list :goods="swgoodslist"></goods-list>
    </ym-scroll>
    <back-top @click="backtopclick()" v-show="ymshow" ></back-top>
  </div>
</template>

<script> 
  import HomeSwiper from "./childComps/HomeSwiper"
  import RecommendsView from "./childComps/RecommendsView"
  import FeatureView from "./childComps/FeatureViews"

  import NavBar from "components/common/navbar/NavBar"
  import YmScroll from "components/common/scroll/YmScroll"

  import TabControl from "components/content/tabControl/TabControl"
  import GoodsList from "components/content/goods/GoodsList"
  import BackTop from "components/content/backTop/backTop"

  import { getHomeMultidata, getHomeGoods } from "network/home"

  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0,list: [] },
          'new': {page: 0,list: [] },
          'sell': {page: 0,list: [] }
        },
        currentype: 'pop' ,
        propepar:3,
        ymshow: false,
        taboffsetTop: 0,
        tabcontrolfixed: false,
        save: 0
      }
    },
    components: {
      HomeSwiper,
      RecommendsView,
      FeatureView,

      NavBar,
      TabControl,
      GoodsList,
      YmScroll,
      BackTop
    },
    created() {
      this.getHomeMultidatame(),
      this.getHomeGoodsme('pop'),
      this.getHomeGoodsme('new'),
      this.getHomeGoodsme('sell')
    },
    activated() {
      this.$refs.ymscroll.ymrefresh()
      this.$refs.ymscroll.scrollcf(0,this.save,0)
    },
    deactivated() {
      this.save = this.$refs.ymscroll.getscrolly()
    },
    methods: {
      /**
       * 事件监听方法区域开始
       */
      tabClick(index){
        switch(index){
          case 0 :
            this.currentype = 'pop';
            break
          case 1 :
            this.currentype = 'new';
            break
          case 2 :
            this.currentype = 'sell';
        }
        this.$refs.tabcontrorefone.currindex = index
        this.$refs.tabcontroreftwo.currindex = index
      },
      backtopclick(){
        this.$refs.ymscroll.scrollcf(0,0,1000)
      },
      ymjtscroll(position) {
        // 1.根据距离判断，回到顶部按钮是否显示
        this.ymshow = -position.y > 344

        // 2.根据距离判断<tab-control/>是否吸顶
        this.tabcontrolfixed = -position.y >= this.taboffsetTop
      },
      ymupload(){
        this.getHomeGoodsme(this.currentype)
        // this.$refs.ymscroll.bs.refresh()
      },
      homeswimgload(){
        this.taboffsetTop = this.$refs.tabcontroreftwo.$el.offsetTop
      },
      getHomeMultidatame() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend;
        })
      },
      getHomeGoodsme(type){
        const page = this.goods[type].page+1;
        getHomeGoods(type,page).then(res => {
         this.goods[type].list.push(...res.data.list)
         this.goods[type].page += 1
         this.$refs.ymscroll.scrollfinishPullUp()
        //  console.log(res)
        })
      }
    },
    computed: {
      swgoodslist(){
        return this.goods[this.currentype].list
      }
    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    z-index: 20;
  }
  .tabctclass{
    position: relative;
    z-index: 20;
  }
  .fetureview {
    width: 100%;
    margin-top: 10px;
    overflow: hidden;
    margin: 0 auto;
  }
  .content {
    height: calc( 100% - 124px );
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 80px;
  }
</style>
