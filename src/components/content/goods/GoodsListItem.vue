<template>
  <div class="goods-list-item" @click="goodsitemjump()">
      <div class="goods-list-item-img">
        <img :src="imgshow" alt="">
      </div>
      
      <div class="goods-list-item-text">
          <p>{{goodsitem.title}}</p>
          <span class="price">{{goodsitem.price}}</span>
          <span class="collect">{{goodsitem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
      goodsitem: {
          type: Object,
          default() {
              return {}
          }
      }
  },
  computed: {
      imgshow() {
          return this.goodsitem.img || this.goodsitem.image || this.goodsitem.show.img
      }
  },
  methods: {
      goodsitemjump() {
          this.$router.push({
              path: '/detail',
              query: {
                  iid: this.goodsitem.iid
              }
            })
      }
  },
}
</script>

<style scoped>
.goods-list-item{
    width: 150px;
    height: 300px;
    flex-shrink: 1;
    overflow: hidden;
    position: relative;
}
.goods-list-item-img{
    width: 100%;
    height: 230px;
}
.goods-list-item-img img {
    width: 100%;
    border-radius: 5px;
}

.goods-list-item-text{
    width: 150;
    height: 70px;
    padding-top: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    text-align: left;
}
.goods-list-item-text p{
    width: 150px;
    display: block;
    font-size: 15px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.goods-list-item-text span{
    display: inline-block;
    margin-top: 10px;
}
.goods-list-item-text span{
    display: inline-block;
    margin-top: 10px;
}
.goods-list-item-text .price{
    color: darksalmon;
    margin-right: 40px;
}
.goods-list-item-text .collect{
    position: relative;
}
.goods-list-item-text .collect::before{
    content: '';
    width: 15px;
    height: 15px;
    position: absolute;
    background: red;
    left: -20px;
    background: url("~assets/img/common/collect.svg") no-repeat 0 0;
    background-size: 15px 15px;
}
</style>