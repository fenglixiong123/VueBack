<template>
   <div>
     <div class="block">
       <span class="demonstration">透明度</span>
       <el-slider v-model="op" :min=0 :max=1 :step=0.1></el-slider>
     </div>
     <TingTing v-if="this.$store.state.switcher==='open'" :opacity="op"/>
     <SmallBoss v-if="this.$store.state.switcher==='close'" :opacity="op"/>
   </div>
</template>
<!--显示三个小的带透明度调节滑块的滚动条-->
<script>
  import Cube3D from "../toy/Cube3D";
  import BigBoss from "../tea/BigBoss";
  import SmallBoss from "../tea/SmallBoss";
  import TingTing from "../tea/TingTing";
    export default {
        name: "AThreeSmall",
      data(){
        return{
          op : 0.8
        }
      },
      methods:{

      },
      components: {TingTing, BigBoss, Cube3D,SmallBoss}
    }
</script>

<style scoped>

</style>
