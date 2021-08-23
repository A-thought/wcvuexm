<template>
  <div id="detailbaseinfo" v-if="Object.keys(goods).length != 0">
      <div class="detaibase-title" >{{ goods.title }}</div>
      <div class="detaibase-price">
          <span class="dbase-n-price">{{goods.newPrice}}</span>
          <span class="dbase-o-price">{{goods.oldPrice}}</span>
          <span class="dbase-discount">{{goods.discount}}</span>
      </div>
      <div class="dbase-other">
          <span class="dbase-quantity" >{{goods.column[0]}}</span>
          <span class="dbase-collection" >{{goods.column[1]}}</span>
          <span class="dbase-express" >{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="info-services" >
          <p class="info-services-item" v-for="index in goods.services.length-1" :key="index">
              <img :src="goods.services[index-1].icon">
              <span>{{goods.services[index-1].name}}</span>
          </p>
      </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  data () {
    return {
    }
  },
  props: {
      goods: {
          type: Object,
          default() {
              return {}
          }
      }
  }
}
</script>

<style scoped>
#detailbaseinfo{
    height: auto;
    border-bottom: 5px solid #ccc;
    padding-bottom: 20px;
}
.detaibase-title{
    width: 100%;
    height: auto;
    font-size: 16px;
    font-weight: 600;
    padding: 10px;

}
.detaibase-price{
    width: 100%;
    height: auto;
    padding: 10px;
    position: relative;
}
.dbase-n-price{
    font-size: 1.3rem;
    color: var(--color-tint);
    font-weight: 500;
}
.dbase-o-price{
    font-size: 0.8rem;
    color: #888;
    margin-left: 8px;
    text-decoration: line-through;
}
.dbase-discount{
    font-size: 0.5rem;
    background: var(--color-tint);
    border-radius: 0.5rem;
    width: auto;
    height: 1.1rem;
    color: #fff;
    font-weight: 600;
    line-height: 1.1rem;
    padding: 0 4px;
    display: inline-block;
    margin-left: 8px;
    position: absolute;
    top: 10px;
}
.dbase-other{
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-shadow: 2px 0px 2px #888 ;
}
.dbase-other span {
    flex-shrink: 1;
    font-size: 0.9rem;
    font-weight: 600;
}
.info-services {
    width: 100%;
    height: auto;
    
}
.info-services{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}
.info-services p{
    flex-shrink: 1;
    width: 100%;
    height: auto;
    padding: 5px 5px;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.info-services p img{
    width: 25px;
    height: 25px;
}

</style>