<template>
  <el-container class="container">
  <el-header class="mainheader" >
            <span class="demonstration" style="float:left;padding-top:5px;color:white">
                    <el-dropdown trigger="click">
                    <el-button  class="el-dropdown-link" type="text" style="color:black;font-size:1.2em;margin-left:0">国创旅游舆情大数据小组</el-button>
                    <el-dropdown-menu slot="dropdown">
                      <h class="members" style="margin:5px">黄玎 张金毅 郭怡霏 闫秦政 杨毓婕</h>
                    </el-dropdown-menu>
                    </el-dropdown>
            </span>
    </el-header>
  <el-row class="tac">
  <el-col :span="4" style="height:100%;blackground:rgba:(255, 255, 255, 0.158)">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect">
      <el-menu-item index="1">        
        <i class="el-icon-s-home"></i>
        <template#title>主页</template>
      </el-menu-item>
      <el-submenu index="2" default-active="3" >
        <template #title>
          <i class="el-icon-menu"></i>
          <span>项目实现</span>
        </template>
          <el-menu-item index="3" >数据回顾</el-menu-item>
          <el-menu-item index="4" >模型展示</el-menu-item>
          <el-menu-item index="5" >舆情地图</el-menu-item>
      </el-submenu>
      <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <template #title>数据测试</template>
      </el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="20" style="margin-top:6vh;margin-left:27vh;min-height:91vh" id="v-content" v-bind:style="{minHeight: Height+'px'}"><router-view />
  </el-col>
</el-row>
  
  <el-footer>
    更多功能正持续更新中，敬请期待！
  </el-footer>
  </el-container>
</template>

<script>
export default {
    data(){
    return {
    isCollapse: false,
    searchCriteria: '',
    }
    },
    mounted(){
    //动态设置内容高度 让footer始终居底   header+footer的高度是100
    this.Height = document.documentElement.clientHeight - 100;  　　//监听浏览器窗口变化　
    window.onresize = ()=> {this.Height = document.documentElement.clientHeight -100}
  },
  methods:{
    handleSelect(key, keyPath){
      switch(key){
      case '1':
      this.$router.push('/Homepage');
      this.breadcrumbItems  = ['主页']
      break;
      case '3':
      this.$router.push('/Page1');
      this.breadcrumbItems  = ['数据回顾']
      break;
      case '4':
      this.$router.push('/Page2')
      this.breadcrumbItems  = ['模型展示']
      break;
      case '5':
      this.$router.push('/Page3')
      this.breadcrumbItems  = ['舆情地图']
      break;
      case '6':
      this.$router.push('/test1')
      this.breadcrumbItems  = ['数据测试']
      break;
      }
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
    
  }
</script>

<style>
.container {
  display: flex;
  /* background:  */
  /* linear-gradient(
267.77deg,rgb(65, 155, 173)0%,rgb(64, 100, 185)50%,rgb(88, 46, 141)100%); */
  /* background: linear-gradient(to right, #d680b6, #767aaf); */
  height:100%;
  margin:0px;
  box-sizing: border-box;
}
.mainheader {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    /* background-color: rgba(255, 255, 255, 0.158); */
    text-align: center;
    height: 6vh !important;
}
.el-footer {
  /* background-color:#4749bb; */
  /* color: #969EAB; */
  text-align: center;
  height: 3vh !important;
  margin-left: 27vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    top: 6vh;
    min-height: 100vh;
    width: 27vh;
    position:fixed;
    /* background: rgba(255, 255, 255, 0.158); */
  }
</style>