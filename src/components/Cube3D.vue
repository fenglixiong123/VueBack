<template>
  <div>
    <!--正方体-->
    <div class="wrap">
      <div class="cube">
        <div class="out_front"><img :src="img1" alt="img1" :style="pic"/></div>
        <div class="out_back"><img :src="img2" alt="img2" :style="pic"/></div>
        <div class="out_left"><img :src="img3" alt="img3" :style="pic"/></div>
        <div class="out_right"><img :src="img4" alt="img4" :style="pic"/></div>
        <div class="out_top"><img :src="img5" alt="img5" :style="pic"/></div>
        <div class="out_bottom"><img :src="img6" alt="img6" :style="pic"/></div>
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
            width:'120px',
            height:'120px'
          }
        }
      },
      computed:{

      },
      props:['img1','img2','img3','img4','img5','img6']
    }
</script>

<style scoped>
  /*立方体效果*/
  .wrap {
    margin: 10px 300px;
    position: fixed;
    z-index: 1;
  }

  .cube {
    width: 120px;
    height: 120px;
    margin: 0 auto;
    transform-style: preserve-3d;
    transform: rotateX(-360deg) rotateY(-360deg) rotateZ(-360deg);
    /*transform: rotateX(-360deg) rotateY(-360deg) rotateZ(-360deg);*/
    /*transform: rotateX(-360deg) rotateY(-360deg) rotateZ(0deg);*/
    /*transform: rotateX(360deg) rotateY(360deg) rotateZ(0deg);*/
    animation: rotate linear 5s infinite;
  }

  .cube div {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    transition: all .40s;
  }
  /*完成一个正方体效果*/
  .cube .out_front {
    transform: rotateY(0deg) translateZ(60px);
  }

  .cube .out_back {
    transform: translateZ(-60px) rotateY(180deg);
  }

  .cube .out_left {
    transform: rotateY(-90deg) translateZ(60px);
  }

  .cube .out_right {
    transform: rotateY(90deg) translateZ(60px);
  }

  .cube .out_top {
    transform: rotateX(90deg) translateZ(60px);
  }

  .cube .out_bottom {
    transform: rotateX(-90deg) translateZ(60px);
  }

  /*鼠标经过的效果*/
  .cube:hover .out_front{
    transform:translateZ(200px);
  }
  .cube:hover .out_back{
    transform:translateZ(-200px);
  }
  .cube:hover .out_left{
    transform:rotateY(90deg) translateZ(-200px);
  }
  .cube:hover .out_right{
    transform:rotateY(90deg) translateZ(200px);
  }
  .cube:hover .out_top{
    transform:rotateX(90deg) translateZ(200px);
  }
  .cube:hover .out_bottom{
    transform:rotateX(90deg) translateZ(-200px);
  }

  @-webkit-keyframes rotate {
    from {
      transform: rotateX(0deg) rotateY(0deg);
    }
    to {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }
</style>
