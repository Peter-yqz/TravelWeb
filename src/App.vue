<template>
  <el-container>
  <el-header class="mainheader">
            <span class="demonstration" style="float:left;padding-top:5px;color:white">
                <el-breadcrumb separator="" style="margin-top:15px !importent">
                  <el-breadcrumb-item>
                    <router-link to="/Homepage">
                    <el-button type="text" icon="el-icon-s-home" @select="handleSelect">Homepage</el-button>
                    </router-link>
                  </el-breadcrumb-item>
                  <el-breadcrumb-item>
                    <el-dropdown trigger="click">
                  <span class="el-dropdown-link" style="color:white">
                    <el-button type="text" icon="el-icon-menu">
                      menu<i class="el-icon-caret-bottom el-icon--right"></i>
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
                    <el-button type="text" icon="el-icon-info">About</el-button>
                    </router-link>
                  </el-breadcrumb-item>
                </el-breadcrumb>
            </span>
            <!-- <span class="demonstration" style="float:right;padding-top:10px;margin-right:1%">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link" style="color:white">
                    <i class="el-icon-user-solid"></i>admin<i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </span> -->
  </el-header>
  <!-- <el-main>
    <router-view></router-view>
  </el-main> -->
  <div id="v-content" v-bind:style="{minHeight: Height+'px'}"><router-view /></div>
  <el-footer></el-footer>
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
    }
    
  }
}
</script>
<style>
.el-container {
  display: flex;
  height:100%;
  margin:0;
  box-sizing: border-box;
}
.mainheader {
    background-color: #1c67c9;
    color: rgb(88, 87, 87);
    text-align: center;
    height: 50px !important;
}
.el-footer {
  background-color: bisque;
  height: 30px !important;
}
</style>