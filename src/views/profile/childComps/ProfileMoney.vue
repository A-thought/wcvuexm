<template>
  <div class="money">
      <div class="balance">
          <span>{{balanceHandle}}</span>
          <span>元</span>
          <p>我的余额</p>
      </div>
      <div class="discount">
          <span>{{discount}}</span>
          <span>个</span>
          <p>我的优惠</p>
      </div>
      <div class="integral">
          <span>{{integral}}</span>
          <span>分</span>
          <p>我的积分</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "ProfileMoney",
  data () {
    return {
        balance: 0,
        discount: 0,
        integral: 0
    }
  },
  props: {
  },
  computed: {
      balanceHandle(){
          return this.balance.toFixed(2)
      }
  }

}
</script>

<style scoped>
.money{
    width: 100%;
    height: 100px;
    background: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.money>div{
    flex-grow: 1;
    flex-shrink: 1;
    padding: 10px;
    text-align: center;
    border-right: 1px solid rgba(100,100,100,0.2);
}
.money>div span:first-child{
    font-size: 20px;
    color: rgb(255, 115, 0);
}
.money>div:last-child{
    border-right: none;
}
</style>