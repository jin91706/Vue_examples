<template>
  <div class="dsw-container dsw-flex dsw-mx-auto dsw-flex-col dsw-jc-mh dsw-pt-12 dsw-pb-28 dsw-px-4">
    <div class="dsw-mx-auto dsw-px-2">
      <h1 class="dsw-text-2xl dsw-text-center dsw-my-6 dsw-line-lg">View Our Models</h1>
      <div class="dsw-mx-auto dsw-flex dsw-text-sm dsw-flex-wrap dsw-container dsw-w-full">
        <div v-for="(tub, index) in tubs.products" class="dsw-text-center dsw-mx-auto dsw-flex-col-3" :key="index">
          <img src="/img/spa1.png">
          <p class="dsw-mt-6 dsw-font-semibold dsw-text-22xl" v-html="tub.name"></p>
          <p class="dsw-line-sm">{{ tub.seats }} | {{ tub.jets }}</p>
          <p class="dsw-line-sm">{{ tub.dimensions }}</p>          
          <a href="#" class="dsw-font-bold" v-bind:style="primaryLink">More ></a>
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
