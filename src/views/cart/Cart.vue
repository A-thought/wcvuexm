<template>
  <div id="cart">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <span>购物车({{cartlength}})</span>
      </template>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom></cart-bottom>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

import CartList from "./childComps/CartList"
import CartBottom from "./childComps/CartBottom"

import { mapGetters } from "vuex"
  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      CartBottom
    },
    computed: {
      ...mapGetters([
        "cartlength"
      ])
    }
  }
</script>

<style scoped>
.home-nav{
    background-color: var(--color-tint);
    color: #fff;
    z-index: 20;
  }
</style>
