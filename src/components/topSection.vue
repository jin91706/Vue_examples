<template>
  <div class="dsw-text-white dsw-bg-image-container" v-bind:style="primaryImage">
    <div class="dsw-container dsw-flex dsw-mx-auto dsw-flex-col dsw-jc-mh dsw-py-40 dsw-px-4">
      <h1 class="dsw-text-3xl dsw-line-xl dsw-py-4">{{ top[0].title }}</h1>
      <div class="dsw-text-44xl dsw-max-w-md dsw-py-6">{{ top[0].sub_title }}</div>
      <div class="dsw-line-sm dsw-text-26xl dsw-py-6">
        <button class="dsw-px-12 dsw-py-3 dsw-mr-6 dsw-mb-4" v-bind:style="primaryButton">Get Brochure</button>
        <button class="dsw-px-12 dsw-py-3" v-bind:style="primaryButton">Get Pricing</button>
      </div>
    </div>
  </div>
  <div class="dsw-container dsw-flex dsw-mx-auto dsw-flex-col dsw-jc-mh dsw-pt-4 dsw-pb-10 dsw-px-4">
    <div class="dsw-mx-auto dsw-max-w-4xl dsw-px-2">
      <p class="dsw-my-8">
        {{ top[0].top_paragraph_content }}
      </p>
      <div class="dsw-mx-auto dsw-flex">
        <img src="/img/stars.png" class="dsw-mr-2" style="max-width:7rem;">
        <a href="#" class="dsw-text-sm" v-bind:style="primaryTextColor">View Reviews</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['top'],
  name: 'Top Section',
  data() {
    return {
      primaryButton: {
        backgroundColor: this.top[0].bg_button_color
      },
      primaryTextColor: {
        color: this.top[0].view_reviews_color
      },
      primaryImage: {
        backgroundImage: `url(${this.top[0].primary_iamge})`
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
