<template>
  <div>
    <el-dropdown @command="handleCommand" class="select">
      <el-button type="primary">
        选择模型<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="hotel">消费情况</el-dropdown-item>
        <el-dropdown-item command="tour">景区收入</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <h1 class="title">{{ this.modelMap[this.currentModel] }}</h1>
    <timeLine
      class="topPanel"
      :timeLineList="timeLineList"
      @activeChange="changeLocation"
    ></timeLine>
    <el-row>
      <div ref="chart" style="width: 100%; height: 42vh"></div>
    </el-row>
    <el-row>
      <div ref="chart1" style="width: 100%; height: 42vh"></div>
    </el-row>
  </div>
</template>
<script>
import timeLine from "../Page3/timeLine.vue";
export default {
  name: "hello",
  components: {
    timeLine,
  },
  data() {
    return {
      charData: ["北京", "天津", "上海", "广东", "河北", "山西", "福建"],
      chartValue: [1820, 932, 1901, 934, 290, 130, 320],
      char1Data: ["北京", "天津", "上海", "广东", "河北", "山西", "福建"],
      chart1Value: [1820, 932, 1901, 934, 290, 130, 320],
      originalData: [],
      timeLineList: [],
      originalOpinionData: [],
      timeLable: {},
      currentCity: "北京",
      currentModel: "hotel",
      modelMap: {
        hotel: "消费情况",
        tour: "景点收入",
      },
    };
  },
  mounted() {
    this.getEchartData();
    this.getOriginalData();
  },
  methods: {
    async getOriginalData() {
      await this.$axios({
        headers: { "content-Type": "application/json;charset=utf-8" },
        method: "get",
        url: this.currentModel + "/getData",
      }).then((res) => {
        console.log(res.data.msg);
        this.originalData = res.data.msg;
        for (let i of this.originalData) {
          this.timeLable[i.location] = 1;
        }
        this.timeLineList = [];
        const t = Object.keys(this.timeLable).sort();
        console.log(t);
        for (let j of t) {
          this.timeLineList.push({
            timestamp: j,
            info: j,
          });
        }
        console.log(this.timeLineList);
      });

      this.$axios({
        headers: { "content-Type": "application/json;charset=utf-8" },
        method: "get",
        url: "map/getData",
      }).then((res) => {
        console.log(res.data.msg);
        this.originalOpinionData = res.data.msg;
        let myTable = {};
        for (let i of this.originalOpinionData) {
          myTable[i.location] = 1;
        }
        this.timeLineList = [];
        let intersection = Object.keys(this.timeLable).filter((v) =>
          Object.keys(myTable).includes(v)
        );
        const t = intersection.sort();
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
      let correctData = this.originalData.filter((val) => {
        return val.location == idx;
      });
      this.charData = [];
      this.chartValue = [];
      correctData.map((val) => {
        this.charData.push(val.date);
        this.chartValue.push(val.income);
      });
      this.charData.sort();

      let correctOpinionData = this.originalOpinionData.filter((val) => {
        return val.location == idx;
      });
      this.char1Data = [];
      this.chart1Value = [];
      correctOpinionData.map((val) => {
        this.char1Data.push(val.date);
        this.chart1Value.push(val.num);
      });
      this.char1Data.sort();
      this.getEchartData();
    },
    getEchartData() {
      const chart = this.$refs.chart;
      const chart1 = this.$refs.chart1;
      let index = 0;
      while (this.charData[0].substr(0, 4) != this.char1Data[0].substr(0, 4)) {
        if (this.charData[0] > this.char1Data[0]) {
          this.char1Data.shift();
        } else {
          this.charData.shift();
        }
        index++;
        if (index > 10) {
          break;
        }
      }
      // this.charData.splice(0, index);
      console.log("this.charData: ", this.charData, this.char1Data);
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
          // title: {
          //   show: true,
          //   text: "鼠标点击上方选择不同城市",
          //   x:'center'
          // },
          yAxis: {
            name: "单位：亿元",
            nameLocation: "center",
            nameRotate: 90,
            nameGap: 30,
            nameTextStyle: {
              fontSize: "16px",
              padding: [0, 0, 20, 400],
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
        this.$on("hook:destroyed", () => {
          window.removeEventListener("resize", function () {
            myChart.resize();
          });
        });
      }

      if (chart1) {
        const myChart1 = this.$echarts.init(chart1);
        const option = {
          xAxis: {
            type: "category",
            data: this.char1Data,
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
            name: "舆情热度",
            nameLocation: "center",
            nameRotate: 90,
            nameGap: 30,
            nameTextStyle: {
              fontSize: "16px",
              padding: [0, 0, 60, 400],
            },
            type: "value",
          },
          series: [
            {
              data: this.chart1Value,
              type: "line",
            },
          ],
        };
        myChart1.setOption(option);
        window.addEventListener("resize", function () {
          myChart1.resize();
        });
        this.$on("hook:destroyed", () => {
          window.removeEventListener("resize", function () {
            myChart1.resize();
          });
        });
      }
    },
    handleCommand(command) {
      console.log("command: ", command);
      this.currentModel = command;
      this.getOriginalData();
      this.getEchartData();
    },
  },
};
</script>
<style>
.topPanel {
  width: 100vw;
}
.select {
  margin-top: 60px;
  margin-bottom: 20px;
  margin-left: 20px;
}
.title {
  display: inline-block;
  margin-left: 38vw;
}
</style>