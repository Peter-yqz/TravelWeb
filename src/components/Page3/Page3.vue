<template>
  <div>
    <div class="picker">
      <!-- <div style="flex: 1">选择时间：</div> -->
      <timeLine
        :timeLineList="timeLineList"
        @activeChange="changeDate"
      ></timeLine>
    </div>

    <div class="map">
      <!--    放地图的容器-->
      <div id="main" ref="chart" style="width: 100vw; height: 90vh"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { BmlHeatmap } from "vue-baidu-map";
import timeLine from "./timeLine.vue";
export default {
  name: "ChinaMap",
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
      dataList: [
        { name: "南海诸岛", value: 0 },
        { name: "北京", value: 54 },
        { name: "天津", value: 13 },
        { name: "上海", value: 40 },
        { name: "重庆", value: 75 },
        { name: "河北", value: 13 },
        { name: "河南", value: 83 },
        { name: "云南", value: 11 },
        { name: "辽宁", value: 19 },
        { name: "黑龙江", value: 15 },
        { name: "湖南", value: 69 },
        { name: "安徽", value: 60 },
        { name: "山东", value: 39 },
        { name: "新疆", value: 2 },
        { name: "江苏", value: 31 },
        { name: "浙江", value: 104 },
        { name: "江西", value: 36 },
        { name: "湖北", value: 1052 },
        { name: "广西", value: 33 },
        { name: "甘肃", value: 7 },
        { name: "山西", value: 9 },
        { name: "内蒙古", value: 7 },
        { name: "陕西", value: 22 },
        { name: "吉林", value: 4 },
        { name: "福建", value: 18 },
        { name: "贵州", value: 5 },
        { name: "广东", value: 98 },
        { name: "青海", value: 1 },
        { name: "西藏", value: 0 },
        { name: "四川", value: 44 },
        { name: "宁夏", value: 4 },
        { name: "海南", value: 22 },
        { name: "台湾", value: 3 },
        { name: "香港", value: 5 },
        { name: "澳门", value: 5 },
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
    initChart() {
      // 获取存放地图的dom元素
      let myChart = echarts.init(this.$refs.chart);
      // 指定图表的配置项和数据
      let option = {
        // 地图标题
        title: {
          text: "中国评论趋势分布图（鼠标点击上方选择不同时间）",
          x: "center",
        },
        // 视觉映射组件，根据疫情数据的不同，地图显示不同的颜色
        visualMap: {
          type: "piecewise",
          min: -384279382,
          max: 52566004,
          left: 300,
          bottom: 40,
          showLabel: !0,
          text: ["高", "低"],
          pieces: [
            {
              gt: 10000,
              // label: "> 100 人",
              color: "#7f1100",
              symbol: "roundRect",
            },
            {
              lt: 10000,
              gt: 5000,
              // label: "> 100 人",
              color: "#9b0022",
              symbol: "roundRect",
            },
            {
              lt: 5000,
              gte: 1000,
              // lte: 1000,
              // label: "10 - 100 人",
              color: "#ff5428",
              symbol: "roundRect",
            },
            {
              lt: 1000,
              gte: 1,
              // lt: 10,
              // label: "1 - 9 人",
              color: "#ff8c71",
              symbol: "roundRect",
            },
            {
              lt: 1,
              gte: -1000,
              color: "#75c7b3",
              symbol: "roundRect",
            },
            {
              lt: -1000,
              gte: -2000,
              color: "#92c4dd",
              symbol: "roundRect",
            },
            {
              lt: -2000,
              gte: -3000,
              color: "#3681b7",
              symbol: "roundRect",
            },
            {
              lt: -3000,
              gt: -10000,
              color: "#1d5aa1",
              symbol: "roundRect",
            },
            {
              lt: -10000,
              color: "#0b0a4c",
              symbol: "roundRect",
            },
          ],
          show: !0,
        },
        // 放上鼠标后显示的新
        tooltip: {
          trigger: "item",
          formatter: function (e, t, n) {
            if (e.value) {
              return "地区：" + e.name + "<br/>正负與情的评论数：" + e.value;
            } else {
              return "地区：" + e.name + "<br/>暂无数据";
            }
          },
          textStyle: {
            align: "left",
          },
        },
        // 设置地图数据
        series: [
          {
            type: "map",
            map: "china",
            label: {
              show: true,
              color: "black",
              fontsize: 12,
              formatter: (res) => {
                return res.name;
              },
            },
            itemStyle: {
              // borderColor: 'red',
              borderWidth: 0.5,
            },
            // 选中时候显示内容
            emphasis: {
              label: {
                color: "black",
                fontsize: 15,
              },
              itemStyle: {
                // borderColor: '#00FFFF',
                areaColor: "#ADFF2F",
              },
            },
            roam: true,
            data: this.dataList,
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    changeAction(e) {
      this.startTime = e.startTime;
      this.endTime = e.endTime;
    },
    
    changeDate(idx) {
      
      this.mapData = [];
      this.dataList = [];
      let correctTime = this.originalData.filter((val) => {
        return val.date == idx;
      });
      
      correctTime.map((val) => {
        val.location = val.location.replace("省", "");
        val.location = val.location.replace("市", "");
        val.location = val.location.replace("壮族自治区", "");
        val.location = val.location.replace("维吾尔自治区", "");
        val.location = val.location.replace("回族自治区", "");

        val.location = val.location.replace("自治区", "");

        this.dataList.push({
          name: val.location,
          value: val.PCN_NCN,
        });
      });
      console.log(
        "🚀 ~ file: Page3.vue ~ line 220 ~ correctTime.map ~ this.dataList",
        this.dataList
      );
      this.initChart();
    },
  },
  mounted: function () {
    this.initChart();
    this.$axios({
      headers: { "content-Type": "application/json;charset=utf-8" },
      method: "get",
      url: "new/getNewData",
    }).then((res) => {
      this.originalData = res.data.msg;
    });
  },
  watch: {
    originalData: function (val) {
      
      // val.map((i) => {
      //   i.num = parseFloat(i.num) + 384279382;
      // });
      let timeLable = {};
      for (let i of val) {
        // 
        timeLable[i.date] = "";
      }
      
      this.timeLineList = [];
      const t = Object.keys(timeLable).sort();
      
      for (let j of t) {
        this.timeLineList.push({
          timestamp: j,
          info: j,
        });
      }
      
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