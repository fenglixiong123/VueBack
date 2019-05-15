<template>
  <div>
    <h1>We</h1>
    <div id="div_digg">
      小贴士：石亭和冯立雄
    </div>
    <Cube3DBig img1="static/img/xiong01.jpg"
               img2="static/img/xiong02.jpg"
               img3="static/img/xiong03.jpg"
               img4="static/img/xiong04.jpg"
               img5="static/img/xiong05.jpg"
               img6="static/img/xiong06.jpg"
               left="300px" top="300px" :opacity="opacity" type="cubeY"
    />
    <Cube3DBig img1="static/img/xiong01.jpg"
               img2="static/img/xiong02.jpg"
               img3="static/img/xiong03.jpg"
               img4="static/img/xiong04.jpg"
               img5="static/img/xiong05.jpg"
               img6="static/img/xiong06.jpg"
               left="650px" top="300px" :opacity="opacity" type="cubeX"
    />
    <Cube3DBig img1="static/img/xiong01.jpg"
               img2="static/img/xiong02.jpg"
               img3="static/img/xiong03.jpg"
               img4="static/img/xiong04.jpg"
               img5="static/img/xiong05.jpg"
               img6="static/img/xiong06.jpg"
               left="1000px" top="300px" :opacity="opacity" type="cubeS"
    />
  </div>
</template>

<script>
  import Cube3D from "../toy/Cube3D";
  import Cube3DBig from "../toy/Cube3DBig";
    export default {
        name: "XiongTing",
      components: {Cube3DBig, Cube3D},
      props:['opacity']
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
