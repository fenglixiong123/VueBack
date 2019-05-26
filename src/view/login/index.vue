<template>
  <div class="container">
    <el-form label-position="right" label-width="80px" :model="loginForm">

      <h3>Login Form</h3>

      <el-form-item label="用户名">
        <el-input ref="username" type="text" v-model="loginForm.username" placeholder="Username"/>
      </el-form-item>

      <el-form-item label="密码">
        <el-input ref="password" type="password" v-model="loginForm.password" placeholder="Password" auto-complete="off" @keyup.enter.native="handleLogin"/>
      </el-form-item>

      <el-button type="primary"  @click.native.prevent="handleLogin">Login</el-button>

    </el-form>

  </div>
</template>

<script>

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
            this.$message.error("请填写用户名");
            return;
          }
          if(!this.loginForm.password){
            this.$message.error("请填写密码");
            return;
          }
          this.$store.dispatch('auth/login', this.loginForm)
            .then((res) => {
              console.log(res);
              this.$message.success("恭喜你，登录成功！");
              console.log("login success");
              this.$router.push("/home/house");
              console.log("获取用户信息...");
              this.$store.dispatch('auth/getInfo');
            })
            .catch((err) => {
              console.log("登录请求出错：",err)
            })
        }
      }
    }
</script>

<style scoped>
.container{
  padding: 20px;
  border: solid 1px #374180;
  text-align: center;
  margin: 0 auto;
  width: 30%;
}
</style>
