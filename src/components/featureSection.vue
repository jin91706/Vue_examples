<template>
  <div class="dsw-bg-gray-50 dsw-pt-12  dsw-pb-8 sm:dsw-pb-28 dsw-px-4">
    <div class="dsw-container dsw-flex dsw-mx-auto dsw-flex-col dsw-jc-mh">
      <h1 class="dsw-leading-36 dsw-text-xl sm:dsw-leading-lg sm:dsw-text-2xl dsw-font-semibold dsw-text-center">Features</h1>
      <div class="dsw-mx-auto dsw-text-white dsw-py-4 dsw-feature-buttons dsw-text-26xl dsw-line-sm">
        <div v-for="(item, index) in features.items" :key="index" class="sm:dsw-inline-block">
          <button class="dsw-flex sm:dsw-inline-block dsw-justify-between 
            dsw-px-6 sm:dsw-py-2 dsw-py-4 sm:dsw-m-4 dsw-my-2 dsw-text-sm dsw-leading-24 sm:dsw-text-lg sm:dsw-leading-sm dsw-font-bold"
            @click="activeBtn = 'btn' + index; openMenu(index);" 
            :class="[activeBtn == 'btn' + index ? 'active' : '']">{{ item.button }} <i class="arrow down" :ref="'btn_arrow_' + index"></i></button>
          <div class="dsw-flex dsw-flex-wrap lg:dsw-flex-nowrap sm:dsw-my-6 dsw-my-0 sm:dsw-hidden dsw-feature-mobile-menu" :ref="'btn_menu_' + index">
            <img v-bind:src="item.primary_iamge">
            <div class="dsw-pr-16 sm:dsw-pt-0 dsw-pt-10">
              <p class="dsw-mb-8 dsw-font-bold dsw-text-sm dsw-leading-24">{{ item.title }}</p>
              <p class="dsw-pb-8 dsw-text-sm dsw-leading-30">
                {{ item.sub_title }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-for="(item, index) in features.items" :key="index" class="dsw-flex-wrap lg:dsw-flex-nowrap dsw-my-6 dsw-hidden dsw-justify-between dsw-flex-col-2" 
        :class="[activeBtn == 'btn' + index ? 'sm:dsw-flex' : '']">
        <div class="dsw-pr-16">
          <p class="dsw-mb-8 dsw-font-bold dsw-text-26xl dsw-leading-sm">{{ item.title }}</p>
          <p class="dsw-pb-8 sm:dsw-text-base sm:dsw-leading-34">
            {{ item.sub_title }}
          </p>
        </div>
        <img v-bind:src="item.primary_iamge">
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
      activeBtn: 'btn0'
    }
  },
  mounted() {
    document.documentElement.style.setProperty('--bg-button-color', '' + this.features.bg_button_color + '');
    document.documentElement.style.setProperty('--button-color', '' + this.features.button_color + '');
    document.documentElement.style.setProperty('--border-button-color', '' + this.features.border_button_color + '');
    document.documentElement.style.setProperty('--active-bg-button-color', '' + this.features.active_bg_button_color + '');
    document.documentElement.style.setProperty('--active-button-color', '' + this.features.active_button_color + '');
    document.documentElement.style.setProperty('--active-border-button-color', '' + this.features.active_border_button_color + '');
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
        this.$refs['btn_menu_' + i].style.maxHeight = this.$refs['btn_menu_' + i].scrollHeight + "px";
        this.$refs['btn_arrow_' + i].style.transform = "rotate(45deg)";
      }
    }
  }
}
</script>
<style scoped>
img {
  width:auto;
  height:auto;
  object-fit:contain;
}
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
  flex: 0 0;
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
  margin-top: 2px;
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
@media only screen and (min-width: 1800px) {
  img {
    width: 888px;
    height: 480px;
  }
}
</style>
