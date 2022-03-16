<template>
  <div class="home">
    <!--    放地图的容器-->
    <div id="main" ref="chart" style="width: 100vw; height: 90vh"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import china from "../assets/china.js";
export default {
  name: "test",
  data() {
    return {
      // 地图上显示的疫情数据
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
          text: "中国疫情地图",
          x: "center",
        },
        // 视觉映射组件，根据疫情数据的不同，地图显示不同的颜色
        visualMap: {
          type: "piecewise",
          min: 0,
          max: 1000,
          left: 300,
          bottom: 40,
          showLabel: !0,
          text: ["高", "低"],
          pieces: [
            {
              gt: 100,
              label: "> 100 人",
              color: "#7f1100",
              symbol: "roundRect",
            },
            {
              gte: 10,
              lte: 100,
              label: "10 - 100 人",
              color: "#ff5428",
            },
            {
              gte: 1,
              lt: 10,
              label: "1 - 9 人",
              color: "#ff8c71",
            },
            {
              value: 0,
              color: "#ADFF2F",
              symbol: "roundRect",
            },
          ],
          show: !0,
        },
        // 放上鼠标后显示的新
        tooltip: {
          trigger: "item",
          formatter: function (e, t, n) {
            return "地区：" + e.data.name + "<br/>确诊：" + e.data.value;
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
                return res.data.name;
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
  },
  mounted() {
    this.initChart();
  },
};
</script>

<style scoped>
.table-wrapper {
  margin-top: 101px;
}
</style>