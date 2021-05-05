<template>
  <div class="dsw-text-white dsw-bg-image-container">
    <div class="dsw-container dsw-flex dsw-mx-auto dsw-flex-col dsw-justify-center sm:dsw-py-40 dsw-pt-10 dsw-pb-0 dsw-px-4 dsw-top-text-container">
      <h1 class="dsw-text-xl sm:dsw-text-3xl dsw-leading-36 sm:dsw-leading-xl dsw-font-semibold sm:dsw-py-4 dsw-pb-2">{{ top[0].title }}</h1>
      <div class="sm:dsw-leading-52 dsw-text-base sm:dsw-text-44xl dsw-max-w-xxs sm:dsw-max-w-md sm:dsw-py-6 dsw-pb-8 dsw-pt-2">{{ top[0].sub_title }}</div>
      <img :src="imageUrl" class="sm:dsw-hidden dsw-main-image">
      <div class="dsw-line-sm dsw-text-26xl sm:dsw-py-6 dsw-pb-0 sm:dsw-pb-6 dsw-pt-10">
        <button class="dsw-px-12 dsw-py-3 dsw-mr-6 dsw-mb-4 dsw-text-xs sm:dsw-text-lg dsw-leading-22 sm:dsw-leading-32 dsw-font-bold" :style="primaryButton">Get Brochure</button>
        <button class="dsw-px-12 dsw-py-3 dsw-text-xs sm:dsw-text-lg dsw-leading-22 sm:dsw-leading-32 dsw-font-bold" :style="primaryButton" v-on:click="getform">Get Pricing</button>
      </div>
    </div>
  </div>
  <div class="dsw-container dsw-flex dsw-mx-auto dsw-flex-col dsw-justify-center dsw-pt-4 dsw-pb-10 dsw-px-4">
    <div class="dsw-mx-auto dsw-max-w-4xl dsw-px-2">
      <p class="dsw-my-8 dsw-text-sm sm:dsw-text-base dsw-leading-30 sm:dsw-leading-34">
        {{ top[0].top_paragraph_content }}
      </p>
      <div class="dsw-mx-auto dsw-flex">
        <img src="/img/stars.png" class="dsw-mr-2" style="max-width:7rem;">
        <a href="#" class="dsw-text-sm" v-bind:style="primaryTextColor">View Reviews</a>
      </div>
    </div>
  </div>
  <div id="overlay" ref="form_overlay" v-on:click="off"></div>
  <div class="dsw-form-container dsw-p-6 sm:dsw-p-16" ref="price_form">
    <div class="dsw-close sm:dsw-top-5 sm:dsw-left-7 dsw-top-2 dsw-left-3" v-on:click="close">X</div>
    <div class="dsw-py-4 dsw-mx-4 dsw-form-title-bottom-border">
        <h1 class="dsw-text-28xl dsw-line-38">Get the latest FreeFlow&#174; pricing right here!</h1>
        <p class="dsw-text-sm">Please give us your contact info so that we can send you pricing.</p>
    </div>
    <form>
      <div>
          <div class="dsw-input-group">
              <label class="dsw-block dsw-line-18 dsw-text-xs dsw-py-2 dsw-font-bold">Which model are you interested in? <span class="dsw-text-red">*</span></label>
              <select class="dsw-w-full">
                  <option>Fantasy - Entice&#174; Premier 5 Person</option>
              </select>
          </div>
      </div>
      <div class="dsw-flex">
          <div class="dsw-input-group">
              <label class="dsw-block dsw-line-18 dsw-text-xs dsw-py-2 dsw-font-bold">First Name <span class="dsw-text-red">*</span></label>
              <input type="text">
          </div>
          <div class="dsw-input-group">
              <label class="dsw-block dsw-line-18 dsw-text-xs dsw-py-2 dsw-font-bold">Last Name <span class="dsw-text-red">*</span></label>
              <input type="text">
          </div>
      </div>
      <div>
          <div class="dsw-input-group">
              <label class="dsw-block dsw-line-18 dsw-text-xs dsw-py-2 dsw-font-bold">Email <span class="dsw-text-red">*</span></label>
              <input type="text">
          </div>
      </div>
      <div class="dsw-flex">
          <div class="dsw-input-group">
              <label class="dsw-block dsw-line-18 dsw-text-xs dsw-py-2 dsw-font-bold">Zip Code <span class="dsw-text-red">*</span></label>
              <input type="text">
          </div>
          <div class="dsw-input-group">
              <label class="dsw-block dsw-line-18 dsw-text-xs dsw-py-2 dsw-font-bold">Phone</label>
              <input type="text">
          </div>
      </div>
      <div>
          <div class="dsw-input-group">
              <label class="dsw-block dsw-line-18 dsw-text-xs dsw-py-2 dsw-font-bold">When do you plan on purchasing? <span class="dsw-text-red">*</span></label>
              <select class="dsw-w-full">
                  <option>Within 1 month</option>
              </select>
          </div>
      </div>
      <div>
          <div class="dsw-input-group">
              <label class="dsw-block dsw-line-18 dsw-text-xs dsw-py-2 dsw-font-bold">Comments</label>
              <textarea placeholder="Type something..." rows="5"></textarea>
          </div>
      </div>
      <div>
          <div class="dsw-input-group-checkbox">
              <label class="dsw-checkbox-container">Please send me the free brochure
              <input type="checkbox" checked="checked">
              <span class="dsw-checkmark"></span>
              </label>
          </div>
          <div class="dsw-input-group-checkbox">
              <label class="dsw-checkbox-container">I am interested in Financing
              <input type="checkbox">
              <span class="dsw-checkmark"></span>
              </label>
          </div>
      </div>
      <div>
          <div class="dsw-input-group dsw-text-lg dsw-line-sm">
              <input type="submit" value="Get Pricing" :style="primaryButton">
          </div>
      </div>
    </form>
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
      },
      imageUrl: this.top[0].primary_iamge
    }
  },
  mounted() {
    document.documentElement.style.setProperty('---primary-hero-image', 'url(' + this.top[0].primary_iamge + ')');
  },
  computed: {
    
  },
  methods: {
    getform: function(event) {
      this.$refs.price_form.style.right = '0px';
      this.$refs.form_overlay.style.display = 'block';
    },
    off: function(event) {
      this.$refs.form_overlay.style.display = 'none';
      this.$refs.price_form.style.right = '-950px';
    },
    close: function(event) {
      this.$refs.form_overlay.style.display = 'none';
      this.$refs.price_form.style.right = '-950px';
    }
  }
}
</script>
<style scoped>
input {
  border: 1px solid #A0AEC0;
  background-color: #EDF2F7;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
}
input[type="submit"] {
  width: 35%;
  min-width: 250px;
  color: #fff;
}
select, textarea {
  border: 1px solid #A0AEC0;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
}
.dsw-input-group {
  padding: 15px;
  flex-grow: 1;
}
.dsw-input-group-checkbox {
  padding: 5px 15px;
  flex-grow: 1;
}
.dsw-text-red {
  color: red;
}
.dsw-close {
  position: absolute;
  cursor: pointer;
}
.dsw-bg-image-container {
  background-image: unset;
}
button {
  min-width: 100%;
  color: #fff !important
}
.dsw-top-text-container {
  color: #202020;
}
.dsw-main-image {
  min-height: 250px;
  object-fit: cover;
}
@media only screen and (min-width: 640px) {
  .dsw-bg-image-container {
    background-image: var(---primary-hero-image);
  }
  button {
    min-width: 250px;
  }
  .dsw-top-text-container {
    color: #fff;
  }
}
.dsw-form-title-bottom-border {
  border-bottom: 1px solid #D8D8D8
}
.dsw-checkbox-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.dsw-checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.dsw-checkmark {
  position: absolute;
  top: 3px;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fff;
  border: 1px solid #A0AEC0;
}
.dsw-checkbox-container input:checked ~ .dsw-checkmark {
  background-color: #4A5568;
}
.dsw-checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.dsw-checkbox-container input:checked ~ .dsw-checkmark:after {
  display: block;
}
.dsw-checkbox-container .dsw-checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.dsw-form-container {
  position: absolute;
  top: 0;
  right: -950px;
  max-width:950px;
  width:100%;
  min-width:362px;
  margin:0 auto;
  background-color:#fff;
  color:#4A5568;
  z-index:5;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
#overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
}
</style>
