<template>
    <div>
      <Cube3D
        img1="https://files-cdn.cnblogs.com/files/cjsblog/cube01.bmp"
        img2="https://files-cdn.cnblogs.com/files/cjsblog/cube02.bmp"
        img3="https://files-cdn.cnblogs.com/files/cjsblog/cube03.bmp"
        img4="https://files-cdn.cnblogs.com/files/cjsblog/cube04.bmp"
        img5="https://files-cdn.cnblogs.com/files/cjsblog/cube05.bmp"
        img6="https://files-cdn.cnblogs.com/files/cjsblog/cube06.bmp"
        left="500px" top="200px" opacity="0.8" type="cubeLeft"/>
    </div>
</template>

<script>
    import Cube3D from "./toy/Cube3D";
    export default {
        name: "Statistic",
      components: {Cube3D}
    }
</script>

<style scoped>

</style>
