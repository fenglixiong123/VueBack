<template>
  <div>
    Home
    <hr/>
    {{token}}
    <button @click="getUserInfo">获取用户信息</button>
    <button @click="logOut">退出</button>

  </div>
</template>

<script>

    export default {
      name: "Home",
      components: {},
      data(){
        return{
          token:''
        }
      },
      methods:{
        logOut:function () {
          console.log("logOut");
          this.$store.dispatch('user/logout').then(rep=>{
            this.$message.success("登出成功！");
            console.log(rep);
            this.$router.push('/login');
          });
        },
        getUserInfo:function () {
          console.log("getUserInfo");
          this.$store.dispatch('user/getInfo');
        }
      },
    }
</script>

<style scoped>

</style>
