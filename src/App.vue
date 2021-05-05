<template>
<div class="dsw-w-full dsw-mb-60 dsw-main-container dsw-text-base">
  <topSection v-if="pageInfo" :top="pageInfo[0].topSection"/>
  <collectionFeatureSection v-if="pageInfo && colFeatureSecion" :collections="pageInfo[0].collectionFeatureSection"/>
  <gallerySection v-if="pageInfo" :gallery="pageInfo[0].gallerySection"/>
  <viewModelsSection v-if="pageInfo" :tubs="pageInfo[0].viewModelsSection"/>
  <featureSection v-if="pageInfo" :features="pageInfo[0].featureSection"/>
  <reviewSection v-if="pageInfo" :reviews="pageInfo[0].reviewSection"/>
  <utopiaSection v-if="pageInfo && utopiaSection" :utopia="pageInfo[0].utopiaSection"/>
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
      utopiaSection: false
    }
  },
  created() {
     //Get json file from the page name we will have to rename this folder 
    axios.get('/dswaves/freeflow/main.json').then((response) => {
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
/* global style for copyright symbol. Could not used scoped styles in v-html output. */
.dsw-collection-feature .dsw-collection-name span {
  font-size: 16px;
  vertical-align: top;
  display: inline-block;
  margin-top: -4px;
}
</style>
