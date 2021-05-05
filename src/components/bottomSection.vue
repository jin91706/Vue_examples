<template>
  <div class="dsw-container dsw-mx-auto dsw-pt-24 dsw-px-4">
    <h1 class="dsw-text-center dsw-pb-4 dsw-font-semibold dsw-leading-36 dsw-text-xl sm:dsw-leading-lg sm:dsw-text-2xl">{{ bottom[0].title }}</h1>
    <p class="dsw-text-center dsw-pb-8 dsw-text-sm dsw-leading-30 sm:dsw-text-base sm:dsw-leading-34">{{ bottom[0].sub_title }}</p>
    <div class="dsw-flex dsw-flex-wrap">
      <div v-for="(image, index) in bottom[0].primary_images" :key="index" v-bind:class="[cols > 1 ? col2 : col1]" class="dsw-px-2">
        <img :src="image.src">
        <a :href="image.link_location" :style="link_color" class="dsw-pt-0 sm:dsw-pt-6 dsw-inline-block dsw-font-bold dsw-text-sm dsw-leading-24 sm:dsw-text-lg sm:dsw-leading-sm">{{ image.link_text }}</a>
        <p class="dsw-py-0 sm:dsw-py-2 dsw-text-sm dsw-leading-30 sm:dsw-text-base sm:dsw-leading-34">{{ image.desc }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['bottom'],
  name: 'Bottom Section',
  data() {
    return {
      link_color: {
        color: this.bottom[0].link_color
      },
      col1: 'dsw-flex-col-1',
      col2: 'dsw-flex-col-2',
      cols: this.bottom[0].primary_images.length
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
img {
  width:auto;
  height:auto;
  object-fit:contain;
}
.dsw-flex-col-2 {
  flex-grow: 0;
  flex-basis: 100%;
  margin-top: 15px;
}
.dsw-flex-col-1 {
  flex-grow: 0;
  flex-basis: 100%;
}
@media only screen and (min-width: 1024px) {
  .dsw-flex-col-2 {
    flex-grow: 0;
    flex-basis: 50%;
    margin-top: 0;
  }
}
</style>
