<template>
    <div>
      <div class="wrap" :style="{top:top,left:left}">
        <div :class="type" class="cube cube_pointer">
          <div class="side out_front" :style="{opacity:opacity}"><img :src="img1" alt="img1" /></div>
          <div class="side out_back" :style="{opacity:opacity}"><img :src="img2" alt="img2" /></div>
          <div class="side out_left" :style="{opacity:opacity}"><img :src="img3" alt="img3" /></div>
          <div class="side out_right" :style="{opacity:opacity}"><img :src="img4" alt="img4" /></div>
          <div class="side out_top" :style="{opacity:opacity}"><img :src="img5" alt="img5" /></div>
          <div class="side out_bottom" :style="{opacity:opacity}"><img :src="img6" alt="img6" /></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Cube3DBig",
      props:['img1','img2','img3','img4','img5','img6','left','top','opacity','type']
    }
</script>

<style scoped>
  .wrap {
    position: fixed;
    perspective:1000px;
    z-index: 1;
  }

  .cube {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }

  .cubeX{
    transform-style: preserve-3d;
    animation: sphereX linear 5s infinite;
  }
  .cubeY{
    transform-style: preserve-3d;
    animation: sphereY linear 5s infinite;
  }
  .cubeS{
    transform-style: preserve-3d;
    animation: sphereS linear 5s infinite;
  }

  .side {
    position: absolute;
    width: 200px;
    height: 200px;
    transition: all 1s ease 0s;
  }

  .out_front {
    background: blue;
    transform: translateZ(100px);
  }

  .out_back {
    background: blue;
    transform: translateZ(-100px);
  }

  .out_left {
    background: blue;
    transform: rotateX(90deg) translateZ(100px);
  }

  .out_right {
    background: blue;
    transform: rotateX(270deg) translateZ(100px);
  }

  .out_top {
    background: blue;
    transform: rotateY(-90deg) translateZ(100px);
  }

  .out_bottom {
    background: blue;
    transform: rotateY(90deg) translateZ(100px);
  }

  .cube_pointer:hover .out_front{
    transform:translateZ(200px);
  }
  .cube_pointer:hover .out_back{
    transform:translateZ(-200px);
  }
  .cube_pointer:hover .out_left{
    transform: rotateX(90deg) translateZ(200px);
  }
  .cube_pointer:hover .out_right{
    transform: rotateX(270deg) translateZ(200px);
  }
  .cube_pointer:hover .out_top{
    transform: rotateY(-90deg) translateZ(200px);
  }
  .cube_pointer:hover .out_bottom{
    transform: rotateY(90deg) translateZ(200px)
  }

  @keyframes sphereX{
    from{
      transform: rotateX(0deg) rotateY(0deg);
    }
    to{
      transform: rotateX(360deg) rotateY(0deg);
    }
  }

  @keyframes sphereY{
    from{
      transform: rotateX(0deg) rotateY(0deg);
    }
    to{
      transform: rotateX(0deg) rotateY(360deg);
    }
  }

  @keyframes sphereS{
    from{
      transform: rotateX(0deg) rotateY(0deg);
    }
    to{
      transform: rotateX(360deg) rotateY(360deg);
    }
  }
</style>
