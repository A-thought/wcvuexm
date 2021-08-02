<template>
  <div class="recommend">
    <div v-for="item in recommends.list" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendsView",
  props: {
    recommends: {
        type: Object,
        default() {
            return {}
        }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding:10px 0 20px;
  border-bottom: #eee solid 10px;
}
.recommend-item{
  flex-shrink: 1;
  flex-grow: 1;
  text-align: center;
  font-size: 12px;
}
.recommend-item img{
  width: 80%;
  margin: 5px;
}
</style>