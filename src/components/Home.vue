<template>
  <div>
    Home
    <hr/>
    {{token}}
    <button @click="clickForToken">请求Token</button>
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
        clickForToken:function () {
          let url = '/adminApi/console/admin/loginByUsername';
          this.$axios.post(url,{
            username:'admin',
            password:'admin123'
          }).then(res=>{
            this.token = res.data.data;
            console.log(res.data.data);
          }).catch(err=>{
            console.log(err)
          });
        }
      },
    }
</script>

<style scoped>

</style>
