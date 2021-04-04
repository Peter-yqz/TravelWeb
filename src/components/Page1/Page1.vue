<template>
    <el-container class="HGcontainer">
        <el-header class="HGheader">
            <el-breadcrumb separator-class="el-icon-arrow-right" style="padding:1vh">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>数据回顾</el-breadcrumb-item>
            </el-breadcrumb>
            <h1>旅游相关大数据回顾</h1>
            <p class="HGLabel">注：本页面数据来源均购自CSMAR平台，仅限项目研究参考</p>
            <h2>数据说明：</h2>
            <p class="HG">当前数据包括：不同城市游客满意度情况表（季度）、饭店出租情况表（月度）、分省份星级饭店经营情况统计表（季度）
                、国内旅游基本情况统计（季度）、旅行社基本信息统计（年度）、旅游景区基本情况统计（年度）、旅游业从业人数统计（年度）、
                主要城市黄金周基本情况统计（年度）、主要城市星级饭店经营情况统计表（季度）等。
            </p>
        <el-row style="text-align:center;padding:1vh">
            <el-col :span="12">
            <router-link to="/Page1-1">
            <el-button>不同城市游客满意度情况表（季度）</el-button>
            </router-link>
            </el-col>
            <el-col :span="12">
            <router-link to="/Page1-2">
            <el-button>饭店出租情况表（月度）</el-button>
            </router-link>
            </el-col>
        </el-row>
        <el-row style="text-align:center;padding:1vh">
            <el-col :span="12">
            <router-link to="/Page1-3">
            <el-button>分省份星级饭店经营情况统计表（季度）</el-button>
            </router-link>
            </el-col>
            <el-col :span="12">
            <router-link to="/Page1-4">
            <el-button>国内旅游基本情况统计（季度）</el-button>
            </router-link>
            </el-col>
        </el-row>
        </el-header>
    </el-container>
</template>

<style scoped>
.HGheader h1{
    text-align: center;
    font-size: 2.1em;
    padding-top: 2vh;
    /* color: white; */
}
.HGLabel{
    text-align: center;
    font-size: 0.7em;
    padding: 1vh;
    /* color: white; */
}
.HGheader h2{
    padding: 1vh;
    /* color: white; */
}
.HG{
    font-size: 1.3em;
    text-indent:2em;
    line-height:150%;
    /* color: white; */
}
</style>