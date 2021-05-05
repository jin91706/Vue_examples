<template>
  <div class="dsw-container dsw-flex dsw-mx-auto dsw-flex-col dsw-jc-mh dsw-pt-12 dsw-pb-8 sm:dsw-pb-28 dsw-px-4 dsw-collection-feature">
    <div class="dsw-mx-auto dsw-px-2">
      <h1 class="dsw-leading-36 dsw-text-xl sm:dsw-leading-lg sm:dsw-text-2xl dsw-text-center dsw-my-6 dsw-font-semibold">Collection Features</h1>
      <div class="dsw-mx-auto dsw-flex dsw-text-sm dsw-flex-wrap dsw-container dsw-w-full">
        <div v-for="(collection, index) in collections.products" class="dsw-text-left dsw-mx-auto dsw-flex-col-3 dsw-py-8" :key="index">
          <img :src="collection.image">
          <p class="dsw-pt-7 dsw-pb-3 dsw-font-bold sm:dsw-leading-34 sm:dsw-text-26xl dsw-collection-name" :style="primaryLink" v-html="collection.name"></p>
          <p class="dsw-leading-30 sm:dsw-text-base sm:dsw-leading-34">{{ collection.desc }}</p>   
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['collections'],
  name: 'Collection Features',
  data() {
    return {
      primaryLink: {
        color: this.collections.settings.links
      }
    }
  },
  mounted() {
  },
  computed: {
    
  },
  methods: {    

  }
}
</script>
<style scoped>
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
