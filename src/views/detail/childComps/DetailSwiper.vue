<template>
  <div id="detailswiper">
      <swiper class="deswiper">
          <swiper-item v-for="item in topimage" class="detailswiperitem">
              <img :src="item" >
          </swiper-item>
      </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper/index"
export default {
  name: "DetailSwiper",
  data () {
    return {
    }
  },
  props: {
    topimage:{
        type: Array,
        default() {
            return []
        }
    }
  },
  components: {
      Swiper, 
      SwiperItem
  }
}
</script>

<style  scoped>
.deswiper{
    width: 100%;
    height: 300px;
    overflow: hidden;
}
.detailswiperitem img{
    width: 100%;
}
</style>