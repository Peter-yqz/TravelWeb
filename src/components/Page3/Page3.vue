<template>
  <div>
    <div class="picker">
      <!-- <div style="flex: 1">选择时间：</div> -->
      <timeLine
        :timeLineList="timeLineList"
        @activeChange="changeDate"
      ></timeLine>
    </div>
    <baidu-map class="map" center="郑州" :zoom="6" :scroll-wheel-zoom="true">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bml-heatmap :data="mapData" :max="1000" :radius="10"> </bml-heatmap>
    </baidu-map>
  </div>
</template>

<script>
import { BmlHeatmap } from "vue-baidu-map";
import timeLine from "./timeLine.vue";
export default {
  components: {
    BmlHeatmap,
    timeLine,
  },
  data() {
    return {
      mapData: [
        { lng: 116.418261, lat: 39.921984, count: 900 },
        { lng: 118.423332, lat: 38.916532, count: 810 },
        { lng: 121.7192, lat: 31.309853, count: 999 },
        // ...此处添加更多的数据集
      ],
      originalData: [],
      timeLineList: [
        {
          timestamp: "2013-10-6",
          info: "2013-10-6",
        },
        {
          timestamp: "2014-10-6",
          info: "2014-10-6",
        },
        {
          timestamp: "2015-10-6",
          info: "2015-10-6",
        },
        {
          timestamp: "2016-10-6",
          info: "2016-10-6",
        },
        {
          timestamp: "2017-10-6",
          info: "2017-10-6",
        },
        {
          timestamp: "2018-10-6",
          info: "2018-10-6",
        },
        {
          timestamp: "2019-10-6",
          info: "2019-10-6",
        },
        {
          timestamp: "2020-10-6",
          info: "2020-10-6",
        },
      ],
    };
  },
  methods: {
    changeAction(e) {
      this.startTime = e.startTime;
      this.endTime = e.endTime;
    },
    changeDate(idx) {
      console.log("父亲改变了： ", idx);
      this.mapData = [];
      let correctTime = this.originalData.filter((val) => {
        return val.date == idx;
      });
      console.log(correctTime);
      correctTime.map((val) => {
        this.mapData.push({
          lng: val.lng,
          lat: val.lat,
          count: val.num,
        });
      });
    },
  },
  mounted: function () {
    this.$axios({
      headers: { "content-Type": "application/json;charset=utf-8" },
      method: "get",
      url: "map/getData",
    }).then((res) => {
      console.log(res);
      this.originalData = res.data.msg;
    });
  },
  watch: {
    originalData: function (val) {
      console.log("🚀 ~ file: Page3.vue ~ line 103 ~ val", val);
      val.map(i => {
        i.num = parseFloat(i.num) + 384279382
      })
      let timeLable = {};
      for (let i of val) {
        // console.log(i);
        timeLable[i.date] = "";
      }
      console.log(timeLable);
      this.timeLineList = [];
      const t = Object.keys(timeLable).sort();
      console.log(t);
      for (let j of t) {
        this.timeLineList.push({
          timestamp: j,
          info: j,
        });
      }
      console.log(this.timeLineList);
    },
  },
};
</script>
<style>
.map {
  width: 100%;
  height: 100vh;
}
.picker {
  z-index: 100;
  height: 60px;
  margin-top: 20px;
  width: 100vw;
}
</style>