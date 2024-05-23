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
import banner1 from '/assets/banner1.png'


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
        { image: banner1, alt: 'Slide 1' },
        { image: banner1, alt: 'Slide 2' },
        { image: banner1, alt: 'Slide 3' },
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
  background-color: white; /* 흰색 배경 설정 */
}

.slide img {
  width: 1000px;
  height: 400px;
  object-fit: contain; /* 비율을 유지하면서 박스 안에 들어오도록 설정 */
  object-position: center;
  background-color: #f3f5f7; /* 흰색 배경 설정 */
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
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
}

</style>