<template>
  <div class="cartbutton" :class="{clshow:ischeck}">
      <img src="~assets/img/cart/tick.svg" >
  </div>
</template>

<script>
export default {
  name: "CartButton",
  data () {
    return {
    }
  },
  props: {
    ischeck: {
      type: Boolean,
      default: true
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .cartbutton {
    width: 25px;
    height: 26px;
    padding: 2px;
    border-radius: 50%;
    border: 2px solid #aaa;
    text-align: center;
  }
  .cartbutton img{
    width: 100%;
    line-height: 29px;
  }
  .clshow {
    border-color: var(--color-tint);
    background: var(--color-tint);
  }
</style>