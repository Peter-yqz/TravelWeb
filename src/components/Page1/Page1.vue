<template>
  <el-container class="HGcontainer">
    <!-- <el-breadcrumb separator-class="el-icon-arrow-right" style="padding: 1vh">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>数据回顾</el-breadcrumb-item>
      </el-breadcrumb> -->

    <!-- <p class="HGLabel">注：本页面数据来源均购自CSMAR平台，仅限项目研究参考</p> -->
    <h1 class="title">变量解释和数据来源</h1>
    <h2>ᐉ 因变量</h2>
    <p class="HG">
      旅游人数和旅游总收入是游客对旅游目的地形象感知和在其产生的消费行为的直观体现，也是旅游效益的重要指标。本文从地区旅游人数和地区旅游总收入两个维度的变化刻画当地旅游经济效益受到的影响。由于本文涉及的舆情平台为新浪微博，主要面向国内用户，可以忽略其对于境外游客的影响，因此取目的地国内旅游人数（以下称“目的地旅游人数”）和国内旅游总收入（以下称“目的地旅游总收入”）为因变量进行分析。旅游数据来源于《中国旅游统计年鉴》。
    </p>
    <h2>ᐉ 核心解释变量</h2>
    <p class="HG">
      本文的核心解释变量是微博舆情热度指标，王来华（2003）对舆情进行了划分和界定，网络舆情定义为通过互联网表达和传播的（刘毅，2007）含有情绪、态度、意愿、观点或行为倾向的信息（方付建，2001）。因此，我们选用微博中的点赞数、评论数和转发数作为舆情热度的基本指标，用于考察纯热度对于目的地旅游经济效益的影响；以微博的情感倾向作为舆情的正负，梳理出正负舆情微博的转发、评论、点赞数之差（如正负），用于考察考虑正负舆情的热度指标对于目的地旅游经济效益的影响。
      相关微博通过布置网络爬虫在新浪微博获取后，借助python中的jieba库等进行分词，再通过预训练的Bert模型进行文本情感分析，获得对应地点的微博舆情数据指标。
    </p>
    <h2>ᐉ 控制变量</h2>
    <p class="HG">
      由于同时涉及经济效益和网络舆情，本文通过加入以下变量来控制地区和年份的各项基本特征：①地区国内生产总值（gdp），以目的所在省份为单位按年测算，衡量地区经济发达程度，往往地区越发达基础设施越完备并且对于地区宣传的投资力度越大，会对舆情热度产生很大的影响；②互联网普及率（ip），以目的地所在省份为单位按年测算，衡量地区网络发达程度，能刻画出当地的企业级微博以及网民在网络活跃度，体现了在线旅游信息体量；③消费者价格指数（cpi），以目的地所在省份为单位按年测算，衡量地区物价水平，会对旅客在当地的消费活动产生直接影响，往往消费者价格指数越高的地区物价越高，旅游消费也会随之增加。
    </p>
    <h2></h2>
    <div class="equation">
      <img class="equation-img" src="./img/table1.png" alt="公式" />
    </div>
    <h2></h2>
    <div class="equation">
      <img class="equation-img" src="./img/table2.png" alt="公式" />
    </div>
  </el-container>
</template>

<style scoped>
.HGcontainer {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 30px;
  margin-right: 30px;
}
.title{
    font-size: 1.8rem;
    font-weight: bold;

}
.HG {
  /* margin-left: 30px; */
  font-size: 18px;
}
.equation {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
}
</style>