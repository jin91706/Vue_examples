<template>
<div class="dsw-container dsw-px-0 dsw-pt-12 dsw-pb-8 sm:dsw-pb-28 dsw-reviews">
  <h1 class="dsw-leading-36 dsw-text-xl sm:dsw-leading-lg sm:dsw-text-2xl dsw-font-semibold dsw-text-center dsw-my-6 dsw-pb-8">Reviews</h1>
  <Carousel :settings="settings">
    <Slide v-for="(image, index) in reviews.large" :key="index">
      <div class="carousel__item">
        <div class="dsw-review-content-container" :style="{ backgroundImage: `url(${image.image})`}">
          <div class="dsw-review-content">
            <div class="dsw-quotes">&#8220;</div>
            <div class="dsw-font-bold dsw-pb-4 dsw-pt-1 dsw-text-28xl dsw-leading-36">{{ image.title }}</div>
            <div class="dsw-text-base dsw-leading-34" v-if="!readMore">{{ image.desc.slice(0, 200) }}...</div>
            <div class="dsw-text-base dsw-leading-34" v-if="readMore" v-html="image.desc"></div>
            <div class="dsw-text-sm dsw-leading-24 dsw-read-more dsw-font-bold dsw-py-2 dsw-cursor-pointer" v-if="!readMore" @click="doReadMore">Read More</div>
            <div class="dsw-py-8">
              <div class="dsw-leading-28 dsw-text-sm dsw-font-bold">{{ image.reviewer_name }}</div>
              <div class="dsw-leading-28 dsw-text-sm">{{ image.reviewer_location }}</div>
            </div>
          </div>
        </div>
        <!-- <img :src="image.image"/> -->
      </div>
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
      },
      readMore: false
    }
  },
  mounted() {
    document.documentElement.style.setProperty('--carousel-color-primary', '' + this.reviews.primary_color + '');
    document.documentElement.style.setProperty('--secondary-color', '' + this.reviews.secondary_color + '');
  },
  computed: {
  },
  methods: {
    doReadMore() {
      this.readMore = true;
    }
  }
}
</script>
<style>
/* Styles in this component could not be scoped due to the use of Vue3-carousel plugin. So all css has been prefixed for this component */
.dsw-reviews.dsw-container {
  margin: 0 auto;
}
.dsw-reviews .carousel {
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
.dsw-reviews .carousel__item {
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
.dsw-reviews .carousel__prev,
.dsw-reviews .carousel__next {
  display: none;
  top: 40% !important;
  background-color: unset;
  width: 25px;
  height: 25px;
  border: 2px solid #202020;
  color: #202020;
}
.dsw-reviews .carousel__next {
  display: none;
}
.dsw-reviews .carousel__prev {
  display: none;
}
.dsw-reviews .dsw-view-all {
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
.dsw-reviews .carousel__pagination-button--active {
  background-color: var(--carousel-color-primary) !important;
  border: unset;
}
.dsw-reviews.dsw-container {
  max-width: 100%;
}
.dsw-review-content-container {
  display: flex;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 350px;
  color: #202020;
  justify-content: center;
  align-items: flex-end;
}
.dsw-review-content {
  position: relative;
  padding: 50px;
  background-color: #fff;
  text-align: left;
  max-width: 90%;
  margin-top: 250px;
}
.dsw-quotes {
  color: var(--carousel-color-primary);
  font-size: 96px;
  font-family: "Times New Roman";
  font-weight: 900;
  line-height: 34px;
}
.dsw-read-more {
  color: var(--secondary-color);
}
@media only screen and (min-width: 640px) {
  .dsw-review-content-container {
    background-position: 100% 0%;
    background-size: 100% 450px;
  }
}
@media only screen and (min-width: 1024px) {
  .dsw-reviews .carousel__pagination-button {
    margin: 10px;
  }
  .dsw-reviews .carousel__next,
  .dsw-reviews .carousel__prev {
    width: 40px;
    height: 40px;
  }
  .dsw-reviews .carousel__next {
    right: 40px;
    display: flex;
  }
  .dsw-reviews .carousel__prev {
    left: 40px;
    display: flex;
  }
  .dsw-review-content {
    margin-top: 0px;
    margin-left: 0px;
    max-width: 800px;
  }
  .dsw-review-content-container {
    height: 650px;
    background-position: 50% 0%;
    background-size: 85% 550px;
    justify-content: center;
    align-items: flex-end;
  }
  .dsw-reviews.dsw-container {
    max-width: 1024px;
  }
}
@media only screen and (min-width: 1280px) {
  .dsw-review-content {
    padding: 50px;
    background-color: #fff;
    max-width: 850px;
    text-align: left;
    margin-left: 50px;
  }
  .dsw-review-content-container {
    background-position: 90% 50%;
    background-size: 50% 550px;
    align-items: center;
    justify-content: flex-start;
  }
  .dsw-reviews .carousel__next {
    right: 35px;
  }
  .dsw-reviews .carousel__prev {
    left: 35px;
  }
  .dsw-reviews.dsw-container {
    max-width: 1280px;
  }
}
@media only screen and (min-width: 1800px) {
  .dsw-reviews.dsw-container {
    max-width: 1800px;
  }
  .dsw-review-content {
    margin-left: 150px;
  }
  .dsw-reviews .carousel__next {
    right: 50px;
  }
  .dsw-reviews .carousel__prev {
    left: 50px;
  }
}
</style>
