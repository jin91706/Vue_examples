<template>
<div class="dsw-container dsw-px-4 dsw-pt-24 dsw-pb-28 dsw-reviews">
  <h1 class="dsw-text-2xl dsw-text-center dsw-my-6 dsw-pb-8 dsw-line-lg">Reviews</h1>
  <Carousel :settings="settings">
    <Slide v-for="(image, index) in reviews.large" :key="index">
      <div class="carousel__item"><img :src="image"/></div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
  <div class="dsw-flex dsw-justify-center">
    <button class="dsw-view-all dsw-text-26xl dsw-line-sm">View All</button>
  </div>
</div>
</template>
<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  props:['reviews'],
  name: 'Review',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      settings: {
        wrapAround: true
      }
    }
  },
  mounted() {
    document.documentElement.style.setProperty('--carousel-color-primary', '' + this.reviews.primary_color + '');
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style>
.dsw-container {
  margin: 0 auto;
}
.carousel {
    position: relative;
    text-align: center;
    box-sizing: border-box;
}
.dsw-reviews .carousel__pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 30px 0;
}
.carousel__item {
  min-height: 250px;
  width: 100%;
  background-color: #fff;
  color:  var(--carousel-color-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dsw-reviews .carousel__prev,
.dsw-reviews .carousel__next {
  box-sizing: content-box;
  top: 40% !important;
  background-color: unset;
  width: 25px;
  height: 25px;
  border: 1px solid #202020;
  color: #202020;
}
.carousel__next {
    right: 15px;
}
.carousel__prev {
    left: 15px;
}
.dsw-view-all {
  background-color: var(--carousel-color-primary);
  color: #fff;
  padding: 10px 45px;
}
.dsw-reviews .carousel__pagination-button {
    margin: 5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
    background-color:#C3C9D8 !important;
}
@media only screen and (min-width: 1024px) {
  .dsw-reviews .carousel__pagination-button {
    width: 15px;
    height: 15px;
    margin: 10px;
    border-radius: 50%;
    background-color:#C3C9D8 !important;
  }
  .dsw-reviews .carousel__next {
    right: 50px;
    width: 40px;
    height: 40px;
  }
  .dsw-reviews .carousel__prev {
    left: 50px;
    width: 40px;
    height: 40px;
  }
}
.dsw-reviews .carousel__pagination-button--active {
  background-color: var(--carousel-color-primary) !important;
  border: unset;
}
</style>
