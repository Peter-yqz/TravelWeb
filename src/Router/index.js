import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Homepage from '../components/Homepage/Homepage.vue'
import Page1 from '../components/Page1/Page1.vue'
import Page2 from '../components/Page2/Page2.vue'
import Page3 from '../components/Page3/Page3.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    routes:[{
        path: '/', 
        component: App,
        redirect:'/Homepage'
    },{
        path: '/Homepage', 
        component: Homepage
    },{
        path: '/Page1', 
        component: Page1
    },{
        path: '/Page2', 
        component: Page2
    },{
        path:'/Page3', 
        component: Page3
    }]
})
export default router;