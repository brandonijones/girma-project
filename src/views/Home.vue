<template>
  <div class="py-4 px-3 bg-image pointer" @click="changeImage()" v-bind:style="{ 'background-image': 'url(' + activeImg + ')', height: '600px'}" >
    <h1 class="text-center display-1 user-select-none">A Whole New Era of Art</h1>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      index: 0,
      activeImg: require('@/assets/images/home-blue.png'),
      homeImgs: [
        {
          bgImg: require('@/assets/images/home-blue.png')
        },
        {
          bgImg: require('@/assets/images/home-red.png')
        },
        {
          bgImg: require('@/assets/images/home-orange.png')
        },
        {
          bgImg: require('@/assets/images/home-water.png')
        },
        {
          bgImg: require('@/assets/images/home-trees.png')
        },
        {
          bgImg: require('@/assets/images/home-cyan.png')
        },
        {
          bgImg: require('@/assets/images/home-yellow.png')
        },
        {
          bgImg: require('@/assets/images/home-green.png')
        },
        {
          bgImg: require('@/assets/images/home-grass.png')
        },
      ]
    }
  },
  methods: {
    changeImage() {
      this.index = Math.floor(Math.random() * this.homeImgs.length);
      this.activeImg = this.homeImgs[this.index].bgImg;
    }
  }
}
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>
