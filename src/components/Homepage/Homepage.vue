<template>
  <el-container class="second-container">
    <div>
      <div style="color: black">
        <div class="title">
          <h1 class="title-c">南开大学旅游舆情大数据分析平台</h1>
          <img class="cover-img" src="../../assets/cover.png" alt="cover"/>
        </div>
        <div class="main-container">
        <h2>ᐉ 项目简介</h2>
        <p>
          党的十九大报告强调“数字中国建设成为我国未来蓝图的重要组成部分,已上升为国家战略”。
        </p>
        <p>
          在以整个中国作为对象的数字地球技术体系中，通过大数据科学系统测量信息热度与热点区域旅游互动态势，能清楚预测区域旅游经济效益变化规律。据此，本课题结合往年数据验证区域舆情热度、信息热点与目的地旅游效益的关系，研究舆情热度、信息热点对该地区旅游效益变化程度的影响，建立舆情热度、信息热点对各省份旅游业的影响度模型，验证信息热度和热点对当地旅游业的影响程度。本研究通过计算机模拟实现模型可视化，实时动态测量不同舆情热度下的区域旅游情况，完成人工智能模拟动态干预下的舆情变化对当地旅游的预测。
        </p>
        <h3>科学意义：</h3>
        <p>
          揭示了在动态数据与人工智能支持下的信息热度与旅游行为的互动影响机理，进一步探索了地区旅游事件与旅游经济的关系。
        </p>
        <h3>应用前景：</h3>
        <p>
          研究成果能够有效推动舆情信息与相关企事业单位的数据整合，为政府和企业利用舆情、信息数据提供参考，提升旅游业管理和决策水平，进一步创造经济效益。课题的研究不仅响应“建设网络强国、数字中国、智慧社会”战略部署，也是统筹考虑数字化对区域旅游带来的全方位影响，从战略高度谋划数字中国的实践应用。
        </p>
        <h2>ᐉ 功能说明</h2>
        <h3>1. 显示與情数据对经济效应的影响</h3>
        <p>
          根据本研究得出的舆情数据对区域旅游人数和国内旅游收入的计量模型，测算得出网络舆情对于旅游效益的影响程度，并通过实时监控舆情，预测舆情对区域旅游可能带来的经济影响。
        </p>
        <p>
          通过网页数据的动态回顾，让用户能更加简单直观地看到近年来的数据变化
        </p>
        <h3>2. 固定效应模拟沙盘</h3>
        <p>
          本研究的实证论文中，使用固定效应模型，由于不同省份的经济发展情况、旅游资源丰富程度、地区宣传投入等方面存在很高的异质性，这会在很大程度上影响游客数量和国内旅游收入，而加入省份固定效应可以在一定程度上解决由于无法测度的省份特性造成的遗漏变量问题，使得对于舆情影响的估计更为准确
        </p>
        <p>
          具体网页体现上，我们总结了总计12条回归公司，分为4个不同的变量，包括一个自变量三个控制变量，通过动态图表的形式让数据实现动态的可视化，同时能够让它自由调节，更加简单直观地看到数据随回归因子的变化而改变
        </p>
        <h3>3. 及时與情热力图</h3>
        <p>
          即时监控网络舆情，并将网络旅游舆情数据可视化，让各省份的舆情情况展现得更为直观。当舆情热度到达一定阈值，能够有效进行预警，提醒各省份政府、旅游公司和景区等及时做好舆情应对。
        </p>
        <p>
          在网页上构建的动态舆情热力图，能根据鼠标选择不同的年份而对不同数据进行动态查看
        </p>
        <h2>ᐉ 成果展示</h2>
        <div style="text-align: center">
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
    </div>
  </el-container>
</template>


<style scoped>
.second-container {
  box-sizing: border-box;
  /* margin-left: 3vh; */
  text-align: justify;
}
.second-container h1 {
  text-align: center;
  font-size: 2.1em;
  padding: 2vh;
  /* color: white; */
}
.second-container h2 {
  padding: 1vh;
  /* color: white; */
}
.second-container p {
  font-size: 1.3em;
  text-indent: 2em;
  /* line-height:150%; */
  /* color: white; */
}
.main-container{
    margin-left: 1.5vw;
    margin-right: 1.5vw;
}
.el-button {
  margin: 2vh;
}
.title {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding-right: 120px;
  /* padding-top: 30px; */
  align-items: center;
  background-color: #f7f7fb;
}
.title-c{
    display: inline;
}
.cover-img{
    width: 15%;
}
</style>