<template>
    <div>
<!--      <img :style="imgClass" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557769522504&di=de506311bb770ac77663e9cf7d9b0427&imgtype=0&src=http%3A%2F%2Fjy.sccnn.com%2Fzb_users%2Fupload%2F2018%2F01%2Fremoteimage2_20180122205752_67433.png">-->
      <div class="container">
        <!--包裹六个面的元素-->
        <div class="box">
          <!--立方体的六个面-->
          <div class="plane-front">前面</div>
          <div class="plane-back">后面</div>
          <div class="plane-left">左面</div>
          <div class="plane-right">右面</div>
          <div class="plane-top">上面</div>
          <div class="plane-bottom">下面</div>
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
