<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-progress type="circle" :percentage="0"></el-progress>
    <el-progress type="circle" :percentage="25"></el-progress>
    <el-progress type="circle" :percentage="100" status="success"></el-progress>
    <el-progress type="circle" :percentage="50" status="exception"></el-progress>
    <br/>
    <div>
      <el-row>
        <el-col :span="6"><span style="float: left">1</span></el-col>
        <el-col :span="6">2</el-col>
        <el-col :span="6">3</el-col>
        <el-col :span="6">4</el-col>
      </el-row>
    </div>
    <div>
      <el-button type="primary">点我</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LearnElement',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
