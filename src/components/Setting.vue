<template>
    <div>

      <h1>开关状态：{{this.$store.state.switcher}}</h1>
      <el-row>
        <el-col :span="2">
          输入密码:
        </el-col>
        <el-col :span="6" >
          <el-input label="密码" type="password" v-model="password" placeholder="请输入密码查看私密内容..."/>
        </el-col>
        <el-col :span="6">
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-button type="primary" @click="checkPassword">验证</el-button>
        </el-col>
      </el-row>
      <br/>
      <!--私密开关-->
      <div v-show="show">
        <br/>
        <hr/>
        <el-switch
          v-model="boxSwitcher"
          active-color="#13ce66"
          inactive-color="#ff4949" @change="changeSwitcher">
        </el-switch>
      </div>

      <div class="eyes">
        <div class="box boxType">
          <div class="side div1"></div>
          <div class="side div2"></div>
          <div class="side div3"></div>
          <div class="side div4"></div>
          <div class="side div5"></div>
          <div class="side div6"></div>
        </div>
      </div>

    </div>
</template>

<script>
  import '../assets/box.css'
    export default {
      name: "Setting",
      data(){
        return{
          password:'',
          show:false,
          boxSwitcher:window.localStorage.getItem('switcher')==='open',
        }
      },
      computed:{

      },
      methods:{
        checkPassword:function () {
          if(this.password==='welcome123'){
            console.log("password success");
            this.show = true;
            this.$message.success('恭喜你，密码正确');
          }else {
            console.log("password err");
            this.password = '';
            this.show = false;
            this.$message.error('您输入的密码有误');
          }
        },
        changeSwitcher:function (value) {
          console.log(value);
          if(value){
            this.$store.dispatch('modifySwitcher',{switcher:'open'});
          }else{
            this.$store.dispatch('modifySwitcher',{switcher:'close'});
          }
          this.show = false;
        },
      }
    }
</script>

<style scoped>

</style>
