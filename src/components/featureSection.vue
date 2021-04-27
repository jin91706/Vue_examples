<template>
  <div class="dsw-bg-gray-50 dsw-pt-24 dsw-pb-28 dsw-px-4">
    <div class="dsw-container dsw-flex dsw-mx-auto dsw-flex-col dsw-jc-mh">
      <h1 class="dsw-text-2xl dsw-text-center dsw-line-lg">Features</h1>
      <div class="dsw-mx-auto dsw-text-white dsw-text-center dsw-py-4 dsw-feature-buttons dsw-text-26xl dsw-line-sm">
        <button class="dsw-px-6 dsw-py-2 dsw-m-4 active" @click="activeBtn = 'btn1'" 
          :style="[activeBtn == 'btn1' ? primaryActiveButtonColors : primaryButtonColors]">Portable</button>
        <button class="dsw-px-6 dsw-py-2 dsw-m-4" @click="activeBtn = 'btn2'" 
          :style="[activeBtn == 'btn2' ? primaryActiveButtonColors : primaryButtonColors]">Plug N Play</button>
        <button class="dsw-px-6 dsw-py-2 dsw-m-4" @click="activeBtn = 'btn3'" 
          :style="[activeBtn == 'btn3' ? primaryActiveButtonColors : primaryButtonColors]">Energy</button>
        <button class="dsw-px-6 dsw-py-2 dsw-m-4" @click="activeBtn = 'btn4'"
          :style="[activeBtn == 'btn4' ? primaryActiveButtonColors : primaryButtonColors]">Upgrades</button>
      </div>
      <div class="dsw-flex dsw-flex-wrap lg:dsw-flex-nowrap dsw-my-6" style="justify-content:space-between">
        <div class="dsw-pr-16">
          <p class="dsw-font-bold dsw-text-26xl dsw-mb-8 dsw-line-sm">{{ features[0].title }}</p>
          <p class="dsw-pb-8">
            {{ features[0].sub_title }}
          </p>
        </div>
        <img v-bind:src="features[0].primary_iamge" style="width:auto;height:auto;min-height:100%;width:100%;object-fit:contain;">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['features'],
  name: 'Feature Section',
  data() {
    return {
      primaryButtonColors: {
        backgroundColor: this.features[0].bg_button_color,
        color: this.features[0].button_color,
        border: this.features[0].border_button_color
      },
      primaryActiveButtonColors: {
        backgroundColor: this.features[0].active_bg_button_color,
        color: this.features[0].active_button_color,
        border: this.features[0].active_border_button_color
      },
      activeBtn: 'btn1'
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
.dsw-feature-buttons button {
  border-radius: 2px;
  min-width:250px;
  font-weight: 900;
}
</style>