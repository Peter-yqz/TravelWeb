<template>
  <el-container>
  <el-header class="mainheader" :class="{'hasfixed':needFixed ==true}">
            <span class="demonstration" style="float:left;padding-top:5px;color:white">
                <el-breadcrumb separator="" style="margin-top:15px !importent">
                  <el-breadcrumb-item>
                    <router-link to="/Homepage">
                    <el-button type="text" icon="el-icon-s-home" @select="handleSelect">主页</el-button>
                    </router-link>
                  </el-breadcrumb-item>
                  <el-breadcrumb-item>
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
                  </el-breadcrumb-item>
                  <el-breadcrumb-item>
                    <router-link to="/About">
                    <el-button type="text" icon="el-icon-info">关于我们</el-button>
                    </router-link>
                  </el-breadcrumb-item>
                </el-breadcrumb>
            </span>
    </el-header>
    <el-row class="tac">
  <el-col :span="12">
    <h5>默认颜色</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="12">
    <h5>自定义颜色</h5>
    <el-menu
      :uniqueOpened="true"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
      <el-submenu index="5">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="5-1">选项1</el-menu-item>
          <el-menu-item index="5-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="5-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
  <div id="v-content" v-bind:style="{minHeight: Height+'px'}"><router-view /></div>
  <el-footer>
    Copyright © 2021 XXX大数据平台 All Rights Reserved. 备案号：XXXX备xxxxxx号
  </el-footer>
  </el-container>
</template>

<script>
export default {
    data(){
    return {
    searchCriteria: '',
    breadcrumbItems: ['数据可视化一'],
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
      this.$router.push('/Page1');
      this.breadcrumbItems  = ['数据可视化一']
      break;
      case '2':
      this.$router.push('/Page2')
      this.breadcrumbItems  = ['数据可视化二']
      break;
      case '3':
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
    background-color: #171A21;
    text-align: center;
    height: 50px !important;
}
.el-footer {
  background-color:#171A21;
  color: #969EAB;
  text-align: center;
  height: 20px !important;
}
.hasFixed {
  position: fixed;
  top: 0%;
  right: 0%;
  left: 0%;
}
</style>