<template>
  <div>
    <h1>中国大陆各省级行政区旅游消费曲线</h1>
    <timeLine
      class="topPanel"
      :timeLineList="timeLineList"
      @activeChange="changeLocation"
    ></timeLine>
    <el-row>
      <div ref="chart" style="width: 100%; height: 676px"></div>
    </el-row>
  </div>
</template>
<script>
import timeLine from "../Page3/timeLine.vue";
export default {
  name: "model",
  components: {
    timeLine,
  },
  data() {
    return {
      charData: ["北京", "天津", "上海", "广东", "河北", "山西", "福建"],
      chartValue: [1820, 932, 1901, 934, 290, 130, 320],
      currentCity: "北京",
      originalData: [],
      timeLineList: [],
    };
  },
  mounted() {
    this.getEchartData();
    this.getOriginalData();
  },
  methods: {
    getOriginalData() {
      this.$axios({
        headers: { "content-Type": "application/json;charset=utf-8" },
        method: "get",
        url: "hotel/getData",
      }).then((res) => {
        console.log(res.data.msg);
        this.originalData = res.data.msg;
        let timeLable = {};
        for (let i of this.originalData) {
          // console.log(i);
          timeLable[i.location] = "";
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
      });
    },
    changeLocation(idx) {
      console.log("父亲改变了： ", idx);
      this.currentCity = idx;
      // this.mapData = [];
      // this.dataList = [];
      let correctData = this.originalData.filter((val) => {
        return val.location == idx;
      });
      this.charData = [];
      this.chartValue = [];
      correctData.map((val) => {
        this.charData.push(val.date);
        this.chartValue.push(val.income);
      });
      this.charData.sort()
      this.getEchartData();
    },
    getEchartData() {
      const chart = this.$refs.chart;
      if (chart) {
        const myChart = this.$echarts.init(chart);
        const option = {
          xAxis: {
            type: "category",
            data: this.charData,
            name: this.currentCity,
            nameLocation: "center",
            // nameRotate: 90,
            nameGap: 30,
            nameTextStyle: {
              fontSize: "16px",
              // padding: [0, 0, 0, 520],
            },
          },
          yAxis: {
            name: "单位：亿元",
            nameLocation: "center",
            nameRotate: 90,
            nameGap: 30,
            nameTextStyle: {
              fontSize: "16px",
              padding: [0, 0, 10, 500],
            },
            type: "value",
          },
          series: [
            {
              data: this.chartValue,
              type: "line",
            },
          ],
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      }
      this.$on("hook:destroyed", () => {
        window.removeEventListener("resize", function () {
          myChart.resize();
        });
      });
    },
  },
};
</script>
<style>
.topPanel {
  width: 100vw;
}
</style>