<template>
  <div class="profile">
    <nav-bar class="navbar">
      <template v-slot:center>
        我的档案
      </template>
    </nav-bar>
    <scroll class="content"
            :ym-up-load="true">
      <profile-login></profile-login>
      <profile-money></profile-money>
      <div class="border"></div>
      <profile-list :comlist='list'></profile-list>
      <div class="border"></div>
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

import Scroll from "components/common/scroll/YmScroll"

import ProfileLogin from "./childComps/ProfileLogin"
import ProfileMoney from "./childComps/ProfileMoney"
import ProfileList from "./childComps/ProfileList"

  export default {
    name: "Profile",
    data () {
      return {
        list: [
          {
            img: require('assets/img/common/message.png'),
            title: "信息中心"
          },
          {
            img:require("assets/img/common/jifen.png"),
            title: "积分商城"
          },
          {
            img: require("assets/img/common/huiyuan.png"),
            title: "会员卡"
          }
        ]
      }
    },
    components: {
      NavBar,
      Scroll,
      ProfileLogin,
      ProfileMoney,
      ProfileList
    }
  }
</script>

<style scoped>
  .navbar{
    background-color: var(--color-tint);
    color: #fff;
    border-bottom:1px solid rgba(100,100,100,0.2);
  }
  .content{
    width: 100%;
    height: calc(100vh - 120px);
    overflow: hidden;
  }
  .border{
    width: 100%;
    height: 20px;
    background: #ddd;
    opacity: 0.5;
  }
 
</style>
