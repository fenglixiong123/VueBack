<template>
    <div>
      <h3>Welcome</h3>
      <!--动画小玩具-->
      <div class="wrap">
        <div class="cube">
          <div class="out_front">
            <img src="https://files-cdn.cnblogs.com/files/cjsblog/cube01.bmp" class="pic"/>
          </div>
          <div class="out_back">
            <img src="https://files-cdn.cnblogs.com/files/cjsblog/cube02.bmp" class="pic"/>
          </div>
          <div class="out_left">
            <img src="https://files-cdn.cnblogs.com/files/cjsblog/cube03.bmp" class="pic"/>
          </div>
          <div class="out_right">
            <img src="https://files-cdn.cnblogs.com/files/cjsblog/cube04.bmp" class="pic"/>
          </div>
          <div class="out_top">
            <img src="https://files-cdn.cnblogs.com/files/cjsblog/cube05.bmp" class="pic"/>
          </div>
          <div class="out_bottom">
            <img src="https://files-cdn.cnblogs.com/files/cjsblog/cube06.bmp" class="pic"/>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    import '@/assets/cube.css'
    export default {
        name: "Home"
    }
</script>

<style scoped>
  img {
    max-width: 300px!important;
    height: auto;
  }

</style>
