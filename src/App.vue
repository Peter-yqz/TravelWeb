<template>
  <el-container>
  <el-header class="mainheader" >
            <span class="demonstration" style="float:left;padding-top:5px;color:white">
                <el-breadcrumb separator="" style="margin-top:15px !importent">
                  <el-breadcrumb-item>
                    <el-button type="text">
                    国创旅游舆情大数据小组
                    </el-button>
                  </el-breadcrumb-item>
                  <!-- <el-breadcrumb-item>
                    <el-dropdown trigger="click">
                  <span class="el-dropdown-link" style="color:white">
                    <el-button type="text" icon="el-icon-menu">
                      项目<i class="el-icon-caret-bottom el-icon--right"></i>
                    </el-button>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:80px" @select="handleSelect">
                            <el-menu-item index="1"><i class="el-icon-message"></i>数据可视化1</el-menu-item>
                            <el-menu-item index="2"><i class="el-icon-menu"></i>数据可视化2</el-menu-item>                            
                            <el-menu-item index="3"><i class="el-icon-setting"></i>数据可视化3</el-menu-item>
                        </el-menu>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                  </el-breadcrumb-item> -->
                  <el-breadcrumb-item style="margin-left:10px">
                    <el-dropdown trigger="click">
                    <el-button  class="el-dropdown-link" type="text" icon="el-icon-info">小组成员</el-button>
                    <el-dropdown-menu slot="dropdown">
                      <h style="margin:5px">黄玎 张金毅 郭怡霏 闫秦政 杨毓婕</h>
                    </el-dropdown-menu>
                    </el-dropdown>
                  </el-breadcrumb-item>
                </el-breadcrumb>
            </span>
    </el-header>
  <el-row class="tac">
  <el-col  span="4" style="height:100%">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect">
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;height:100%">
      <el-radio-button :label="false"><i class="el-icon-s-unfold"></i></el-radio-button>
      <el-radio-button :label="true"><i class="el-icon-s-fold"></i></el-radio-button>
      </el-radio-group> -->
      <el-menu-item index="1">        
        <i class="el-icon-s-home"></i>
        <!-- <router-link to="/Homepage"> -->
        <template#title>主页</template>
        <!-- </router-link> -->
      </el-menu-item>
      <el-submenu index="2" default-active="3" >
        <template #title>
          <i class="el-icon-menu"></i>
          <span>项目实现</span>
        </template>
          <el-menu-item index="3" >数据回顾</el-menu-item>
          <el-menu-item index="4" >数据可视化二</el-menu-item>
          <el-menu-item index="5" >数据可视化三</el-menu-item>
      </el-submenu>
      <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
    </el-menu>
  </el-col>
  <el-col   style="top: 80px"span="20" id="v-content" v-bind:style="{minHeight: Height+'px'}"><router-view /></el-col>
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
      this.breadcrumbItems  = ['数据可视化二']
      break;
      case '5':
      this.$router.push('/Page3')
      this.breadcrumbItems  = ['数据可视化三']
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
.el-container {
  display: flex;
  background-color: #FAFAFA;
  height:100%;
  margin:0px;
  box-sizing: border-box;
}
.mainheader {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    background-color: #4749bb;
    text-align: center;
    height: 50px !important;
}
.el-footer {
  background-color:#4749bb;
  color: #969EAB;
  text-align: center;
  height: 20px !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    top: 50px;
    min-height: 100%;
  }
</style>