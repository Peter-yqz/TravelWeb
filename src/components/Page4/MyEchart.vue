<template>
  <div>
    <div ref="chart2" style="width: 100%; height: 100%"></div>
    <!-- :timeLineList="timeLineList"
        @activeChange="changeDate" -->
  </div>
</template>
<script>
export default {
  name: "MyEchart",
  props: [
    "charData",
    "charYdata",
    "chartTitle",
    "chartSubtext",
    "chartYname",
    "chartColor",
    "xName",
  ],
  data() {
    return {
      symbolSize: 10, // 通过拖动是可以实时改变这里的值的
      dom: null,
      timer: 0,
      originalData: [],
    };
  },
  watch: {
    charYdata: {
      //深度监听，可监听到对象、数组的变化
      handler(newV, oldV) {
        // do something, 可使用this

        this.initExample();
      },
      deep: true,
    },
  },
  mounted() {
    this.initExample();
    const that = this;
    this.timer = setInterval(() => {
      that.dom && that.dom.resize();
      that.dom.setOption({
        graphic: that.$echarts.util.map(
          that.charYdata,
          (dataItem, dataIndex) => {
            const inthat = this; // 因为ondrag函数必须在回调内使用this.position获取实时坐标，此处必须用that替换this
            return {
              // 'circle' 表示这个 graphic element 的类型是圆点。
              type: "circle",
              shape: {
                // 圆点的半径。
                r: inthat.symbolSize / 2,
              },
              // 用 transform 的方式对圆点进行定位。position: [x, y] 表示将圆点平移到 [x, y] 位置。
              // 这里使用了 convertToPixel 这个 API 来得到每个圆点的位置
              position: that.dom.convertToPixel("grid", dataItem),
              // 这个属性让圆点不可见（但是不影响他响应鼠标事件）。
              invisible: true,
              // 这个属性让圆点可以被拖拽。
              draggable: true,
              // 把 z 值设得比较大，表示这个圆点在最上方，能覆盖住已有的折线图的圆点。
              z: 100000000,
              ondrag: that.$echarts.util.curry(function (dataIndex) {
                // 此处必须用匿名函数，不能用箭头函数，否则拿不到拖动的坐标
                let origin = that.dom.convertToPixel(
                  "grid",
                  that.charYdata[dataIndex]
                ); // 得到每个圆点原始位置
                // let maxY = that.dom.convertToPixel('grid', [40, 36]) // 最高温度为36摄氏度，暂未做封装
                // 超过最高温度36将不能拖动,写死的最低点高度为240，最高点为40
                // if (this.position[1] > 240) {
                //   this.position[1] = 240;
                // } else if (this.position[1] < 40) {
                //   this.position[1] = 40;
                // }
                this.position[0] = origin[0]; // 控制每个点位只能在y轴方向移动

                // this.position[1] = origin[1] // 控制每个点位只能在x轴方向移动
                // 实时获取拖动的点位信息并根据此信息重新画图

                that.charYdata[dataIndex] = that.dom.convertFromPixel(
                  "grid",
                  this.position
                );
                that.$emit(
                  "activeChange",
                  that.charYdata[dataIndex][0],
                  that.charYdata[dataIndex][1] -
                    that.originalData[that.charYdata[dataIndex][0]][1]
                );
                console.log(
                  ": ",
                  that.charYdata[dataIndex][0],
                  (that.charYdata[dataIndex][1] -
                    that.originalData[that.charYdata[dataIndex][0]][1]) /
                    that.originalData[that.charYdata[dataIndex][0]][1]
                );

                that.dom.setOption({
                  series: [
                    {
                      id: "a",
                      data: that.charYdata,
                    },
                  ],
                });
                that.dom.resize();
              }, dataIndex),
            };
          }
        ),
      });
      // ...
    }, 1200);
  },
  methods: {
    initExample() {
      const chart1 = this.$refs.chart2;
      this.dom = this.$echarts.init(chart1);

      this.originalData = this.charYdata.slice();

      this.dom.setOption({
        title: {
          text: this.chartTitle,
          subtext: this.chartSubtext,
          x: "center",
        },
        grid: {
          left: 50,
          top: 40,
        },
        tooltip: {
          trigger: "axis",
        },
        // backgroundColor: "#f7f7fb",
        xAxis: {
          type: "category",
          axisLabel: {
            show: true,
            formatter(value) {
              return value; // 格式时间显示方式
            },
          },
          name: this.xName ? this.xName : "",
          axisLine: { onZero: false },
          data: this.charData,
        },
        yAxis: {
          type: "value",
          name: this.chartYname,
          axisLine: { onZero: false },
        },
        series: [
          {
            id: "a",
            type: "line",
            smooth: true,
            symbolSize: this.symbolSize, // 为了方便拖拽，把 symbolSize 尺寸设大了。
            data: this.charYdata,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: this.chartColor,
                },
              },
            },
            color: this.chartColor,
          },
        ],
      });
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
    // window.removeEventListener("resize", this.resizeHandler);
  },
};
</script>
<style lang="css" scoped>
</style>