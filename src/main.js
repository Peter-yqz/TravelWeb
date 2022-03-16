import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
// import echarts from 'echarts'
import BaiduMap from 'vue-baidu-map'
// import 'echarts/theme/dark'
import * as echarts from 'echarts';
import axios from 'axios'
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios //前后端分离组件
axios.defaults.baseURL = '/api'  //关键代码
// Vue.prototype.$echarts = echarts
// Vue.component('chart', ECharts)
Vue.use(ElementUI)
Vue.use(BaiduMap,{ak:'aGwCmimyisgROGpCGqWik4S2C9aQwEpp'})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
