<template>
  <div id="app">

    <el-container>
      <!--头部-->
      <el-header>
        <div class="flx-header">
          <el-menu default-active="5" class="el-menu-demo"
                   mode="horizontal"
                   @select="handleSelect"
                   background-color="#545c64"
                   text-color="#fff"
                   active-text-color="#ffd04b">
            <el-menu-item index="1">我们的时光</el-menu-item>
            <el-menu-item index="2"><a href="https://www.baidu.com" target="_blank">以及回忆</a></el-menu-item>
            <el-submenu index="3">
              <template slot="title">每一天</template>
              <el-menu-item index="3-1">华为</el-menu-item>
              <el-menu-item index="3-2">抖音</el-menu-item>
              <el-menu-item index="3-3">小米</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">全部都是</el-menu-item>
            <el-menu-item index="5">开开心心</el-menu-item>
            <div style="float: left;margin-left: 300px;margin-top: 15px "><el-button type="danger" size="mini" @click="logOut">退出</el-button></div>
          </el-menu>
        </div>
      </el-header>
      <br/>
      <!--中间-->
      <el-container>
        <el-aside width="240px">
          <div class="flx-main-left">
            <el-menu default-active="/home/house"
                     class="el-menu-vertical-demo"
                     @open="handleOpen"
                     @close="handleClose"
                     background-color="#545c64"
                     text-color="#fff"
                     active-text-color="#ffd04b"
                     :default-openeds="opens"
                     :router="true">
              <el-menu-item index="/home/house">首页</el-menu-item>
              <el-menu-item index="/home/time">时光</el-menu-item>
              <el-menu-item index="/home/admin">用户</el-menu-item>
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
              <el-menu-item index="/home/guide">文档指南</el-menu-item>
              <el-menu-item index="/home/setting">系统设置</el-menu-item>
            </el-menu>
          </div>
        </el-aside>
        <el-main>
          <div class="flx-main-right">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
      <!--尾部-->
      <el-footer>
        <div class="flx-footer">
          版权所有@2015-2019 all right reserved
        </div>
      </el-footer>
    </el-container>

  </div>
</template>

<script>
  export default {
    name: 'index',
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
      },
      logOut:function () {
        console.log("logOut");
        this.$store.dispatch('auth/logout').then(rep=>{
          this.$message.success("登出成功！");
          console.log(rep);
          this.$router.push('/login');
        });
      }
    }
  }
</script>

<style scoped>
  body{margin: 0;}

  .flx-header .el-menu-demo{
    width: 100%;
    padding-left: 300px;
  }
  a{
    text-decoration: none;
  }
  .flx-main-left{
    margin-left: 20px;
  }
  .flx-main-right{
    width: 90%;
    height: 500px;
    padding: 20px;
    border: 1px solid grey;
  }
  .flx-footer{
    text-align: center;
    line-height: 60px;
    margin-top: 20px;
    width:100%;
    height: 60px;
    background-color: #545c64;
    /*border:1px solid blue;*/
  }
  .back-color{
    background:linear-gradient(#9ed128 0%,#358b98 80%);
    opacity: 0.8;
  }
</style>
