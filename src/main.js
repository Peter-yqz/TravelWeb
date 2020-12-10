import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'

Vue.component('chart', ECharts)
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
