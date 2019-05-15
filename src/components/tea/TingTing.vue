<template>
  <div>
    <h1>You</h1>
    <div id="div_digg">
      小贴士：石亭
    </div>
    <!--动画小玩具-->
    <Cube3D img1="static/img/shi01.jpg"
            img2="static/img/shi02.jpg"
            img3="static/img/shi03.jpg"
            img4="static/img/shi04.jpg"
            img5="static/img/shi05.jpg"
            img6="static/img/shi06.jpg"
            left="400px" top="300px" :opacity="opacity" type="cubeS"/>
    <Cube3D img1="static/img/shi01.jpg"
            img2="static/img/shi02.jpg"
            img3="static/img/shi03.jpg"
            img4="static/img/shi04.jpg"
            img5="static/img/shi05.jpg"
            img6="static/img/shi06.jpg"
            left="700px" top="300px" :opacity="opacity" type="cubeY"
    />
    <Cube3D img1="static/img/shi01.jpg"
            img2="static/img/shi02.jpg"
            img3="static/img/shi03.jpg"
            img4="static/img/shi04.jpg"
            img5="static/img/shi05.jpg"
            img6="static/img/shi06.jpg"
            left="1000px" top="300px" :opacity="opacity" type="cubeX"
    />
  </div>
</template>

<script>
  import Cube3D from "../toy/Cube3D";
  import Cube3DBig from "../toy/Cube3DBig";
    export default {
        name: "TingTing",
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
