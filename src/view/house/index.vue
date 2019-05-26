<template>
  <div>
    用户基本信息：
    <br/>
    <hr/>

    <el-row>
      <el-col :span="8">
        <el-card shadow="always" :body-style="cardStyle">
          <p>用户ID：{{userInfo.id}}</p>
          <p>用户名：{{userInfo.username}}</p>
          <p>昵称：{{userInfo.nickname}}</p>
          <p>性别：{{userInfo.sex===0?'女':'男'}}</p>
          <p>Email：{{userInfo.email}}</p>
          <p>Phone：{{userInfo.phone}}</p>
          <p>地址：{{userInfo.address}}</p>

        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>

    export default {
      name: "Home",
      components: {},
      data(){
        return{
          token:'',
          cardStyle:{
            padding:'20px',
            color:'yellow',
            backgroundColor:'grey'
          }
        }
      },
      computed:{
        userInfo:function () {
          return this.$store.getters.userInfo;
        }
      },
      methods:{

      },
    }
</script>

<style scoped>

</style>
