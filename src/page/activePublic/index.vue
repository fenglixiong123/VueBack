<template>
  <div>
    <!--步骤条-->
    <el-steps :space="300" align-center :active="step" class="step" finish-status="success">
      <el-step title="活动信息" description=""></el-step>
      <el-step title="报名签到" description=""></el-step>
      <el-step title="分享设置" description=""></el-step>
      <el-step title="个性设置" description=""></el-step>
    </el-steps>

    <!--展示区域-->
    <div>
      <router-view/>
    </div>

    <br/>

    <div class="btnClass">
      <el-button>预览</el-button>
      <el-button @click="upStep">上一步</el-button>
      <el-button @click="downStep" type="primary">下一步</el-button>
      <el-button type="primary">发布活动</el-button>
    </div>

  </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            step:1,
          }
      },
      methods:{
        upStep:function () {
          console.log(this.step)
          if(this.step===0)return;
          this.step = this.step - 1;
        },
        downStep:function () {
          console.log(this.step)
          if(this.step===4)return;
          this.step = this.step + 1;
        }
      }
    }
</script>

<style scoped>
.btnClass{
  text-align: center;
}
</style>
