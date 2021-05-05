<template>
<div class="dsw-container dsw-px-0 dsw-pt-12 dsw-pb-8 sm:dsw-pb-28 dsw-reviews">
  <h1 class="dsw-leading-36 dsw-text-xl sm:dsw-leading-lg sm:dsw-text-2xl dsw-font-semibold dsw-text-center dsw-my-6 dsw-pb-8">Reviews</h1>
  <Carousel :settings="settings">
    <Slide v-for="(image, index) in reviews.large" :key="index">
      <div class="carousel__item">
        <div class="dsw-review-content-container" :style="{ backgroundImage: `url(${image.image})`}">
          <div class="dsw-review-content">
            <div>Why did we wait so long!</div>
            <div>After receiving my neighbor’s suggestion to invest in a Freeflow Spa after they tried 2 other mfrs previously, 
I am glad I did. Got lucky that I purchased it when I did…  due to the Covid-related demand for spas that developed. Impressed with quality manufacturing and can’t say enough good things about our local dealer Artesian Pools and Spas here in Pennsylvania! Never even went to a competing brand to compare—which is usually not how I make a larger ticket purchase! My favorite time is to relax under the stars late at night. This will be a purchase you won’t regret.</div>
            <div>Read More</div>
            <div>
              <div>Rich Froning</div>
              <div>Little Falls, NJ</div>
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
  color:#202020;
  justify-content: center;
  align-items: flex-end;
}
.dsw-review-content {
  padding: 50px;
  background-color: #fff;
  text-align: left;
  max-width: 90%;
  margin-top: 250px;
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
