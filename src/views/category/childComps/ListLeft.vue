<template>
  <div class="categoryleft">
    <scroll class="content" :ymUpLoad='true'>
      <ul>
          <li v-for="(item,index) in leftlist" 
              :class="{active: currindex == index}"
              @click="listclick(index,item.maitKey,item.miniWallkey)">
              {{item.title}}
          </li>
      </ul>
    </scroll>
      
  </div>
</template>

<script>
import scroll from "components/common/scroll/YmScroll"

export default {
  name: "CateGoryLeft",
  data () {
    return {
      currindex: 0,
    }
  },
  components: {
    scroll
  },
  props: {
    leftlist:{
        type: Array,
        default() {
            return []
        }
    }
  },
  methods: {
    listclick(index,ma,mi) {
      // console.log(ma,mi)
      let arr = []
      arr[0] = ma
      arr[1] = mi
      this.currindex = index
      this.$emit("cateck",arr)//回到父组件请求数据
    }
  }
}
</script>

<style scoped>
.content{
  width: 100%;
  height: calc(100vh - 120px);
  overflow: hidden;
  background: #eee;
}
.content ul{
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  list-style: none;
}
.content ul li{
  width: 100%;
  padding: 10px 0;
  text-align: center;
  font-size: 14px;
 
}
.active{ 
  box-sizing: border-box;
  border-left: 2px solid  #FF6347;
  background: #fff;
}
</style>