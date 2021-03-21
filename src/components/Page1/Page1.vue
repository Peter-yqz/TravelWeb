<template>
    <el-container>
        <p style="text-align:center">上面这块可以对这个可视化方法进行一个简介</p>
    <el-row>
        <el-col :span="10" style="background-color:rgb(0, 153, 255);padding-left:10px">
          <el-transfer v-model="value" :data="data"></el-transfer>
        </el-col>
        <el-col :span="14" style="background-color:rgb(0, 255, 255)">
            <p>这里是可视化窗口，例如：</p>
            <div ref="chart" style="width:100%;height:376px"></div>
        </el-col>
    </el-row>
    </el-container>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            // disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [1, 4]
      };
    },
    mounted(){
    this.getEchartData()  
    },
   methods: {
    getEchartData() {
      const chart = this.$refs.chart
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]}
        myChart.setOption(option)
        window.addEventListener("resize", function() {
          myChart.resize()
        })
      }
       this.$on('hook:destroyed',()=>{
         window.removeEventListener("resize", function() {
          myChart.resize();
        });
        })
    }
  }
    }
</script>

<style scoped>
.el-container{
  background-color: white;
  }
</style>