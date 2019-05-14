<template>
  <div>
    <!--正方体-->
    <div class="wrap" :style="{top:top,left:left}">
      <div :class="type" class="cube cube_pointer">
        <div class="img_position out_front" :style="{opacity:opacity}"><img :src="img1" alt="img1" /></div>
        <div class="img_position out_back" :style="{opacity:opacity}"><img :src="img2" alt="img2" /></div>
        <div class="img_position out_left" :style="{opacity:opacity}"><img :src="img3" alt="img3" /></div>
        <div class="img_position out_right" :style="{opacity:opacity}"><img :src="img4" alt="img4" /></div>
        <div class="img_position out_top" :style="{opacity:opacity}"><img :src="img5" alt="img5" /></div>
        <div class="img_position out_bottom" :style="{opacity:opacity}"><img :src="img6" alt="img6" /></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Cube3D",
      data(){
        return{
          pic:{
            width:'520px',
            height:'520px',
          }
        }
      },
      computed:{

      },
      props:['img1','img2','img3','img4','img5','img6','left','top','opacity','type']
    }
</script>

<style scoped>
  /*立方体效果*/
  .wrap {
    /*相对于浏览器窗口定位*/
    position: fixed;
    perspective:1000px;
    z-index: 1;
  }

  .cube {
    width: 120px;
    height: 120px;
    margin: 0 auto;
  }

  .cubeX{
    transform-style: preserve-3d;
    animation: sphereX linear 5s infinite;
    /*transform: rotateX(-360deg) rotateY(-360deg) rotateZ(-360deg);*/
  }
  .cubeY{
    transform-style: preserve-3d;
    animation: sphereY linear 5s infinite;
    /*transform: rotateX(-360deg) rotateY(-360deg) rotateZ(0deg);*/
  }
  .cubeS{
    transform-style: preserve-3d;
    animation: sphereS linear 5s infinite;
    /*transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);*/
  }

  .img_position {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  /*完成一个正方体效果*/
  .out_front {
    transform: rotateY(0deg) translateZ(60px);
  }

  .out_back {
    transform: translateZ(-60px) rotateY(180deg);
  }

  .out_left {
    transform: rotateY(-90deg) translateZ(60px);
  }

  .out_right {
    transform: rotateY(90deg) translateZ(60px);
  }

  .out_top {
    transform: rotateX(90deg) translateZ(60px);
  }

  .out_bottom {
    transform: rotateX(-90deg) translateZ(60px);
  }

  /*鼠标经过的效果*/
  .cube_pointer:hover .out_front{
    transform:translateZ(200px);
  }
  .cube_pointer:hover .out_back{
    transform:translateZ(-200px);
  }
  .cube_pointer:hover .out_left{
    transform:rotateY(90deg) translateZ(-200px);
  }
  .cube_pointer:hover .out_right{
    transform:rotateY(90deg) translateZ(200px);
  }
  .cube_pointer:hover .out_top{
    transform:rotateX(90deg) translateZ(200px);
  }
  .cube_pointer:hover .out_bottom{
    transform:rotateX(90deg) translateZ(-200px);
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
