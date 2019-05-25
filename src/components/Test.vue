<template>
    <div>
      Test
      <hr/>
      <button @click="testPromise">测试Promise</button>
    </div>
</template>

<script>
  export default {
    name: "Test",
    data(){
      return{
        message:''
      }
    },
    methods:{
      testPromise:function () {
        this.runAsync()
          .then(res=>{
            console.log("testPromise res : ",res);
          })
          .catch(err=>{
            console.log("testPromise err : ",err);
          })
      },
      runAsync:function () {
        return new Promise((resolve,reject)=>{
          setTimeout(function () {
            console.log("runAsync exec");
            let f = false;
            if(f)
              resolve("完成");
            else
              reject("失败")
          },2000)
        })
      }
    }
  }
</script>

<style scoped>

</style>
