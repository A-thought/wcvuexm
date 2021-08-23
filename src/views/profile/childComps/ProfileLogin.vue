<template>
  <div class="prologin">
      <div class="login-left">
          <img src="~assets/img/common/top.png" alt="">
          <!-- <slot name='left'></slot> -->
      </div>
      <div class="login-center">
        <div class="center-txt">
          <span>登录</span>/<span>注册</span>
        </div>
        <p class="phone">暂无绑定手机号</p>
          <!-- <slot></slot> -->
      </div>
      <div class="login-right">
        <img src="~assets/img/common/right-back.png">
          <!-- <slot></slot> -->
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

  }
}
</script>

<style scoped>
.prologin{
  width: 100%;
  height: 80px;
  background-color: var(--color-tint);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.login-left{
  width: 20%;
  position: relative;
}
.login-left img{
  width: 50px;
  height: 50px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.login-center{
  width: 60%;
  padding: 10px 4px;
}
.center-txt{
  color: #fff;
  margin-bottom: 10px;
}
.phone{
  font-size: 12px;
  color: #fff;
}

.login-right{
  width: 20%;
  position: relative;
}
.login-right img{
  width: 25px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>