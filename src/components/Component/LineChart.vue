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
        const option = {
          xAxis: {
        type: 'time',
        data: ['2010-03-01', '2010-06-01', '2010-09-01', '2010-12-01', '2011-03-01', 
        '2011-06-01', '2011-09-01', '2011-12-01', '2012-03-01', '2012-06-01', 
        '2012-09-01', '2012-12-01', 
        '2013-03-01', '2013-06-01', '2013-09-01', '2013-12-01', '2014-06-01',
         '2014-09-01', '2014-12-01', '2015-03-01', '2015-06-01'],
        // fontSize:1
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: ['79.03', '78.5', '79.72', '83.53', 
        '84.06', '81.95', '80.98', '81.61', '81.4',
         '82.3', '83.58', '83.65', '80.97', '75.28', 
         '76.44', '72.74', '71.72', '77.81', '79.45', 
         '77.78', '80.68'],
        type: 'bar'
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