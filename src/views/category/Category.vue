<template>
  <div class="catgory">
    <nav-bar class="catnav-bar">
      <template v-slot:center>
        商品分类
      </template>
    </nav-bar>
    <div class="cateflex">
      <category-left class="cleft" :leftlist="categorydata"
                     @cateck='cateclick($event)'></category-left>
      <category-right class="cright" :maitkey="listrightsub"
                      :miniwallkey="listrightdetail"
                      :goods="goodsh"></category-right>
    </div>
    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CategoryLeft from "./childComps/ListLeft"
import CategoryRight from "./childComps/ListRight"

import {getCateGory,getSubcategory, getCateGoryDetail} from "network/category"

  export default {
    name: "Category",
    data(){
      return {
        categorydata: [], //分类页左选项卡数据
        listrightupper: null,
        listrightlower: null,
        listrightsub: null, //maitKey内容
        listrightdetail: null,//miniWallkey
        goodsh: []
      }
    },
    created() {
      this.getCateGoryData()
      
    },
    methods: {
      /**
       * 分类页初始数据获取
       */
      getCateGoryData () {
        getCateGory().then(res => {
          this.categorydata = res.data.category.list
          this.listrightupper = res.data.category.list[0].maitKey //初始maitKey数据
          this.listrightlower = res.data.category.list[0].miniWallkey//初始miniWallkey 数据
          this.getSubData(this.listrightupper) //maitKey数据请求
          this.getDetailData(this.listrightlower,'pop')//miniWallkey pop数据请求
          // this.getDetailData(this.listrightlower,'new') //miniWallkey new数据请求
          // this.getDetailData(this.listrightlower,'sell')//miniWallkey sell数据请求
          
        })
      },
      getSubData (maitKey) {
        getSubcategory(maitKey).then(res => {
          this.listrightsub = res.data.list
          // console.log('请求')
        })
      },
      getDetailData(miniWallkey,type) {
        getCateGoryDetail(miniWallkey,type).then(res => {
          this.goodsh = res
        })
      },
      cateclick(msg) {
        // console.log(msg)
        this.getSubData(msg[0])
        this.getDetailData(msg[1],'pop')
        // this.getDetailData(msg[1],'new')
        // this.getDetailData(msg[1],'sell')
        // console.log(this.goodsh)
        // console.log(this.listrightlower)
      }
    },
    components: {
      NavBar,
      CategoryLeft,
      CategoryRight
    }
  }
</script>

<style scoped>
  .catnav-bar {
    background: var(--color-tint);
    color: #fff;
    z-index: 30;
  }
  .cateflex{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .cleft{
    width: 25%;
  }
  .cright{
    width: 70%;
  }
</style>
