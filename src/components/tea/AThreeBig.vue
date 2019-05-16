<template>
  <div>
    <div class="block">
      <span class="demonstration">透明度</span>
      <el-slider v-model="op" :min=0 :max=1 :step=0.1></el-slider>
    </div>
    <XiongTing v-if="this.$store.state.switcher==='open'" :opacity="op"/>
    <BigBoss v-if="this.$store.state.switcher==='close'" :opacity="op"/>
  </div>
</template>
<!--显示三个大的带透明度调节滑块的滚动条-->
<script>
  import Cube3D from "../toy/Cube3D";
  import Cube3DBig from "../toy/Cube3DBig";
  import BigBoss from "../tea/BigBoss";
  import XiongTing from "../tea/XiongTing";
    export default {
        name: "AThreeBig",
      components: {XiongTing, BigBoss, Cube3DBig, Cube3D},
      data(){
        return{
          op : 0.8
        }
      },
    }
</script>

<style scoped>

</style>
