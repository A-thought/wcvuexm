<template>
  <div class="cartbottom">
      <div class="checkbu">
        <check-button :ischeck="isall" @click="checkclick"></check-button>
        <span>全选</span>
      </div>
      <div class="checkq" @click="dianji()">
         <span>合计:</span>
         <span>￥{{ total }}</span>
      </div>
      <div class="checkjs" @click="calcclick()">
        <span>总类别: </span> 
        <span>({{ jisuan }})</span>
      </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton"
import { mapGetters } from "vuex"

export default {
  name: "CartBottom",
  data () {
    return {
    }
  },
  components: {
    CheckButton
  },
  computed: {
      ...mapGetters(["cartlb"]),
      total() {
          return this.cartlb.filter(item => {
              return item.checked
          }).reduce((prevalue,item) => {
              return prevalue + item.count * item.realprice
          },0).toFixed(2)
      },
      jisuan() {
         return this.cartlb.filter(item => item.checked).length
      },
      isall() {
        if( this.cartlb.length === 0 ){
          return false
        }
        return !this.cartlb.find(item => !item.checked)
      }
  },
  methods: {
    dianji() {
      console.log(this.cartlb)
    },
    checkclick() {
      if(this.isall){
        this.$store.commit("nxzhong")
      }else{
        this.$store.commit('xzhong')
      }
    },
    calcclick(){
      // if()
    }
  }
}
</script>

<style scoped>
    .cartbottom{
        background: #fff;
        height: 50px;
        width: 100%;
        box-shadow: 0 -5px 10px rgba(100,100,100,.2);
        display: flex;
        flex-direction: row;
        font-size: 18px;
        align-items: center;
    }
    .checkbu{
        height: 50px;
        display: flex;
        flex-direction: row;
        flex-shrink: 1;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
        flex-shrink: 1;
        flex-grow: 1;
        padding: 0 5px;
    }
    .checkbu span{
      margin-left: 5px;
      line-height: 50px;
    }
    .checkq{
        height: 50px;
        display: flex;
        flex-direction: row;
        flex-shrink: 1;
        flex-grow: 1;
        justify-content: center;
        flex-shrink: 1;
        flex-grow: 1;
        padding: 0 5px;
        line-height: 50px;
    }
    .checkjs{
       height: 50px;
        display: flex;
        flex-direction: row;
        flex-shrink: 1;
        flex-grow: 1;
        justify-content: center;
        flex-shrink: 1;
        flex-grow: 1;
        padding: 0 5px;
        line-height: 50px;
    }
</style>