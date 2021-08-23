<template>
   <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :herf='item.link'>
          <img :src="item.image" @load="homeswload()">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
  import { Swiper,SwiperItem } from "components/common/swiper/index"
  export default {
  name: "HomeSwiper",
  data() {
    return {
      homeswiperload: false
    }
  },
  props: {
      banners: {
          type: Array,
          default() {
              return []
          }
      }
  },
  components: {
      Swiper,
      SwiperItem
  },
  methods: {
    homeswload() {
      if( !this.homeswiperload ){
        this.$emit("homesw")
        this.homeswiperload = true
      }
      
    }
  }
}

</script>
<style scoped>
</style>