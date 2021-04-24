<template>
  <div class="py-4 px-3 bg-image pointer" @click="changeImage()" v-bind:style="{ 'background-image': 'url(' + activeImg + ')', height: '600px'}" >
    <h1 class="text-center display-1 user-select-none">A Whole New Era of Art</h1>
  </div>
  <div class="bg-light text-dark p-5 " >
    <MDBRow class="d-flex align-items-center justify-content-between">
      <MDBCol col="5">
        <h2>View the art we have on display</h2>
      </MDBCol>
      <MDBCol class="d-flex justify-content-end">
        <router-link to='/gallery'>
          <MDBBtn color="dark" size="lg">Visit Gallery</MDBBtn>
        </router-link>
      </MDBCol>
    </MDBRow>
  </div>
  <div class="bg-light text-dark p-5" >
    <MDBRow class="d-flex align-items-center justify-content-between">
      <MDBCol col="3" >
        <router-link to='/contact'>
          <MDBBtn color="dark" size="lg">Visit Contact</MDBBtn>
        </router-link>
      </MDBCol>
      <MDBCol col="5" class="d-flex justify-content-end">
        <h2>Request to submit your own art!</h2>
      </MDBCol>
    </MDBRow>
  </div>
  <div class="p-5 text-center">
    <h3>Have you tried pressing the circle?</h3>
  </div>
</template>

<script>
import {
  MDBBtn,
  MDBRow,
  MDBCol
} from "mdb-vue-ui-kit";

export default {
  name: 'Home',
  components: {
    MDBBtn,
    MDBRow,
    MDBCol
  },
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
