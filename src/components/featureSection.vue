<template>
  <div class="dsw-bg-gray-50 dsw-pt-24 dsw-pb-28 dsw-px-4">
    <div class="dsw-container dsw-flex dsw-mx-auto dsw-flex-col dsw-jc-mh">
      <h1 class="dsw-text-2xl dsw-text-center dsw-line-lg">Features</h1>
      <div class="dsw-mx-auto dsw-text-white dsw-py-4 dsw-feature-buttons dsw-text-26xl dsw-line-sm">
        <button class="dsw-flex sm:dsw-inline-block dsw-justify-between dsw-px-6 sm:dsw-py-2 dsw-py-4 sm:dsw-m-4 dsw-my-2" 
          @click="activeBtn = 'btn1';openMenu('1');" 
          :class="[activeBtn == 'btn1' ? 'active' : '']">Portable <i class="arrow down" ref="btn_arrow_1"></i></button>
        <div class="dsw-flex dsw-flex-wrap lg:dsw-flex-nowrap sm:dsw-my-6 dsw-my-0 sm:dsw-hidden dsw-feature-mobile-menu" ref="btn_menu_1">
          <img v-bind:src="features[0].primary_iamge" style="width:auto;height:auto;min-height:100%;width:100%;object-fit:contain;">
          <div class="dsw-pr-16 sm:dsw-pt-0 dsw-pt-10">
            <p class="dsw-font-bold dsw-text-26xl dsw-mb-8 dsw-line-sm">{{ features[0].title }}</p>
            <p class="dsw-pb-8">
              {{ features[0].sub_title }}
            </p>
          </div>
        </div>
        <button class="dsw-flex sm:dsw-inline-block dsw-justify-between dsw-px-6 sm:dsw-py-2 dsw-py-4 sm:dsw-m-4 dsw-my-2" 
          @click="activeBtn = 'btn2';openMenu('2');"
          :class="[activeBtn == 'btn2' ? 'active' : '']">Plug N Play <i class="arrow down" ref="btn_arrow_2"></i></button>
        <div class="dsw-flex dsw-flex-wrap lg:dsw-flex-nowrap sm:dsw-my-6 dsw-my-0 sm:dsw-hidden dsw-feature-mobile-menu" ref="btn_menu_2">
          <img v-bind:src="features[0].primary_iamge" style="width:auto;height:auto;min-height:100%;width:100%;object-fit:contain;">
          <div class="dsw-pr-16 sm:dsw-pt-0 dsw-pt-10">
            <p class="dsw-font-bold dsw-text-26xl dsw-mb-8 dsw-line-sm">{{ features[0].title }}</p>
            <p class="dsw-pb-8">
              {{ features[0].sub_title }}
            </p>
          </div>
        </div>
        <button class="dsw-flex sm:dsw-inline-block dsw-justify-between dsw-px-6 sm:dsw-py-2 dsw-py-4 sm:dsw-m-4 dsw-my-2" 
          @click="activeBtn = 'btn3';openMenu('3');"
          :class="[activeBtn == 'btn3' ? 'active' : '']">Energy <i class="arrow down" ref="btn_arrow_3"></i></button>
        <div class="dsw-flex dsw-flex-wrap lg:dsw-flex-nowrap sm:dsw-my-6 dsw-my-0 sm:dsw-hidden dsw-feature-mobile-menu" ref="btn_menu_3">
          <img v-bind:src="features[0].primary_iamge" style="width:auto;height:auto;min-height:100%;width:100%;object-fit:contain;">
          <div class="dsw-pr-16 sm:dsw-pt-0 dsw-pt-10">
            <p class="dsw-font-bold dsw-text-26xl dsw-mb-8 dsw-line-sm">{{ features[0].title }}</p>
            <p class="dsw-pb-8">
              {{ features[0].sub_title }}
            </p>
          </div>
        </div>
        <button class="dsw-flex sm:dsw-inline-block dsw-justify-between dsw-px-6 sm:dsw-py-2 dsw-py-4 sm:dsw-m-4 dsw-my-2" 
          @click="activeBtn = 'btn4';openMenu('4');"
          :class="[activeBtn == 'btn4' ? 'active' : '']">Upgrades <i class="arrow down" ref="btn_arrow_4"></i></button>
        <div class="dsw-flex dsw-flex-wrap lg:dsw-flex-nowrap sm:dsw-my-6 dsw-my-0 sm:dsw-hidden dsw-feature-mobile-menu" ref="btn_menu_4">
          <img v-bind:src="features[0].primary_iamge" style="width:auto;height:auto;min-height:100%;width:100%;object-fit:contain;">
          <div class="dsw-pr-16 sm:dsw-pt-0 dsw-pt-10">
            <p class="dsw-font-bold dsw-text-26xl dsw-mb-8 dsw-line-sm">{{ features[0].title }}</p>
            <p class="dsw-pb-8">
              {{ features[0].sub_title }}
            </p>
          </div>
        </div>
      </div>
      <div class="sm:dsw-flex dsw-flex-wrap lg:dsw-flex-nowrap dsw-my-6 dsw-hidden" style="justify-content:space-between">
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
      activeBtn: 'btn1'
    }
  },
  mounted() {
    document.documentElement.style.setProperty('--bg-button-color', '' + this.features[0].bg_button_color + '');
    document.documentElement.style.setProperty('--button-color', '' + this.features[0].button_color + '');
    document.documentElement.style.setProperty('--border-button-color', '' + this.features[0].border_button_color + '');
    document.documentElement.style.setProperty('--active-bg-button-color', '' + this.features[0].active_bg_button_color + '');
    document.documentElement.style.setProperty('--active-button-color', '' + this.features[0].active_button_color + '');
    document.documentElement.style.setProperty('--active-border-button-color', '' + this.features[0].active_border_button_color + '');
  },
  computed: {
    
  },
  methods: {    
    openMenu: function(num) {
      var i = num;
      if (this.$refs['btn_menu_' + i].style.maxHeight) {
        this.$refs['btn_menu_' + i].style.maxHeight = null;
        this.$refs['btn_arrow_' + i].style.transform = "rotate(-45deg)";
      } else {
        this.$refs['btn_menu_' + i].style.maxHeight = this.$refs.btn_menu_1.scrollHeight + "px";
        this.$refs['btn_arrow_' + i].style.transform = "rotate(45deg)";
      }
    }
  }
}
</script>
<style scoped>
.dsw-feature-mobile-menu {
  justify-content:space-between;
  color:#202020;
  overflow:hidden;
  max-height:0;
  transition:max-height 0.4s ease-out;
}
.dsw-feature-buttons button {
  position: relative;
  border-radius: 2px;
  min-width: 100%;
  font-weight: 900;
  text-align: left;
  background-color: var(--active-bg-button-color);
  color: var(--active-button-color);
  border: var(--active-border-button-color);
}
.dsw-feature-buttons button.active {
  border-radius: 2px;
  min-width: 100%;
  font-weight: 900;
  background-color: var(--active-bg-button-color);
  color: var(--active-button-color);
  border: var(--active-border-button-color);
}
.arrow {
  border: solid #fff;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 8px;
  margin-top: 6px;
}
.down {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transition-duration: 0.3s;
}
@media only screen and (min-width: 640px) {
  .dsw-feature-buttons button {
    min-width: 250px;
    text-align: center;
    background-color: var(--bg-button-color);
    color: var(--button-color);
    border: var(--border-button-color);
  }
  .dsw-feature-buttons button.active {
    border-radius: 2px;
    min-width: 250px;
    font-weight: 900;
  }
  .arrow {
    display: none;
  }
}
</style>