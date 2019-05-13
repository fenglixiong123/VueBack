<template>
  <div id="app">
    <div class="header">
      <el-row>
        <el-col :span="24">
          <el-menu default-active="5" class="el-menu-demo"
                   mode="horizontal"
                   @select="handleSelect"
                   background-color="#545c64"
                   text-color="#fff"
                   active-text-color="#ffd04b">
            <el-menu-item index="1">高级插件</el-menu-item>
            <el-menu-item index="2"><a href="https://www.baidu.com" target="_blank">在线商城</a></el-menu-item>
            <el-submenu index="3">
              <template slot="title">客户管理</template>
              <el-menu-item index="3-1">华为</el-menu-item>
              <el-menu-item index="3-2">抖音</el-menu-item>
              <el-menu-item index="3-3">小米</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">系统设置</el-menu-item>
            <el-menu-item index="5">活动发布</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div style="position: relative;height: 60px;width: 100%;"></div>
    <el-row :gutter="20">
      <el-col :span="5">
        <!--左侧导航-->
        <div class="main-left">
        <el-menu default-active="/activePublic"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 :default-openeds="opens"
                 :router="true">
          <el-menu-item index="/activeHome">首页</el-menu-item>
          <el-menu-item index="/activePublic">活动发布</el-menu-item>
          <el-menu-item index="/activeManage">活动管理</el-menu-item>
          <el-menu-item index="/activeStatistic">活动统计</el-menu-item>
          <el-submenu index="/selfManage">
            <template slot="title">个人中心</template>
            <el-menu-item index="/selfSpace">
              <i class="el-icon-setting"></i>
              <span>个人空间</span>
            </el-menu-item>
            <el-submenu index="/selfProfile">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>个人资料</span>
              </template>
              <el-menu-item index="/selfInfo">
                <i class="el-icon-location"></i>
                <span>个人信息</span>
              </el-menu-item>
              <el-menu-item index="/selfResume">
                <i class="el-icon-location"></i>
                <span>个人简历</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="/modifyPassword">
              <i class="el-icon-location"></i>
              <span>修改密码</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="/docGuide">文档指南</el-menu-item>
          <el-menu-item index="/systemSet">系统设置</el-menu-item>
        </el-menu>
      </div>
      </el-col>
      <el-col :span="19">
        <!--右侧导航-->
        <div class="main-right">
          <router-view/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      opens:['/selfManage']
    }
  },
  methods:{
    handleSelect:function (key, keyPath) {
      console.log(key,keyPath)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {
    this.$router.push('/activePublic')
  }
}
</script>

<style scoped>
  body{margin: 0;}
  #app {
    min-width: 1200px;
    margin: 0 auto;
    font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
  }
  .header .el-menu-demo{
    padding-left: 300px;
  }
  a{
    text-decoration: none;
  }
  .main-right{
    width: 90%;
    height: 500px;
    padding: 20px;
    border: 1px solid grey;
  }
</style>
