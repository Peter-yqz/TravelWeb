<template>
<el-container>
<div class="container">
    <p style="text-indent:2em">党的十九大报告强调“数字中国建设成为我国未来蓝图的重要组成部分,已上升为国家战略”。在以整个中国作为对象的数字地球技术体系中，通过大数据科学系统测量信息热度与热点区域旅游互动态势，能清楚预测区域旅游经济效益变化规律。
据此，本课题结合往年数据验证区域舆情热度、信息热点与目的地旅游效益的关系，研究舆情热度、信息热点对该地区旅游效益变化程度的影响，建立舆情热度、信息热点对当地旅游业的影
响度模型，验证信息热度和热点对当地旅游业的影响程度；通过计算机模拟实现模型可视化，实时动态测量不同舆情热度下的区域旅游情况，完成人工智能模拟动态干预下的舆情变化对当地旅
游的预测。
科学意义：揭示了动态数据与人工智能下的信息热度与旅游行为的互动影响机理，这是对信息
理论和数学经济理论的进一步探索。
应用前景：研究成果能够有效推动舆情信息与相关企事业单位的数据整合，为政府和企业利用
舆情、信息数据提升旅游业管理和决策水平，进一步创造经济效益。
课题的研究不仅响应“建设网络强国、数字中国、智慧社会战略部署”，也是统筹考虑数字化
对区域旅游带来的全方位影响，从战略高度谋划数字中国的实践应用。</p>
</div>
</el-container>
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
    margin: 20px;
    margin-top: 60px;
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