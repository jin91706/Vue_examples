<template>
<div class="dsw-w-full dsw-mb-60 dsw-main-container dsw-text-base">
  <topSection v-if="pageInfo" :top="pageInfo[0].topSection"/>
  <gallerySection v-if="pageInfo" :gallery="pageInfo[0].gallerySection"/>
  <viewModelsSection v-if="pageInfo" :tubs="pageInfo[0].viewModelsSection"/>
  <featureSection v-if="pageInfo" :features="pageInfo[0].featureSection"/>
  <reviewSection v-if="pageInfo" :reviews="pageInfo[0].reviewSection"/>
  <bottomSection v-if="pageInfo" :bottom="pageInfo[0].bottomSection"/>
</div>
</template>
<script>
import topSection from './components/topSection.vue';
import gallerySection from './components/gallerySection.vue'
import viewModelsSection from './components/viewModelsSection.vue';
import featureSection from './components/featureSection.vue';
import reviewSection from './components/reviewSection.vue';
import bottomSection from './components/bottomSection.vue';
import axios from 'axios'
export default {
  name: 'App',
  components: {
    topSection,
    gallerySection,
    viewModelsSection,
    featureSection,
    reviewSection,
    bottomSection
  },
  data() {
   return {
      pageInfo: null
    }
  },
  created() {
     //Get json file from the page name we will have to rename this folder 
    axios.get('/dswaves/pageName/main.json').then((response) => {
        this.pageInfo = response.data
    });
  }
}
</script>
<style>
html, body {
  overflow-x: hidden;
}
.dsw-main-container {
  font-family: Lato, Arial, Helvetica, sans-serif;
  color: #202020;
}
.dsw-bg-image-container {
  background-size: cover;
  background-position: center;
}
*:focus {
  outline: 0 !important;
}
p {
  line-height: 34px;
}
img {
  width:100%;
}
.dsw-line-sm {
  line-height: 32px !important;
}
.dsw-line-xl {
  line-height: 72px;
}
.dsw-line-lg {
  line-height: 62px;
}
.dsw-text-44xl {
  line-height: 52px;
}
.dsw-flex-col-3 {
  flex-grow: 0;
  flex-basis: 100%;
}
@media only screen and (min-width: 1024px) {
  .dsw-flex-col-3 {
    flex-grow: 0;
    flex-basis: 30%;
  }
}
</style>
