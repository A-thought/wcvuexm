<template>
    <div class="message">
        <div v-for="item in comlist" class="mess-list">
            <img :src="item.img" >
            <span>{{item.title}}</span>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
      comlist:{
          type: Array,
          default() {
              return []
          }
      }
  }
}
</script>

<style scoped>
 .mess-list{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid rgba(100,100,100,0.3);
    display: flex;
    align-items: center;
  }
  .mess-list img{
    width: 20px;
    height: 20px;
  }
  .mess-list span{
    margin-left: 10px;
  }
  .message div:last-child{
      border-bottom: none;
  }
</style>