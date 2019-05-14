<template>
    <div>
<!--      <img :style="imgClass" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557769522504&di=de506311bb770ac77663e9cf7d9b0427&imgtype=0&src=http%3A%2F%2Fjy.sccnn.com%2Fzb_users%2Fupload%2F2018%2F01%2Fremoteimage2_20180122205752_67433.png">-->
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

        }
      },
      computed:{
        imgClass:function () {
          return this.$store.state.setting.imgClass;
        }
      }
    }
</script>

<style scoped>

</style>
