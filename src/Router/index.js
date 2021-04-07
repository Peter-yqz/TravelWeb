import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Homepage from '../components/Homepage/Homepage.vue'
import Page1 from '../components/Page1/Page1.vue'
import Page2 from '../components/Page2/Page2.vue'
import Page3 from '../components/Page3/Page3.vue'
import Page4 from '../components/Page1/Page1-1.vue'
import Page5 from '../components/Page1/Page1-2.vue'
import Page6 from '../components/Page1/Page1-3.vue'
import Page7 from '../components/Page1/Page1-4.vue'
import test from '../components/test.vue'
import test1 from '../components/test1.vue'
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
    },{
        path: '/Page1-1', 
        component: Page4
    },{
        path: '/Page1-2', 
        component: Page5
    },{
        path: '/Page1-3', 
        component: Page6
    },{
        path: '/Page1-4', 
        component: Page7
    },
    {
        path: '/test', 
        component: test
    },
    {
        path: '/test1', 
        component: test1
    }

]
})
export default router;