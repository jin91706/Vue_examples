<template>
  <div class="dsw-container dsw-flex dsw-mx-auto dsw-flex-col dsw-jc-mh dsw-pt-12 dsw-pb-8 sm:dsw-pb-28 dsw-px-4">
    <div class="dsw-mx-auto dsw-px-2">
      <h1 class="dsw-leading-36 dsw-text-xl sm:dsw-leading-lg sm:dsw-text-2xl dsw-font-semibold dsw-text-center dsw-my-6">View Our Models</h1>
      <div class="dsw-mx-auto dsw-flex dsw-text-sm dsw-flex-wrap dsw-container dsw-w-full">
        <div v-for="(tub, index) in tubs.products" class="dsw-text-center dsw-mx-auto dsw-flex-col-3" :key="index">
          <img :src="tub.image">
          <p class="dsw-mt-6 dsw-font-semibold dsw-text-22xl sm:dsw-leading-34" v-html="tub.name"></p>
          <p class="dsw-leading-sm dsw-text-sm">{{ tub.seats }} | {{ tub.jets }}</p>
          <p class="dsw-leading-sm dsw-text-sm">{{ tub.dimensions }}</p>          
          <a href="#" class="dsw-font-bold dsw-text-sm dsw-leading-sm" v-bind:style="primaryLink">More ></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['tubs'],
  name: 'View Models',
  data() {
    return {
      primaryLink: {
        color: this.tubs.settings.links
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
img {
  width:100%;
}
@media only screen and (min-width: 1024px) {
  .dsw-flex-col-3 {
    flex-grow: 0;
    flex-basis: 30%;
  }
  img {
    width:auto;
  }
}
</style>
