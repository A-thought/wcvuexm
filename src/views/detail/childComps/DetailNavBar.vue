<template>
    <nav-bar class="detail-nav-style">
      <template v-slot:left>
          <div class="nav-left-img" @click="navleftback()">
            <img src="~assets/img/common/back.svg" alt="">
          </div>
      </template>
      <template v-slot:center>
        <div class="detail-nav-title">
            <span v-for="(item,index) in detailnavlist"
                  class="detail-nav-list"
                  @click="detailnavclick(index)" 
                  :class="{detailtitleswitch: detailnavindex == index}">
                {{item}}
            </span>
        </div>
      </template>
    </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
  data () {
    return {
        detailnavlist: ["商品","参数","评论","推荐"],
        detailnavindex: 0
    }
  },
  methods: {
      detailnavclick(index) {
          this.detailnavindex = index
          this.$emit("titleclick",index)
      },
      navleftback() {
          this.$router.back()
      }
  },
  components: {
      NavBar
  }
}
</script>

<style scoped>
.detail-nav-style{
    height: 40px;
}
.nav-left-img{
    height: 100%;
    width: 100%;
}
.nav-left-img img {
    height: 45%;
    margin-top: 20%;

}
.detail-nav-title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.detail-nav-list{
    flex-shrink: 1;
    flex-grow: 1;
    font-size: 14px;
    font-weight: 600;
}
.detailtitleswitch{
    color: var(--color-high-text);
}
</style>