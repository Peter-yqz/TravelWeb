<template>
   <div ref="chart" style="width:100%;height:376px"></div>
</template>
<script>
export default {
    name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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