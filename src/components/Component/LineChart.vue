<template>
<div>
  <el-row>
  <div ref="chart" style="width:100%;height:376px"></div>
  </el-row>
</div>
</template>
<script>
export default {
    name: 'hello',
  data () {
    return {
    }
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
        data: ['北京', '天津', '上海', '广东', '河北', '山西', '福建']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [1820, 932, 1901, 934, 290, 130, 320],
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