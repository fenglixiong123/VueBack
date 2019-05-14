<template>
    <div>
      <h3>Photo</h3>
      <img class="pink-heart" src="https://files.cnblogs.com/files/cjsblog/reward.bmp" />
      <div id="div_digg">
        小贴士：努力才有收获
      </div>
      <!--动画小玩具-->
      <Cube3D img1="https://files-cdn.cnblogs.com/files/cjsblog/cube01.bmp"
              img2="https://files-cdn.cnblogs.com/files/cjsblog/cube02.bmp"
              img3="https://files-cdn.cnblogs.com/files/cjsblog/cube03.bmp"
              img4="https://files-cdn.cnblogs.com/files/cjsblog/cube04.bmp"
              img5="https://files-cdn.cnblogs.com/files/cjsblog/cube05.bmp"
              img6="https://files-cdn.cnblogs.com/files/cjsblog/cube06.bmp"
      />
<!--      <Cube3D/>-->

    </div>
</template>

<script>
    // import '../assets/cube.css'
    import Cube3D from "./Cube3D";
    export default {
        name: "Home",
      components: {Cube3D}
    }
</script>

<style scoped>
  /*点击页面爱心效果*/
  #div_digg {
    position:fixed;
    bottom:5px;
    width:160px;
    right:50px;
    border:2px solid #6FA833;
    padding:10px;
    background-color:#fff;
    border-radius:5px 5px 5px 5px !important;
    box-shadow:0 0 0 1px #5F5A4B, 1px 1px 6px 1px rgba(10, 10, 0, 0.5);
  }

  .pink-heart {
    position: fixed;
    bottom: 80px;
    right: 15px;
    height: 80px;
    width: 80px;
    display: block;
    z-index: 1;
  }
</style>
