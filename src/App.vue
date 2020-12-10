<template>
  <el-container style="height:100%;padding:0;margin:0;width:100%">
  <el-header>
  <div class="App">
    <div style="background-color: #EBEBEB;min-height:800px">
        <div style="width:100%;background-color: #636363; overflow: hidden">
            <span class="demonstration" style="float:left;padding-top:10px;color:white;margin-left:1%">
                <el-breadcrumb separator-class="el-icon-arrow-right">
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
            <span class="demonstration" style="float:right;padding-top:10px;margin-right:1%">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link" style="color:white">
                    <i class="el-icon-user-solid"></i>admin<i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </span>
        </div>
    </div>
  </div>
  </el-header>
  <el-main>
    <router-view></router-view>
  </el-main>
  <el-footer>Footer</el-footer>
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