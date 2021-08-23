<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  .tab-bar {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    bottom: -2px;
    left: 0;
    right: 0;
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
    z-index: 30;
  }
</style>
