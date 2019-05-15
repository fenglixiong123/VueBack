<template>
  <div>
    <h1>Smallleader</h1>
    <div id="div_digg">
      小贴士：商界大佬
    </div>
    <Cube3D img1="static/img/leader01.jpg"
               img2="static/img/leader02.jpg"
               img3="static/img/leader03.jpg"
               img4="static/img/leader04.jpg"
               img5="static/img/leader05.jpg"
               img6="static/img/leader06.jpg"
               left="300px" top="300px" :opacity="opacity" type="cubeY"
    />
    <Cube3D img1="static/img/leader01.jpg"
               img2="static/img/leader02.jpg"
               img3="static/img/leader03.jpg"
               img4="static/img/leader04.jpg"
               img5="static/img/leader05.jpg"
               img6="static/img/leader06.jpg"
               left="650px" top="300px" :opacity="opacity" type="cubeX"
    />
    <Cube3D img1="static/img/leader01.jpg"
               img2="static/img/leader02.jpg"
               img3="static/img/leader03.jpg"
               img4="static/img/leader04.jpg"
               img5="static/img/leader05.jpg"
               img6="static/img/leader06.jpg"
               left="1000px" top="300px" :opacity="opacity" type="cubeS"
    />
  </div>  
</template>

<script>
  import Cube3D from "../toy/Cube3D";
  import Cube3DBig from "../toy/Cube3DBig";
    export default {
        name: "Smallleader",
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
