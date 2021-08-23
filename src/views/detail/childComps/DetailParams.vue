<template>
  <div class="param-info" v-if="Object.keys(detailparams).length !== 0">
    <p>参数信息</p>
    <table :key="index" class="info-size" v-for="(table, index) in detailparams.sizes">
      <tr :key="indexo" v-for="(tr, indexo) in table">
        <td :key="indext" v-for="(td, indext) in tr">{{ td }}</td>
      </tr>
    </table>

    <table class="info-param">
      <tr :key="index" v-for="(info, index) in detailparams.infos">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>

    <div class="info-img" v-if="detailparams.image.length !== 0">
      <img :src="detailparams.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    detailparams: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.info-img tr {
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
}
.info-size tr td:not(:first-child){
    flex-shrink: 1;
    align-items: center;
    padding: 5px;
}
.param-info {
  font-size: 14px;
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
}

.param-info p {
  font-size: 15px;
  margin-bottom: 10px;
}

.param-info table {
  width: 100%;
  border-collapse: collapse;
}

.param-info table tr {
  height: 42px;
}

.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}

.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.param-value {
  color: #eb4868;
}

.info-img img {
  width: 100%;
}
</style>
