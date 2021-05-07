<template>
<div class="dsw-w-full dsw-mb-60 dsw-main-container dsw-text-base">
  <topSection v-if="loaded" :top="pageInfo.topSection"/>
  <collectionFeatureSection v-if="loaded && colFeatureSecion" :collections="pageInfo.collectionFeatureSection"/>
  <gallerySection v-if="loaded" :gallery="pageInfo.gallerySection"/>
  <viewModelsSection v-if="loaded" :tubs="pageInfo.viewModelsSection"/>
  <featureSection v-if="loaded" :features="pageInfo.featureSection"/>
  <reviewSection v-if="loaded" :reviews="pageInfo.reviewSection"/>
  <utopiaSection v-if="loaded && utopiaSection" :utopia="pageInfo.utopiaSection"/>
  <bottomSection v-if="loaded" :bottom="pageInfo.bottomSection"/>
</div>
</template>
<script>
import topSection from './components/topSection.vue';
import gallerySection from './components/gallerySection.vue'
import viewModelsSection from './components/viewModelsSection.vue';
import featureSection from './components/featureSection.vue';
import reviewSection from './components/reviewSection.vue';
import bottomSection from './components/bottomSection.vue';
import collectionFeatureSection from './components/collectionFeatureSection.vue';
import utopiaSection from './components/utopiaSection.vue';
import axios from 'axios'
export default {
  name: 'App',
  components: {
    topSection,
    gallerySection,
    viewModelsSection,
    featureSection,
    reviewSection,
    bottomSection,
    collectionFeatureSection,
    utopiaSection
  },
  data() {
   return {
      pageInfo: null,
      colFeatureSecion: false,
      utopiaSection: false,
      loaded: false
    }
  },
  created() {
     //Get json file from the page name we will have to rename this folder 
    axios.get('/dswaves/freeflow/sport.json').then((response) => {
        this.pageInfo = response.data;
        this.loaded = true;
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
/* global style for copyright symbol. Could not used scoped styles in v-html output. */
.dsw-collection-feature .dsw-collection-name span,
.dsw-models span,
.dsw-company-title span {
  font-size: 16px;
  vertical-align: top;
  display: inline-block;
  margin-top: -4px;
}
</style>
