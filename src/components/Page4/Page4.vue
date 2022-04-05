<template>
  <div>
    <el-dropdown @command="handleCommand">
      <el-button type="primary">
        选择模型<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="number">旅游人数</el-dropdown-item>
        <el-dropdown-item command="income">旅游收入</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="select">
      <span class="title">{{ this.modelMap[this.currentModel] }}</span>
    </div>
    <br />
    <br />
    <div ref="chart" class="chart" style="width: 90%; height: 40vh"></div>
    <br />
    <br />
    <div class="adjust-container">
      <div class="left-container">
        <my-echart
          :charData="charData"
          :charYdata="chart1GDP"
          :chartTitle="GDPTitle"
          chartSubtext="鼠标拖动数据变化"
          chartYname="单位:亿元"
          chartColor="#3b83d1"
          @activeChange="changeGDP"
        ></my-echart>
        <my-echart
          :charData="charData"
          :charYdata="chart1CPI"
          :chartTitle="CPITitle"
          chartSubtext="鼠标拖动数据变化"
          chartColor="#489f5a"
          chartYname="单位:%"
          @activeChange="changeCPI"
        ></my-echart>
        <my-echart
          :charData="charData"
          :charYdata="chart1IP"
          :chartTitle="IPTitle"
          chartSubtext="鼠标拖动数据变化"
          chartYname="单位:%"
          chartColor="#e9867f"
          @activeChange="changeIP"
        ></my-echart>
      </div>

      <div class="right-container">
        <el-dropdown @command="handleArgument">
          <el-button type="primary">
            自变量选择<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="RN">RN-转发数</el-dropdown-item>
            <el-dropdown-item command="CN">CN-评论数</el-dropdown-item>
            <el-dropdown-item command="PN">PN-点赞数</el-dropdown-item>
            <el-dropdown-item command="PRN_NRN"
              >TRN-正面相对转发数</el-dropdown-item
            >
            <el-dropdown-item command="PCN_NCN"
              >TCN-正面相对评论数</el-dropdown-item
            >
            <el-dropdown-item command="PPN_NPN"
              >TPN-正面相对点赞数</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>

        <br />
        <br />
        <my-echart
          :charData="charData"
          :charYdata="argData"
          :chartTitle="ArgTitle"
          :xName="xName"
          chartSubtext="鼠标拖动数据变化"
          chartYname="单位:个"
          chartColor="#7d1784"
          @activeChange="changeArgData"
        ></my-echart>
        <div class="arg-title-container">
          <!-- <span class="arg-title">{{
            argTitleTable[currentModel][currentArg]
          }}</span> -->
          <img :src="currentImg" alt="公式" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyEchart from "./MyEchart.vue";
export default {
  name: "page4",
  components: {
    MyEchart,
  },
  data() {
    return {
      charData: ["北京", "天津", "上海", "广东", "河北", "山西", "福建"],
      chartValue: [1820, 932, 1901, 934, 290, 130, 320],
      originalChartValue: [],
      correctData: [],
      currentModel: "number",
      modelMap: {
        number: "旅游人数（单位：万人次）",
        income: "旅游收入（单位：亿元）",
      },
      chart1GDP: [1820, 932, 1901, 934, 290, 130, 320],
      chart1IP: [1820, 932, 1901, 934, 290, 130, 320],
      chart1CPI: [1820, 932, 1901, 934, 290, 130, 320],
      argMap: {
        RN: "RN-转发数",
        CN: "CN-评论数",
        PN: "PN-点赞数",
        PRN_NRN: "TRN-正面相对转发数",
        PCN_NCN: "TCN-正面相对评论数",
        PPN_NPN: "TPN-正面相对点赞数",
      },
      argTable: {
        number: {
          GDPArgMap: {
            RN: 1.072,
            CN: 1.11,
            PN: 1.101,
            PRN_NRN: 1.072,
            PCN_NCN: 1.108,
            PPN_NPN: 1.106,
          },
          IPArgMap: {
            RN: 532.667,
            CN: 556.171,
            PN: 545.507,
            PRN_NRN: 530.534,
            PCN_NCN: 549.661,
            PPN_NPN: 545.631,
          },
          CPIArgMap: {
            RN: -10.941,
            CN: -10.91,
            PN: -10.83,
            PRN_NRN: -10.933,
            PCN_NCN: -10.843,
            PPN_NPN: -10.784,
          },
          SelectArgMap: {
            RN: -0.006,
            CN: -0.029,
            PN: -0.002,
            PRN_NRN: 0.007,
            PCN_NCN: 0.032,
            PPN_NPN: 0.002,
          },
        },

        income: {
          GDPArgMap: {
            RN: 0.149,
            CN: 0.165,
            PN: 0.16,
            PRN_NRN: 0.139,
            PCN_NCN: 0.157,
            PPN_NPN: 0.157,
          },
          IPArgMap: {
            RN: 85.267,
            CN: 86.505,
            PN: 86.35,
            PRN_NRN: 89.777,
            PCN_NCN: 88.774,
            PPN_NPN: 88.117,
          },
          CPIArgMap: {
            RN: -1.317,
            CN: -1.319,
            PN: -1.301,
            PRN_NRN: -1.304,
            PCN_NCN: -1.299,
            PPN_NPN: -1.289,
          },
          SelectArgMap: {
            RN: -0.001,
            CN: -0.005,
            PN: -0.0,
            PRN_NRN: 0.001,
            PCN_NCN: 0.005,
            PPN_NPN: 0.0,
          },
        },
      },
      argImgTable: {
        income: {
          RN: "转发数每增加1个单位，国内旅游收入减少0.001个单位",
          CN: "评论数每增加1个单位，国内旅游收入减少0.005个单位	",
          PN: "点赞数对国内旅游收入产生了负向影响，但不明显	 ",
          PRN_NRN: "正面转发相对数每增加1个单位，国内旅游收入增加0.001个单位",
          PCN_NCN: "正面评论相对数每增加1个单位，国内旅游收入增加0.005个单位	",
          PPN_NPN: "正面点赞相对数对国内旅游收入有正向影响，但不明显",
        },
        number: {
          RN: "转发数每增加1个单位，国内旅游人数减少0.006个单位",
          CN: "评论数每增加1个单位，对国内旅游人数减少0.029个单位",
          PN: "点赞数每增加1个单位，国内旅游人数减少0.002个单位	",
          PRN_NRN: "正面转发相对数每增加1个单位，国内旅游人数增加0.007个单位",
          PCN_NCN: "正面评论相对数每增加1个单位，国内旅游人数增加0.032个单位",
          PPN_NPN: "正面点赞相对数每增加1个单位，国内旅游人数增加0.002个单位",
        },
      },
      currentImg: {},
      argTitleTable: {
        income: {
          
          RN: "7.png",
          CN: "8.png",
          PN: "9.png",
          PRN_NRN: "10.png",
          PCN_NCN: "11.png",
          PPN_NPN: "12.png",
        },
        number: {
          RN: "1.png",
          CN: "2.png",
          PN: "3.png",
          PRN_NRN: "4.png",
          PCN_NCN: "5.png",
          PPN_NPN: "6.png",
        },
      },
      currentArg: "RN",
      argData: [],
      minDate: 10000,
      argObject: {},
      yGDP: 0,
      yCPI: 0,
      yIP: 0,
      yArg: 0,
      currentCity: "广西",
      GDPTitle: "",
      CPITitle: "",
      IPTitle: "",
      ArgTitle: "",
      xName: "名字",
    };
  },
  mounted() {
    this.getOriginalData();
    this.getEchartData();
    this.setThreeChart();
    this.setArgChart();
  },
  methods: {
    async getOriginalData() {
      this.$axios({
        headers: { "content-Type": "application/json;charset=utf-8" },
        method: "get",
        url: "new/getNewDataByLocation",
        params: { location: this.currentCity },
      }).then((res) => {
        this.correctData = res.data.msg;
        this.correctData = this.correctData.filter((v) => {
          return v.date !== 2020;
        });
        this.correctData = this.correctData.sort((a, b) => {
          console.log("a, b: ", a, b);

          if (parseInt(a.date) > parseInt(b.date)) return 1;
          else if (parseInt(a.date) == parseInt(b.date)) {
            return 0;
          } else {
            return -1;
          }
        });
        console.log("this.correctData: ", this.correctData);
        this.initTitle();
        this.correctData.map((c) => {
          console.log(c.date);
        });

        this.getEchartData();
        this.setThreeChart();
        this.setArgChart();
      });
    },
    getEchartData() {
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

      this.charData.sort();
      this.originalChartValue = this.chartValue.slice(0);
      console.log("this.originalChartValue : ", this.originalChartValue);

      this.setFirstChart();
    },
    setFirstChart() {
      const chart = this.$refs.chart;
      if (chart) {
        const myChart = this.$echarts.init(chart);

        const myOption = {
          title: {
            text: "正影响指标",
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: ["源数据", "变化数据"],
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
              name: "变化数据",
              type: "line",
              // stack: "Total",
              data: this.chartValue,
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: "#de6e6a",
                    type: "dashed",
                  },
                },
              },
              color: "#de6e6a",
            },
            {
              name: "源数据",
              type: "line",
              // stack: "Total",
              data: this.originalChartValue,
            },
          ],
        };

        myChart.setOption(myOption);
      }
    },
    setThreeChart() {
      this.minDate = 10000;
      this.correctData.map((val) => {
        if (this.minDate > val.date) {
          this.minDate = val.date;
        }
      });
      this.chart1GDP = [];
      this.correctData.map((val) => {
        this.chart1GDP.push([val.date - this.minDate, val.GDP]);
      });
      this.chart1IP = [];
      this.correctData.map((val) => {
        this.chart1IP.push([val.date - this.minDate, val.IP]);
      });
      this.chart1CPI = [];

      this.correctData.map((val) => {
        this.chart1CPI.push([val.date - this.minDate, val.CPI]);
      });
      console.log("this.chart1CPI: ", this.chart1CPI);
    },
    initTitle() {
      this.GDPTitle =
        "国内生产总值 回归因子：" +
        this.argTable[this.currentModel]["GDPArgMap"][this.currentArg];
      this.CPITitle =
        "消费价格指数 回归因子：" +
        this.argTable[this.currentModel]["CPIArgMap"][this.currentArg];
      this.IPTitle =
        "互联网普及率 回归因子：" +
        this.argTable[this.currentModel]["IPArgMap"][this.currentArg];
      this.ArgTitle =
        this.argMap[this.currentArg] +
        " 回归因子: " +
        this.argTable[this.currentModel]["SelectArgMap"][this.currentArg];
      this.currentImg = require( "../../assets/" + this.argTitleTable[this.currentModel][
        this.currentArg
      ]);
    },
    handleCommand(command) {
      this.currentModel = command;
      this.argObject = {};
      this.initTitle();
      this.getOriginalData();
      this.getEchartData();
      this.setThreeChart();
    },
    handleArgument(arg) {
      this.currentArg = arg;
      this.initTitle();
      this.setArgChart();
    },
    setArgChart() {
      this.argData = [];
      this.correctData.map((val) => {
        this.argData.push([val.date - this.minDate, val[this.currentArg]]);
      });
    },
    changeGDP(x, y) {
      if (this.argObject[x]) {
        this.argObject[x]["GDP"] = y;
      } else {
        this.argObject[x] = {
          GDP: y,
          CPI: 0,
          IP: 0,
          Arg: 0,
        };
      }
      this.totalEquation(x);
    },
    changeCPI(x, y) {
      if (this.argObject[x]) {
        this.argObject[x]["CPI"] = y;
      } else {
        this.argObject[x] = {
          GDP: 0,
          CPI: y,
          IP: 0,
          Arg: 0,
        };
      }
      this.totalEquation(x);
    },
    changeIP(x, y) {
      if (this.argObject[x]) {
        this.argObject[x]["IP"] = y;
      } else {
        this.argObject[x] = {
          GDP: 0,
          CPI: 0,
          IP: y,
          Arg: 0,
        };
      }
      this.totalEquation(x);
    },
    changeArgData(x, y) {
      if (this.argObject[x]) {
        this.argObject[x]["Arg"] = y;
      } else {
        this.argObject[x] = {
          GDP: 0,
          CPI: 0,
          IP: 0,
          Arg: y,
        };
      }
      this.totalEquation(x);
    },
    totalEquation(x) {
      this.chartValue[x] =
        this.originalChartValue[x] +
        (this.argObject[x]["GDP"] *
          this.argTable[this.currentModel]["GDPArgMap"][this.currentArg] +
          this.argObject[x]["CPI"] *
            this.argTable[this.currentModel]["CPIArgMap"][this.currentArg] +
          this.argObject[x]["IP"] *
            this.argTable[this.currentModel]["IPArgMap"][this.currentArg] +
          this.argObject[x]["Arg"] *
            this.argTable[this.currentModel]["SelectArgMap"][this.currentArg]);

      this.chartValue = this.chartValue.slice();
      this.setFirstChart();
    },
  },
};
</script>
<style>
.select {
  display: inline-flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 90px;
  margin-left: 20px;
}
.allContent {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}
.title {
  display: inline-block;
  margin-left: 30vw;
  font-size: 22px;
  font-weight: bold;
}

.eTitle {
  margin-left: 20px;
}
.equation-img {
  display: block;
  width: 80%;
}
.adjust-container {
  display: flex;
  flex-direction: row;
}
.left-container {
  width: 50%;
  display: inline-block;
}
.right-container {
  display: inline-block;
  width: 50%;
}
.arg-title {
  margin-top: -50px;
  font-size: 20px;
}
.arg-title-container {
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
}
</style>