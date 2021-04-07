<template>
<div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="padding:1vh">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Page1'}">数据回顾</el-breadcrumb-item>
        <el-breadcrumb-item>不同城市游客满意度情况表（季度）</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 style="text-align:center">
        不同城市游客满意度情况表（季度）
    </h1>
    <location-select style="padding:1vh"></location-select>
    <time-select style="padding:1vh"></time-select>
    <line-chart></line-chart>
</div>

</template>
<script>
import LineChart from '../Component/LineChart.vue'
import LocationSelect from '../Component/LocationSelect.vue'
import TimeSelect from '../Component/TimeSelect.vue'
export default {
    components:{
        LocationSelect,
        LineChart,
        TimeSelect
    }
}
</script>