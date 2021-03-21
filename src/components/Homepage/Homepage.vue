<template>
<div class="container">
    <h1 style="text-align: center ;color:white ;margin-bottom:10px ;line-height:50px">XXX数据统计可视化平台</h1>
    <el-row>
        <el-col>
            <el-carousel :interval="6000" indicator-position="inside" height="bannerHeight + 'px'" style="text-align:center">
            <el-carousel-item v-for="item in imagesbox" :key="item.id" >
            <img :src="item.idView" class="image">
            </el-carousel-item>
            </el-carousel>
        </el-col>
    </el-row>
    <el-row style="margin-top:25px">
        <el-col span="10">
            <h1 class="box1">项目进展</h1>
        </el-col>
        <el-col span="14" >
            <div class="block">
            <el-timeline>
            <el-timeline-item  v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
            {{activity.content}}
            </el-timeline-item>
            </el-timeline>
            </div>
        </el-col>
    </el-row>
    <el-row>
        <p style="text-align:center"><i class="el-icon-s-opportunity">这里还不知道写点什么</i></p>
        <p style="text-align:center"><i class="el-icon-s-opportunity">这里还不知道写点什么</i></p>
        <p style="text-align:center"><i class="el-icon-s-opportunity">这里还不知道写点什么</i></p>
        <p style="text-align:center"><i class="el-icon-s-opportunity">这里还不知道写点什么</i></p>
        <p style="text-align:center"><i class="el-icon-s-opportunity">这里还不知道写点什么</i></p>
        <p style="text-align:center"><i class="el-icon-s-opportunity">这里还不知道写点什么</i></p>
        <p style="text-align:center"><i class="el-icon-s-opportunity">这里还不知道写点什么</i></p>
    </el-row>
</div>
</template>

<script>
    export default {
        name: "Banner",
        data(){
            return {
                imagesbox:[
                    {id:0,idView:require("../../assets/p1.png")},      
                    {id:1,idView:require("../../assets/p2.png")},
                    {id:2,idView:require("../../assets/p3.png")}
                ],
                activities: [{
                    content: '项目立项',
                    timestamp: '2020-01'
                }, {
                    content: '立项通过初审',
                    timestamp: '2020-03'
                }, {
                    content: '创建成功',
                    timestamp: '2018-04-11'
                }],
                // 图片父容器高度
                bannerHeight :1000,
                // 浏览器宽度
                screenWidth :0,
            }
        },
        methods:{
            setSize:function () {
            // 通过浏览器宽度(图片宽度)计算高度
            this.bannerHeight = 400 / 1920 * this.screenWidth;
            },
        },
        mounted() {
            // 首次加载时,需要调用一次
            this.screenWidth =  window.innerWidth;
            this.setSize();
            // 窗口大小发生改变时,调用一次
            window.onresize = () =>{
            this.screenWidth =  window.innerWidth;
            this.setSize();
            }
        },
}
</script>

<style scoped>
.container{
    background-color: white;
    box-sizing: border-box;
}
.style1{
    border-radius: 4px;
    font: size 12px;;
    text-indent: 2em;
    margin: 10px;
    text-align: justify;
    line-height: 180%;
}
img{
    width: 60%;
    height: inherit;
    text-align: center;
}
.box1{
    text-align:right;
    margin-right: 20px;
    color: blanchedalmond;
}
</style>