<template>
  <div class="tabcontrol">
      <div v-for="(item,index) in titles" 
           class="tab-control-item" 
           @click='itemclick(index)' 
           :class="{tc_active: currindex === index}">
          <span>{{item}}</span>
      </div>
  </div>
</template>
        
<script>
export default {
  data() {
    return {
      currindex: 0
    }
  },
  props: {
      titles: {
          type: Array,
          default() {
            return []
          }
      }
  },
  methods: {
    itemclick(index) {
      this.currindex = index;
      this.$emit("tabClick", index)
    }
    
  }
  
}
</script>

<style scoped>
  .tabcontrol {
      display: flex;
      flex-direction: row;
      align-items: center;
      background: #fff;
      padding: 10px;
      z-index: 9;
  }
  .tab-control-item{
      flex-shrink: 1;
      flex-grow: 1;
      height: 30px;
      line-height: 20px;
      font-weight: 700;
      text-align: center;
  }
  .tab-control-item span {
      padding: 5px;
  }
  .tc_active{
    color: var(--color-high-text);
  }
  .tc_active span {
    border-bottom:3px solid var(--color-high-text) ;
    
  }
</style>