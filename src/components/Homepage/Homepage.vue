<template>
<el-container class="second-container">
<div>
    <div style="color:black;line-height:150%">
        <h1>南开大学国创旅游舆情大数据项目</h1>
            <h2>项目简介</h2>
                <p>党的十九大报告强调“数字中国建设成为我国未来蓝图的重要组成部分,已上升为国家战略”。</p>
                <p>在以整个中国作为对象的数字地球技术体系中，通过大数据科学系统测量信息热度与热点区域旅游互动态势，能清楚预测区域旅游经济效益变化规律。据此，本课题结合往年数据验证区域舆情热度、信息热点与目的地旅游效益的关系，研究舆情热度、信息热点对该地区旅游效益变化程度的影响，建立舆情热度、信息热点对当地旅游业的影响度模型，验证信息热度和热点对当地旅游业的影响程度；通过计算机模拟实现模型可视化，实时动态测量不同舆情热度下的区域旅游情况，完成人工智能模拟动态干预下的舆情变化对当地旅游的预测。</p>
                <p>科学意义：揭示了动态数据与人工智能下的信息热度与旅游行为的互动影响机理，这是对信息理论和数学经济理论的进一步探索。</p>
                <p>应用前景：研究成果能够有效推动舆情信息与相关企事业单位的数据整合，为政府和企业利用舆情、信息数据提升旅游业管理和决策水平，进一步创造经济效益。课题的研究不仅响应“建设网络强国、数字中国、智慧社会战略部署”，也是统筹考虑数字化对区域旅游带来的全方位影响，从战略高度谋划数字中国的实践应用。</p>
            <h2>项目进展</h2>
                <p>到中期为止，我们如期完成了计划中的数据准备、理论梳理、数据的筛选和清洗、NLP算法的学习和实现及系统设计初稿等流程；获得了理论模型、Bert模型和网站设计等阶段性成果，项目进展按计划进行。当然，在这其中我们也遇到了许多挑战，比如Bert模型准确率偏低，数据质量偏低，网站设计开发经验不足且可供参考案例较少等，其中的大部分已经通过努力得以解决，相信经过不懈努力，一定会得到有价值的模型成果。</p>
            <h2>成果展示</h2>
        <div style="text-align:center">
            <router-link to="/Page1">
            <el-button>数据回顾</el-button>
            </router-link>
            <router-link to="/Page2">
            <el-button>模型展示</el-button>
            </router-link>
            <router-link to="/Page3">
            <el-button>舆情地图</el-button>
            </router-link>
        </div>
    </div>
</div>
</el-container>
</template>


<style scoped>
.second-container{
    box-sizing: border-box;
    margin-left:3vh;
    text-align:justify;
}
.second-container h1{
    text-align: center;
    font-size: 2.1em;
    padding: 2vh;
    /* color: white; */
}
.second-container h2{
    padding: 1vh;
    /* color: white; */
}
.second-container p{
    font-size: 1.3em;
    text-indent:2em;
    line-height:150%;
    /* color: white; */
}
.el-button{
    margin: 2vh;
}
</style>