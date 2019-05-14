<template>
    <div>
      <h1>We</h1>
      <div id="div_digg">
        小贴士：石亭和冯立雄
      </div>
      <Cube3DBig img1="/static/xiong01.jpg"
              img2="/static/xiong02.jpg"
              img3="/static/xiong03.jpg"
              img4="/static/xiong04.jpg"
              img5="/static/xiong05.jpg"
              img6="/static/xiong06.jpg"
              left="300px" top="200px" opacity="0.8" type="cubeY"
      />
      <Cube3DBig img1="/static/xiong01.jpg"
                 img2="/static/xiong02.jpg"
                 img3="/static/xiong03.jpg"
                 img4="/static/xiong04.jpg"
                 img5="/static/xiong05.jpg"
                 img6="/static/xiong06.jpg"
                 left="700px" top="200px" opacity="0.8" type="cubeX"
      />
      <Cube3DBig img1="/static/xiong01.jpg"
                 img2="/static/xiong02.jpg"
                 img3="/static/xiong03.jpg"
                 img4="/static/xiong04.jpg"
                 img5="/static/xiong05.jpg"
                 img6="/static/xiong06.jpg"
                 left="1100px" top="200px" opacity="0.8" type="cubeS"
      />
    </div>
</template>

<script>
    import Cube3D from "./toy/Cube3D";
    import Cube3DBig from "./toy/Cube3DBig";
    export default {
        name: "Statistic",
      components: {Cube3DBig, Cube3D}
    }
</script>

<style scoped>
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
