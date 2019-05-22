<template>
  <div class="login-container">
    <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left"
             label-width="0px"
             class="card-box login-form">
      <h3 class="title">登录</h3>
      <el-form-item prop="name">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user"/>
        </span>
        <el-input name="name" disabled type="text" v-model="loginForm.name" autoComplete="on"
                  placeholder="用户名"/>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"></svg-icon>
        </span>
        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password"
                  autoComplete="on"
                  placeholder="密码"></el-input>
        <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye"/></span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
      name: "index",
      data(){
        return{

        }
      }
    }
</script>

<style scoped>

</style>
