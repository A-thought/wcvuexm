<template>
  <div class="wrapper" ref="wrapperscroll">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll"
export default {
  name: "YmScroll",
  data() {
      return {
          bs: null
      }
  },
  props: {
    prope: {
      type: Number,
      default: 0
    },
    pulljz: {
      type: Number,
      default: 0
    },
    ymUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    //创建betterscroll对象
    this.bs = new BetterScroll(this.$refs.wrapperscroll,{
        probeType: this.prope,
        observeDOM: true,
        observeImage: true,
        click: true,
        pullUpLoad: this.ymUpLoad
    })  

    //监听滚动时位置
    this.bs.on('scroll',(position) => {
      this.$emit("jtscroll",position)
      this.$emit("qhscroll",position)

    })

    //监听上拉加载更多事件
    this.bs.on("pullingUp",() => {
      this.$emit("ymupload")
    })
  },
  methods: {
    scrollcf(x=0,y=0,time=500) {
      this.bs.scrollTo(x,y,time);
    },
    scrollfinishPullUp(){
      this.bs.finishPullUp()
    },
    getscrolly() {
      return this.bs ? this.bs.y : 0
    },
    ymrefresh(){
      this.bs.refresh()
    }
  }

}

</script>
<style scoped>
</style>