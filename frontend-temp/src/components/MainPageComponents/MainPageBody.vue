<template>
  <div class="slider-container" @mouseenter="pauseAutoSlide" @mouseleave="startAutoSlide">
    <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <img :src="slide.image" :alt="slide.alt">
      </div>
    </div>
    <div class="navigation">
      <button @click="prevSlide">Previous</button>
      <button @click="nextSlide">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      slides: [
        { image: 'https://via.placeholder.com/1000x350?text=Slide+1', alt: 'Slide 1' },
        { image: 'https://via.placeholder.com/1000x350?text=Slide+2', alt: 'Slide 2' },
        { image: 'https://via.placeholder.com/1000x350?text=Slide+3', alt: 'Slide 3' },
      ],
      intervalId: null,
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    startAutoSlide() {
      setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
  },
};
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