<template>
<div class="dsw-container dsw-gallery dsw-px-4 dsw-pt-12 dsw-pb-8 sm:dsw-pb-28">
  <div class='carousel-view'>
    <transition-group
      class='carousel'
      tag="div">
      <div
        v-for="slide in slides" 
        class='slide'
        :key="slide.id">
        <h4> {{ slide.title }} </h4>
      </div>
    </transition-group>
    <transition-group
      class='pagnation'
      tag="div">
      <div
        v-for="slide in slides" 
        class='pagnation-slide'
        @click="pagnate(slide.id)"
        :key="slide.id">
        <h4> {{ slide.title }} </h4>
      </div>
    </transition-group>
    <div class='carousel-controls'>
      <button class='carousel-controls__button' @click="previous">prev</button>
      <button class='carousel-controls__button' @click="next">next</button>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      slides: [
        {
          title: 'I am Slide A',
          id: 1
        },
        {
          title: 'I am Slide B',
          id: 2
        },
        {
          title: 'I am Slide C',
          id: 3
        },
        {
          title: 'I am Slide D',
          id: 4
        },
        {
          title: 'I am Slide E',
          id: 5
        },
        {
          title: 'I am Slide F',
          id: 6
        }
      ]
    }
  },
  mounted() {
        //var array1 = ["t0","t1","t2","t3","t4","t5"];
        //console.log(array1);
        //this.slides = this.slides.concat(this.slides.splice(0,3));
        //console.log(array1);
        console.log(this.slides);
  },
  methods: {
    next () {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);
    },
    previous () {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    },
    pagnate (num) {
        for(var i = 0; i < this.slides.length; i++) {
            if (this.slides[i].id == num) {
                //console.log('Index', i);
                
            }
        }
        //console.log(this.slides);
    }
  }
}
</script>
<style scoped>
.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagnation {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 50%;
  min-height: 5em;
}

.pagnation-slide {
  flex: 0 0 30%;
  height: 5em;
  margin: .5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1em dashed #000;
  transition: transform 0.3s ease-in-out;
}

.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  min-height: 20em;
}

.slide {
  flex: 0 0 100%;
  height: 20em;
  margin: .5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1em dashed #000;
  transition: transform 0.3s ease-in-out;
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}
.pagnation-slide:first-of-type {
  opacity: 0;
}
.pagnation-slide:last-of-type {
  opacity: 0;
}
</style>
