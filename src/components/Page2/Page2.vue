<template>
<div class="container">
  <div>
    <div class="top-img-container">
      <img class="first-equation" src="../../assets/tour.png" alt="公式" />

      <img :src="currentImg" class="second-equation" alt="公式" />
    </div>

    <div class="select">
      <el-dropdown @command="handleCommand">
        <el-button type="primary">
          选择模型<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="number">国内旅游人数</el-dropdown-item>
          <el-dropdown-item command="income">国内旅游收入</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    
    <div class="allContent">
      <div class="title">{{ this.modelMap[this.currentModel] }}</div>
      <br />
      <timeLine
        class="topPanel"
        :timeLineList="timeLineList"
        @activeChange="changeLocation"
      ></timeLine>
    </div>
  </div>
  <div class="chart-container">
    <div ref="chart" class="chart" ></div>
    <div ref="chart1" class="chart" ></div>
    <div ref="chart2" class="chart" ></div>
  </div>
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
      currentImg: {},
      imgMap: {
        number: "forNumber.png",
        income: "forIncome.png",
      },
      originalData: [],
      timeLineList: [],
      correctData: [],
      timeLable: {},
      currentCity: "北京",
      currentModel: "number",
      modelMap: {
        number: "国内旅游人数（单位：万人次）",
        income: "国内旅游收入（单位：亿元）",
      },
      chart1RN: [1820, 932, 1901, 934, 290, 130, 320],
      chart1CN: [1820, 932, 1901, 934, 290, 130, 320],
      chart1PN: [1820, 932, 1901, 934, 290, 130, 320],
      chart2PCN_NCN: [1820, 932, 1901, 934, 290, 130, 320],
      chart2PRN_NRN: [1820, 932, 1901, 934, 290, 130, 320],
      chart2PPN_NPN: [1820, 932, 1901, 934, 290, 130, 320],
    };
  },
  mounted() {
    this.getEchartData();
    this.getOriginalData();
    this.setSecondChart();
    this.setThirdChart();
  },
  methods: {
    async getOriginalData() {
      this.$axios({
        headers: { "content-Type": "application/json;charset=utf-8" },
        method: "get",
        url: "new/getNewData",
      }).then((res) => {
        this.originalOpinionData = res.data.msg;

        let myTable = {};
        for (let i of this.originalOpinionData) {
          myTable[i.location] = 1;
        }
        this.timeLineList = [];
        let intersection = Object.keys(myTable);
        const t = intersection.sort();

        for (let j of t) {
          this.timeLineList.push({
            timestamp: j,
            info: j,
          });
        }
      });
    },
    changeLocation(idx) {
      this.currentCity = idx;
      this.correctData = this.originalOpinionData.filter((val) => {
        return val.location == idx;
      });
      this.getEchartData();
      this.setSecondChart();
      this.setThirdChart();
    },
    getEchartData() {
      const chart = this.$refs.chart;
      // this.charData.splice(0, index);
      this.charData = [];
      this.chartValue = [];
      this.correctData.map((val) => {
        this.charData.push(val.date);
        if (this.currentModel === "income") {
          this.chartValue.push(val.DR);
        } else {
          this.chartValue.push(val.DT);
        }
      });
      this.currentImg = require("../../assets/" +
        this.imgMap[this.currentModel]);
      this.charData.sort();
      if (chart) {
        const myChart = this.$echarts.init(chart);

        const myOption = {
          title: {
            text: this.currentCity,
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: [this.modelMap[this.currentModel]],
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: this.charData,
          },
          yAxis: {
            name: this.currentModel === "income" ? "单位：亿元" : "万人次",
            nameLocation: "center",
            nameRotate: 90,
            nameGap: 30,
            nameTextStyle: {
              fontSize: "15px",
              padding: [0, 0, 30, 100],
            },
            type: "value",
          },
          series: [
            {
              name: this.modelMap[this.currentModel],
              type: "line",
              stack: "Total",
              data: this.chartValue,
            },
          ],
        };

        myChart.setOption(myOption);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
        this.$on("hook:destroyed", () => {
          window.removeEventListener("resize", function () {
            myChart.resize();
          });
        });
      }
    },

    setSecondChart() {
      const chart1 = this.$refs.chart1;
      // this.charData.splice(0, index);

      this.chart1RN = [];
      this.correctData.map((val) => {
        this.chart1RN.push(val.RN);
      });

      this.chart1CN = [];
      this.correctData.map((val) => {
        this.chart1CN.push(val.CN);
      });

      this.chart1PN = [];
      this.correctData.map((val) => {
        this.chart1PN.push(val.PN);
      });

      if (chart1) {
        const myChart = this.$echarts.init(chart1);

        const myOption = {
          title: {
            text: "负影响指标",
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: ["负转发数", "负评论数", "负点赞数"],
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: this.charData,
          },
          yAxis: {
            name: "数量",
            nameLocation: "center",
            nameRotate: 90,
            nameGap: 30,
            nameTextStyle: {
              fontSize: "15px",
              padding: [0, 0, 40, 100],
            },
            type: "value",
          },
          series: [
            {
              name: "负转发数",
              type: "line",
              stack: "Total",
              data: this.chart1RN,
            },
            {
              name: "负评论数",
              type: "line",
              stack: "Total",
              data: this.chart1CN,
            },
            {
              name: "负点赞数",
              type: "line",
              stack: "Total",
              data: this.chart1PN,
            },
          ],
        };
        myChart.setOption(myOption);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
        this.$on("hook:destroyed", () => {
          window.removeEventListener("resize", function () {
            myChart.resize();
          });
        });
      }
    },
    setThirdChart() {
      const chart2 = this.$refs.chart2;
      // this.charData.splice(0, index);

      this.chart2PCN_NCN = [];
      this.correctData.map((val) => {
        this.chart2PCN_NCN.push(val.PCN_NCN);
      });

      this.chart2PPN_NPN = [];
      this.correctData.map((val) => {
        this.chart2PPN_NPN.push(val.PPN_NPN);
      });

      this.chart2PRN_NRN = [];
      this.correctData.map((val) => {
        this.chart2PRN_NRN.push(val.PRN_NRN);
      });

      if (chart2) {
        const myChart = this.$echarts.init(chart2);

        const myOption = {
          title: {
            text: "正影响指标",
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: ["正转发数", "正评论数", "正点赞数"],
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: this.charData,
          },
          yAxis: {
            name: "数量",
            nameLocation: "center",
            nameRotate: 90,
            nameGap: 30,
            nameTextStyle: {
              fontSize: "15px",
              padding: [0, 0, 40, 100],
            },
            type: "value",
          },
          series: [
            {
              name: "正转发数",
              type: "line",
              stack: "Total",
              data: this.chart2PRN_NRN,
            },
            {
              name: "正评论数",
              type: "line",
              stack: "Total",
              data: this.chart2PCN_NCN,
            },
            {
              name: "正点赞数",
              type: "line",
              stack: "Total",
              data: this.chart2PPN_NPN,
            },
          ],
        };
        myChart.setOption(myOption);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
        this.$on("hook:destroyed", () => {
          window.removeEventListener("resize", function () {
            myChart.resize();
          });
        });
      }
    },
    handleCommand(command) {
      console.log("command: ", command);
      this.currentModel = command;
      this.getOriginalData();
      this.getEchartData();
      this.setSecondChart();
      this.setThirdChart();
    },
  },
};
</script>
<style lang="css" scoped>
.container{
  margin: 30px;
}
.select {
  position: relative;
  display: inline;

  top: 30px;
  z-index: 1000;
}
.allContent {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* width: 100vw; */
}
.title {

  font-size: 20px;
  font-weight: bold;
}
.first-equation {
  width: 35%;
}
.second-equation {
  width: 30%;
}

.eTitle {
  margin-left: 20px;
}

.top-img-container {
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.topPanel {
  width: 80vw;
  z-index: 100;
}
.chart{
  width: 80vw;
  height: 30vh;
  margin-top: 50px;
}
.chart-container{
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>