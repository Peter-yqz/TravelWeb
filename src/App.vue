<template>
  <el-container class="container" direction="horizontal">
    <el-header class="mainheader" direction="vertical">
      <div>
        <span class="demonstration">
          <el-dropdown trigger="click">
            <el-button
              class="el-dropdown-link"
              type="text"
              style="color: black; font-size: 1.2em; margin-left: 0"
              >舆情大数据平台</el-button
            >
            <el-dropdown-menu slot="dropdown">
              <h class="members" style="margin: 5px"
                >黄玎 张金毅 郭怡霏 闫秦政 杨毓婕</h
              >
            </el-dropdown-menu>
          </el-dropdown>
        </span>
      </div>
    </el-header>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      :collapse="isCollapse"
    >
      <el-menu-item index="10" class="show_edge" direction="horizontal">
        <div class="show_edge">
          <el-tooltip
            class="item"
            effect="dark"
            content="隐藏"
            placement="right"
          >
            <div class="edge_btn" @click="hide_menu">
              <i
                class="el-icon-caret-left"
                @click="hide_menu"
                v-show="show_left_btn"
              >
              </i>
            </div>
          </el-tooltip>

          <el-tooltip
            class="item"
            effect="dark"
            content="显示"
            placement="right"
          >
            <div class="edge_btn" @click="show_menu">
              <i
                class="el-icon-caret-right"
                @click="show_menu"
                v-show="show_right_btn"
              >
              </i>
            </div>
          </el-tooltip>
        </div>
      </el-menu-item>

      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <span>主页</span>
        <!-- <template#title>主页</template> -->
      </el-menu-item>

      <el-submenu index="2" default-active="3">
        <template #title>
          <i class="el-icon-menu"></i>
          <span>项目实现</span>
        </template>
       
         <el-submenu index="3.1">
          <template #title>
            <!-- <i class="el-icon-menu"></i> -->
            <span>数据说明</span>
          </template>
          <el-menu-item index="3">变量说明</el-menu-item>
          <el-menu-item index="4.1">数据展示</el-menu-item>
        </el-submenu> 
        <el-menu-item index="5">與情热力图</el-menu-item>
         <el-menu-item index="6">固定效应模拟</el-menu-item>
      </el-submenu>

      
    </el-menu>

    <div class="main">
      <router-view />
    </div>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      searchCriteria: "",
      show_right_btn: false,
      show_left_btn: true,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      switch (key) {
        case "1":
          this.$router.push("/Homepage");
          this.breadcrumbItems = ["主页"];
          break;
        case "3":
          this.$router.push("/Page1");
          this.breadcrumbItems = ["数据回顾"];
          break;
        case "4.1":
          this.$router.push("/Page2");
          this.breadcrumbItems = ["景点收入"];
          break;
        case "4.2":
          this.$router.push("/Page21");
          this.breadcrumbItems = ["消费情况"];
          break;
        case "5":
          this.$router.push("/Page3");
          this.breadcrumbItems = ["舆情地图"];
          break;
        case "6":
          this.$router.push("/page4");
          this.breadcrumbItems = ["数据测试"];
          break;
        case "6":
          this.$router.push("/test");
          this.breadcrumbItems = ["测试"];
          break;
        case "7":
          this.$router.push("/eletest");
          this.breadcrumbItems = ["测"];
          break;
      }
    },
    hide_menu() {
      this.isCollapse = true;
      this.show_left_btn = false;
      this.show_right_btn = true;
    },
    show_menu() {
      this.isCollapse = false;
      this.show_left_btn = true;
      this.show_right_btn = false;
    },
  },
};
</script>

<style>
.container {
  height: 100%;
  margin: 0px;
  box-sizing: border-box;
}
.mainheader {
  position: fixed;
  top: 1vh;
  z-index: 10;
  text-align: center;
  height: 6vh !important;
}
.show_edge {
  text-align: center;
  /* width:50px; */
}

.edge_btn {
  /* width: 30px; */
  /* margin-left: 10px; */
  /* text-align:center */
}

.el-menu-vertical-demo {
  top: 10vh;
  min-height: 100vh;
  position: flex;
  float: left;
}

#v-content {
  position: flex;
  float: right;
}
.main {
  width: 100%;
  margin-top: 4vh;
}

.demonstration {
  padding-top: 5px;
  color: white;
}
</style>