<template>
    <div>
      <h1>You</h1>
<!--      <img class="pink-heart" src="https://files.cnblogs.com/files/cjsblog/reward.bmp" />-->
      <div id="div_digg">
        小贴士：石亭
      </div>
      <!--动画小玩具-->
      <Cube3D img1="/static/shi01.jpg"
              img2="/static/shi02.jpg"
              img3="/static/shi03.jpg"
              img4="/static/shi04.jpg"
              img5="/static/shi05.jpg"
              img6="/static/shi06.jpg"
              left="400px" top="200px" opacity="0.8" type="cubeS"
      />
      <Cube3D img1="/static/shi01.jpg"
              img2="/static/shi02.jpg"
              img3="/static/shi03.jpg"
              img4="/static/shi04.jpg"
              img5="/static/shi05.jpg"
              img6="/static/shi06.jpg"
              left="700px" top="200px" opacity="0.8" type="cubeY"
      />
      <Cube3D img1="/static/shi01.jpg"
              img2="/static/shi02.jpg"
              img3="/static/shi03.jpg"
              img4="/static/shi04.jpg"
              img5="/static/shi05.jpg"
              img6="/static/shi06.jpg"
              left="1000px" top="200px" opacity="0.8" type="cubeX"
      />

    </div>
</template>

<script>
    // import '../assets/cube.css'
    import Cube3D from "./toy/Cube3D";
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
</style>
