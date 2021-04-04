import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import echarts from 'echarts'
import BaiduMap from 'vue-baidu-map'
import 'echarts/theme/dark'
import axios from 'axios'
Vue.prototype.$axios = axios //前后端分离组件
axios.defaults.baseURL = 'http://8.131.237.67:8010/'  //关键代码
Vue.prototype.$echarts = echarts
Vue.component('chart', ECharts)
Vue.use(ElementUI)
Vue.use(BaiduMap,{ak:'aGwCmimyisgROGpCGqWik4S2C9aQwEpp'})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
