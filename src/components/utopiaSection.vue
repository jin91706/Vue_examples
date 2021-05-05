<template>
  <div class="dsw-bg-gray-50 dsw-pt-12 dsw-pb-8 sm:dsw-pb-28 dsw-px-4 dsw-utopia">
    <div class="dsw-container dsw-flex dsw-mx-auto dsw-flex-col dsw-jc-mh">
      <h1 class="dsw-leading-36 dsw-text-xl sm:dsw-leading-lg sm:dsw-text-2xl dsw-font-semibold dsw-text-center">New Features of the Utopia<span class="dsw-copyright">&#174;</span></h1>
      <div class="sm:dsw-flex dsw-flex-wrap lg:dsw-flex-nowrap dsw-my-6 dsw-hidden">
        <img v-bind:src="utopia.primary_image" class="dsw-p-16">
        <div class="dsw-p-16">
            <div class="dsw-flex">
                <button class="dsw-mx-4 dsw-py-2 dsw-px-6 dsw-utopia-buttons active">Exterior Tour</button>
                <button class="dsw-mx-4 dsw-py-2 dsw-px-6 dsw-utopia-buttons">Underwater Video</button>
            </div>
            <div class="dsw-px-5 dsw-py-10 dsw-accordion">
                <div class="dsw-accordion-item" @click="openMenu('1')">
                    <div class="dsw-pt-5 dsw-pb-1"><i class="arrow down" ref="arrow_1"></i> <span class="dsw-pl-4 dsw-font-bold">Bar Top</span></div>
                    <div class="dsw-pl-10 dsw-accordion-content" ref="1">
                        Bar top has crisp lines with large flat surfaces and more room to set a drink.
                    </div>
                </div>
                <div class="dsw-accordion-item" @click="openMenu('2')">
                    <div class="dsw-pt-5 dsw-pb-1"><i class="arrow down" ref="arrow_2"></i> <span class="dsw-pl-4 dsw-font-bold">FreshWater Salt System Ready</span></div>
                    <div class="dsw-pl-10 dsw-accordion-content" ref="2">
                        A cartridge-based system that automatically generates chlorine from salt for fresh, clean water for a full year. Starter kit required.
                    </div>
                </div>
                <div class="dsw-accordion-item" @click="openMenu('3')">
                    <div class="dsw-pt-5 dsw-pb-1"><i class="arrow down" ref="arrow_3"></i> <span class="dsw-pl-4 dsw-font-bold">Stainless Steel</span></div>
                    <div class="dsw-pl-10 dsw-accordion-content" ref="3">
                        Dimensional stainless steel trim and black spacer highlight the spa's appeal.
                    </div>
                </div>
                <div class="dsw-accordion-item" @click="openMenu('4')">
                    <div class="dsw-pt-5 dsw-pb-1"><i class="arrow down" ref="arrow_4"></i> <span class="dsw-pl-4 dsw-font-bold">Avante</span></div>
                    <div class="dsw-pl-10 dsw-accordion-content" ref="4">
                        Durable and innovative Avante cabinetry is available in three earth mineral hues.
                    </div>
                </div>
                <div class="dsw-accordion-item" @click="openMenu('5')">
                    <div class="dsw-pt-5 dsw-pb-1"><i class="arrow down" ref="arrow_5"></i> <span class="dsw-pl-4 dsw-font-bold">ABS Base Pan</span></div>
                    <div class="dsw-pl-10 dsw-accordion-content" ref="5">
                        The new ABS base pan beautifully frames the bottom of the spa and minimizes ground contact to protect components, improve energy efficiency and add support.
                    </div>
                </div>
                <div class="dsw-accordion-item" @click="openMenu('6')">
                    <div class="dsw-pt-5 dsw-pb-1"><i class="arrow down" ref="arrow_6"></i> <span class="dsw-pl-4 dsw-font-bold">Cabinet Lighting</span></div>
                    <div class="dsw-pl-10 dsw-accordion-content" ref="6">
                        The new ABS base pan beautifully frames the bottom of the spa and minimizes ground contact to protect components, improve energy efficiency and add support.
                    </div>
                </div>
                <div class="dsw-accordion-item" @click="openMenu('7')">
                    <div class="dsw-pt-5 dsw-pb-1"><i class="arrow down" ref="arrow_7"></i> <span class="dsw-pl-4 dsw-font-bold">Diagnostic Logo</span></div>
                    <div class="dsw-pl-10 dsw-accordion-content" ref="7">
                        A functional diagnostic logo light shows that the spa is working at the proper temerature and whether it needs servicing.
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['utopia'],
  name: 'Utopia Section',
  data() {
    return {
      active: null
    }
  },
  mounted() {
      document.documentElement.style.setProperty('--accordion-color', '' + this.utopia.accordion_color + '');
  },
  computed: {
    
  },
  methods: {    
    openMenu: function(num) {
      if (this.active) {
        this.$refs[this.active].style.maxHeight = null;
        this.$refs['arrow_' + this.active].style.transform = "rotate(-45deg)";
      }
      if (this.$refs[num].style.maxHeight) {
        this.$refs[num].style.maxHeight = null;
        this.$refs['arrow_' + num].style.transform = "rotate(-45deg)";
      } else {
        this.$refs[num].style.maxHeight = this.$refs[num].scrollHeight + "px";
        this.$refs['arrow_' + num].style.transform = "rotate(45deg)";
      }
      this.active = num;
    }
  }
}
</script>
<style scoped>
span.dsw-copyright {
  font-size: 28px;
  vertical-align: top;
  display: inline-block;
  margin-top: -4px;
}
.dsw-accordion {
    color: var(--accordion-color);
}
.dsw-accordion-item {
    border-top: 1px solid #CDCDCD;
    cursor: pointer;
}
.dsw-accordion-item:last-of-type {
    border-bottom: 1px solid #CDCDCD;
}
.dsw-accordion-content {
    color:#202020;
    overflow:hidden;
    max-height:0;
    margin-bottom:15px;
    transition:max-height 0.4s ease-out;
}
.dsw-utopia img {
    width:100%;
    height:auto;
    max-width:1000px;
    min-height:100%;
    object-fit:contain;
}
button.dsw-utopia-buttons {
  position: relative;
  border-radius: 2px;
  min-width: 100%;
  font-weight: 900;
  text-align: left;
  background-color: var(--active-bg-button-color);
  color: var(--active-button-color);
  border: var(--active-border-button-color);
}
button.dsw-utopia-buttons.active {
  border-radius: 2px;
  min-width: 100%;
  font-weight: 900;
  background-color: var(--active-bg-button-color);
  color: var(--active-button-color);
  border: var(--active-border-button-color);
}
.arrow {
  border: solid var(--accordion-color);
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 5px;
  margin-top: 6px;
}
.down {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transition-duration: 0.3s;
}
@media only screen and (min-width: 640px) {
  button.dsw-utopia-buttons {
    min-width: 300px;
    text-align: center;
    background-color: var(--bg-button-color);
    color: var(--button-color);
    border: var(--border-button-color);
  }
  button.dsw-utopia-buttons.active {
    border-radius: 2px;
    min-width: 300px;
    font-weight: 900;
  }
}
</style>