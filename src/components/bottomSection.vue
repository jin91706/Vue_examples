<template>
  <div class="dsw-container dsw-mx-auto dsw-pt-24 dsw-px-4">
    <h1 class="dsw-text-2xl dsw-text-center dsw-pb-4 dsw-line-lg">{{ bottom[0].title }}</h1>
    <p class="dsw-text-center dsw-pb-8">{{ bottom[0].sub_title }}</p>
    <img :src="bottom[0].primary_iamge" style="width:auto;height:auto;min-height:100%;width:100%;object-fit:contain;">
    <a :href="bottom[0].link_location" :style="link_color" class="dsw-pt-6 dsw-inline-block dsw-font-bold dsw-text-26xl dsw-line-sm">{{ bottom[0].link_text }}</a>
    <p class="dsw-py-2">{{ bottom[0].bottom_paragraph }}</p>
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
