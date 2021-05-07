<template>
<div class="dsw-container dsw-gallery dsw-px-4 dsw-pt-12 dsw-pb-8 sm:dsw-pb-28">
  <h1 class="dsw-leading-36 dsw-text-xl sm:dsw-leading-lg sm:dsw-text-2xl dsw-font-semibold dsw-text-center dsw-my-6 dsw-pb-8">Gallery</h1>
  <Carousel :settings="settings">
    <Slide v-for="(image, index) in gallery.large" :key="index">
      <div class="carousel__item">
        <img :src="image.image"/>
        <div class="dsw-text-left dsw-text-overlay">{{ image.caption }}</div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</div>
</template>
<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  props:['gallery'],
  name: 'Gallery',
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
    const buttons = this.$el.getElementsByClassName('carousel__pagination-button');
    if (buttons) {
      for(var i = 0; i < buttons.length; i++) {
        buttons[i].style.background="url('" + this.gallery.thumb[i] + "')";
      }
    }
    document.documentElement.style.setProperty('--pagnation-border-color', '' + this.gallery.primary_color + '');
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style>
/* Styles in this component could not be scoped due to the use of Vue3-carousel plugin. So all css has been prefixed for this component */
.dsw-gallery .dsw-text-overlay {
  display:none;
  position:absolute;
  color:#fff;
  background-color:rgba(0, 0, 0, 0.5);
  padding:40px 140px 40px 40px;
}
@media only screen and (min-width: 1280px) {
  .dsw-gallery .dsw-text-overlay {
    display: block;
    left:0px;
    bottom:0px;
  }
}
@media only screen and (min-width: 1800px) {
  .dsw-gallery .dsw-text-overlay {
    bottom:0px;
  }
}
.dsw-gallery .carousel__item img {
  min-height: 275px;
  object-fit: cover;
}
.dsw-gallery .carousel__pagination-button--active {
  border: 3px solid var(--pagnation-border-color) !important;
}
.dsw-gallery.dsw-container {
  margin: 0 auto;
}
.dsw-gallery .carousel {
    position: relative;
    text-align: center;
    box-sizing: border-box;
}
.dsw-gallery .carousel__pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    margin-top: 10px;
}
.dsw-gallery .carousel__item {
  position: relative;
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
.dsw-gallery .carousel__prev,
.dsw-gallery .carousel__next {
  box-sizing: content-box;
  border: 1px solid #fff;
  top: 40% !important;
  background-color: unset;
  width: 40px;
  height: 40px;
  display: none;
}
.dsw-gallery .carousel__next {
    right: 50px;
}
.dsw-gallery .carousel__prev {
    left: 50px;
}
.dsw-gallery .carousel__pagination-item {
  width: 100%;
  padding: 0 5px;
}
.dsw-gallery .carousel__pagination-item:last-of-type {
  padding-right: 0;
}
.dsw-gallery .carousel__pagination-item:first-of-type {
  padding-left: 0;
}
.dsw-gallery .carousel__pagination-button {
    margin: 0;
    width: 100%;
    height: 75px;
    border: 0;
    cursor: pointer;
    background-color: #fff;
    background-size: cover !important;
}
@media only screen and (min-width: 640px) {
  .dsw-gallery .carousel__prev,
  .dsw-gallery .carousel__next {
    display: flex;
  }
  .dsw-gallery .carousel__pagination-item {
    width: 165px;
    padding: 0;
  }
  .dsw-gallery .carousel__pagination-button {
    width: 95px;
  }
  .dsw-gallery .carousel__pagination {
    margin-top: 4px;
  }
}
@media only screen and (min-width: 1024px) {
  .dsw-gallery .carousel__pagination-button {
    width: 150px;
    height: 75px;
    margin: 7px;
  }
  .dsw-gallery .carousel__pagination {
    margin-top: 5px;
  }
}
@media only screen and (min-width: 1800px) {
  .carousel__item img {
    height: 650px;
    width: 1800px;
  }
}
</style>
