<template>
  <div id="listcontent">
    <cart-scroll class="content" 
                 :ym-up-load="true"
                 ref="cartscroll">
      <cart-list-item v-for="(item,index) in cartlb" 
                      :key="index"
                      :product="item">
      </cart-list-item>
    </cart-scroll>
  </div>
</template>

<script>
import CartScroll from "components/common/scroll/YmScroll"
import CartListItem from "./CartListItem"

import { mapGetters } from "vuex"

export default {
  name: "cartList",
  data () {
    return {
    }
  },
  components: {
    CartScroll,
    CartListItem
  },
  computed: {
    ...mapGetters([
      "cartlb"
    ])
  },
  mounted() {
    //DOM变化是调用$nextTick，使用refresh方法重新计算页面高度
    // this.$nextTick(() => {
    //   this.$refs.cartscroll.ymrefresh()
    // })
  },
  activated() {
    this.$refs.cartscroll.ymrefresh()
  }
}
</script>

<style scoped>
#listcontent {
  height: calc(100vh - 170px);
  overflow: hidden;
}
.content {
  height: 100%;
}
</style>