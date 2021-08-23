<template>
  <div class="goods-list">
      <goods-list-item v-for="item in goods" :goodsitem="item">
      </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue"
export default {
  name:'GoodsList',
  props: {
      goods: {
        type: Array,
        default() {
            return []
        }
      }
    },
    components: {
      GoodsListItem
    }
}
</script>

<style scoped>
.goods-list {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: flex-start;
    flex-wrap: wrap;
}
</style>