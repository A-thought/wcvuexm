<template>
  <div class="tost" v-show="tostshow">
      {{message}}
  </div>
</template>

<script>
export default {
  name: "tost",
  data () {
    return {
    }
  },
  methods: {
    show(message,duration) {
      this.show = true
      this.message = message
      setTimeout(() => {
        this.show = false
      }, duration);
    }
  },
  props: {
     message: {
         type: String,
         default: ''
     },
     tostshow: {
         type: Boolean,
         default: false
     }
  },
  
}
</script>

<style scoped>
.tost{
    padding: 6px 8px;
    position: fixed;
    color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: rgba(0,0,0,0.5);
    text-align: center;
    font-size: 18px;
}
</style>