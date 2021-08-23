<template>
  <div class="bottom-bar">
    <div class="bott-left">
        <div>
            <i class="icon service"></i>
            <span>客服</span>
        </div>
        <div>
            <i class="icon shop"></i>
            <span>店铺</span>
        </div>
        <div>
            <i class="icon collection"></i>
            <span>收藏</span>
        </div>
    </div>
    <div class="bott-right">
        <div class="right-shop" @click="shopclick">
            <span>加入购物车</span> 
        </div>
        <div class="right-buy">
            <span>购买</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "DetailBottomBar",
    methods: {
        shopclick() {
            this.$emit("addcart")
        }
    }
}
</script>

<style scoped>
.bottom-bar{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 -1px 1px rgba(100,100,100,0.2);
    background: #fff;
}
.bott-left{
    flex-shrink: 1;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
}
.bott-left div {
    width: 50px;
    height: 30px;
    flex-shrink: 1;
    flex-grow: 1;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
}
.icon {
    width: 20px;
    height: 20px;
    display: block;
    margin: 0 auto;
    background: url("~assets/img/detail/detail_bottom.png") no-repeat;
    background-size: 20px;
}   
.service {
    background-position: 0 -48px;
}
.shop {
    background-position: 0 -90px;
}
.collection {
    background-position: 0 0px;
}
.bott-right {
    width: 50%;
    height: 100%;
    background: blue;
    display: flex;
    flex-shrink: 1;
    align-items: center;
    font-size: 13px;
    font-weight: 600;
}
.right-shop {
    height: 100%;
    width: 50%;
    background: yellow;
    text-align: center
}
.right-shop span {
    line-height: 50px;
}
.right-buy {
    height: 100%;
    width: 50%;
    text-align: center;
    background: var(--color-tint);
    color: #fff
}
.right-buy span {
    line-height: 50px;
}
</style>
