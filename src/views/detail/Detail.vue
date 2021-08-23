<template>
  <div id="detail">
    <detail-nav-bar @titleclick="navbarclick" ref="navbar"></detail-nav-bar>
    <detail-scroll class="detail-scroll-style" 
                   :ym-up-load="true"
                   ref="goodsimgload"
                   @qhscroll="titscroll">
        <detail-swiper :topimage="topimage" ></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shopdata="shopdata"></detail-shop-info>
        <detail-goods-info :detailgoods="detailgoods"
                           @imgload="goodsimgload()">
        </detail-goods-info>
        <detail-params :detailparams="detailparams" ref="detailparams"></detail-params>
        <detail-comment :decommon="detailcommon" ref="detailcomment"></detail-comment>
        <Goods :goods="recommend" class="goods" ref="detailcomgoods"></Goods>
    </detail-scroll>
    <back-top @click="backtopclick()" v-show="ymshow" class="backtop"></back-top>
    <detail-bottom-bar @addcart="gmcart"></detail-bottom-bar>
    <tost :message="tostme" :tostshow="tostxs"></tost>
  </div>
</template>

<script>
import DetailSwiper from "./childComps/DetailSwiper"
import DetailNavBar from "./childComps/DetailNavBar"
import DetailBaseInfo from "./childComps/DetailBaseInfo"
import DetailShopInfo from "./childComps/DetailShopInfo"
import DetailGoodsInfo from "./childComps/DetailGoodsInfo"
import DetailParams from "./childComps/DetailParams"
import DetailComment from "./childComps/DetailComment"
import DetailBottomBar from "./childComps/DetailBottomBar"

import Goods from "components/content/goods/GoodsList"

import DetailScroll from "components/common/scroll/YmScroll"
import Tost from "components/common/tost/tost"

import {btop} from "common/mixin.js"

import { getDetail,Persion,getRecommend,ShopData,Params } from "network/detail.js"
import { mapActions } from "vuex"

export default {
  name: "Detail",
  data () {
    return {
        iid: null,
        topimage:[],//顶部轮播图数据
        goods: {}, //标题，价格，配送方式等数据
        shopdata: {},//销量，评分等
        detailgoods: {},//产品详情图等
        detailparams: {},//产品参数
        detailcommon: {},//商品评论信息
        recommend: [],//详情页推荐商品数据
        themtopys: [],//存放各组件距离顶部的数据
        curindex: 0,//判断距离顶部高度控制的状态
        tostme: "",//购物车添加后弹窗显示的内容
        tostxs: false,//弹窗是否显示的状态
    }
  },
  mixins: [btop],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailScroll,
    DetailGoodsInfo,
    DetailParams,
    DetailComment,
    Goods,
    Tost,
    DetailBottomBar
  },
  created() {
      //保存传入的id
      this.iid = this.$route.query.iid

      //获取id对应的数据
      getDetail(this.iid).then((res) => {
          console.log(res)
          const topres = res.result
          //轮播图 图片路径
          this.topimage = topres.itemInfo.topImages
          //标题，价格，配送方式等商品信息
          this.goods = new Persion(topres.itemInfo,topres.columns,topres.shopInfo.services)  
          //销量，评分等店铺信息
          this.shopdata = new ShopData(topres.shopInfo) 
          //详情图片
          this.detailgoods= topres.detailInfo
          //产品参数
          this.detailparams = new Params(topres.itemParams.info,topres.itemParams.rule)
          //评论信息
          if(topres.rate.list.length !== 0)
          {
              this.detailcommon = topres.rate.list[0]
          }
         
          
      }),
      //详情页推荐商品数据
        getRecommend().then((res) => {
            this.recommend = res.data.list
            // console.log(this.recommend)
        })
        
  },
  mounted() {
    
  },
  methods: {
      ...mapActions(['addcart']),
      //图片加载完后
      goodsimgload() {
          // 刷新scroll
          this.$refs.goodsimgload.ymrefresh()
          //图片加载完后获取组件距离顶部的距离，用来导航栏跳转到相应组件，
          //-50是距离顶部50避免跳转距离过多
          this.themtopys = []
          this.themtopys.push(0)
          this.themtopys.push(this.$refs.detailparams.$el.offsetTop-40)
          this.themtopys.push(this.$refs.detailcomment.$el.offsetTop-40)
          this.themtopys.push(this.$refs.detailcomgoods.$el.offsetTop-40)
      },
      //导航栏点击时跳转到相应组件位置
      navbarclick(index) {
          this.$refs.goodsimgload.scrollcf(0,-this.themtopys[index],500)
      },
      //防抖函数，传入执行时频繁调用的函数，传入要延迟加载的时间
      debounce(fun,time){
          let setin = null
          return function(...asg){
              if(setin)
              {
                clearInterval(setin)
              }
              setin = setInterval(() => {
                  fun.apply(this,...asg)
              },time)
          }
      },
      titscroll(position) {
          const positiony = -position.y
          let length = this.themtopys.length
          for(let i=0;i<length;i++)
          {
              if( this.curindex !== i && ((i < length-1 && positiony >= this.themtopys[i] && positiony <= this.themtopys[i+1]) ||
                 ( i === length-1 && positiony >= this.themtopys[i])) )
              {
                  this.$refs.navbar.detailnavindex = i
                  this.curindex = i
              }
          }
           // 根据距离判断，回到顶部按钮是否显示
           this.batop(position)   
      },
      gmcart() {
          //获取购物车所需信息
          const product = {}
          product.image = this.topimage[0] //展示图片
          product.title = this.goods.title //标题
          product.desc = this.goods.desc //描述
          product.newPrice = this.goods.newPrice //新价格
          product.iid = this.iid //产品id
          product.realprice = this.goods.realPrice //真实价格

        //添加数据后promise回调方式
        //1. vuex获取action中方法返回promise，执行回调
        //   this.$store.dispatch("addcart",product).then(res => {
        //       console.log(res)
        //   })
        //2. 通过mapActions 将方法部署到本组件，...mapActions 写在methods中
        this.addcart(product).then(res => {
            this.tostxs = true
            this.tostme = res
            setTimeout(() => {
                this.tostxs = false

            },500);
        })
      }
  }

}
</script>

<style scoped>
#detail{
    background-color: #fff;
    z-index: 50;
    height: 100vh;
}
.detail-scroll-style{
    height: calc( 100% - 90px );
    overflow: hidden;
}
.goods{
    margin-top: 20px;
}
.backtop {
    bottom: 50px;
}
</style>