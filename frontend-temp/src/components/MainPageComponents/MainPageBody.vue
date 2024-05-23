<template>
  <div v-if="isMounted" class="slider-container">
    <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <img :src="slide.image" :alt="slide.alt">
      </div>
    </div>
    <div class="navigation">
      <button @click="prevSlide(); clearInterval(); startAutoSlide()">Previous</button>
      <button @click="nextSlide(); clearInterval(); startAutoSlide()">Next</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  setup() {
    const isMounted = ref(false)

    onMounted(() => {
      isMounted.value = true
    })

    onUnmounted(() => {
      isMounted.value = false
    })

    return {
      isMounted,
    }
  },
  data() {
    return {
      currentIndex: 0,
      slides: [].concat(...Array(100).fill([
        { image: 'https://via.placeholder.com/1000x350?text=Slide+1', alt: 'Slide 1' },
        { image: 'https://via.placeholder.com/1000x350?text=Slide+2', alt: 'Slide 2' },
        { image: 'https://via.placeholder.com/1000x350?text=Slide+3', alt: 'Slide 3' },
      ])),
      intervalId: null,
    }
  },
  mounted() {
    this.startAutoSlide()
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  },
  methods: {
    prevSlide() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.slides.length - 1
      } else {
        this.currentIndex -= 1
      }
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length
    },
    startAutoSlide() {
      this.intervalId = setInterval(() => {
        this.nextSlide()
      }, 3000)
    },
    pauseAutoSlide() {
      clearInterval(this.intervalId)
    },
  },
}
</script>

<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: auto;
  margin-top: 30px;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide img {
  width: 100%;
  height: 350px; /* Maintain the height as specified */
  object-fit: cover;
  object-position: center;
}

.navigation {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.navigation button {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

</style>