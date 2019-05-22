<template>
  <div class="login-container">
    <el-form ref="loginForm" class="login-form" :model="loginForm" auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          用户名
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      
        <el-form-item prop="password">
          <span class="svg-container">
            密码
          </span>
          <el-input
            ref="password"
            v-model="loginForm.password"
            type="password"
            placeholder="Password"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />
        </el-form-item>
      

      <el-button type="primary"  @click.native.prevent="handleLogin">Login</el-button>


    </el-form>

  </div>
</template>

<script>
  import {alertErrorMsg,alertSuccessMsg} from 'utils/message'
    export default {
      name: "index",
      data(){
        return{
          loginForm: {
            username: '',
            password: ''
          },
        }
      },
      mounted() {
        if (this.loginForm.username === '') {
          this.$refs.username.focus()
        } else if (this.loginForm.password === '') {
          this.$refs.password.focus()
        }
      },
      methods:{
        handleLogin:function () {
          if(!this.loginForm.username){
            alertErrorMsg("请填写用户名");
            return;
          }
          if(!this.loginForm.password){
            alertErrorMsg("请填写密码");
            return;
          }
          this.$store.dispatch('user/login', this.loginForm)
            .then((res) => {
              console.log(res);
              if(res.code===200){
                alertSuccessMsg("恭喜您，登录成功！");
                console.log("login success");
                this.$router.push("/home")
              }else {
                console.log("login error");
              }
            })
            .catch((err) => {
              console.log("登录请求出错：",err)
            })
        }
      }
    }
</script>

<style scoped>

</style>
