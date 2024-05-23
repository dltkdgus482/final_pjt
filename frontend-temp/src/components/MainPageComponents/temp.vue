<template>
  <div class="slider-container">
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
        { image: 'https://via.placeholder.com/800x300?text=Slide+1', alt: 'Slide 1' },
        { image: 'https://via.placeholder.com/800x300?text=Slide+2', alt: 'Slide 2' },
        { image: 'https://via.placeholder.com/800x300?text=Slide+3', alt: 'Slide 3' },
      ],
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
      }, 3000);
    },
  },
};
</script>

<style scoped>
.slider-container {
  position: relative;
  width: 800px;
  overflow: hidden;
  margin: auto;
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


<!-- <template>
  <div class="main-page">
    <div class="promotion">
      <div>홍보</div>
    </div>
    <div class="suggestion">
      <div>추천</div>
    </div>
    <div class="hot-goods">
      <div>홍보</div>
    </div>
    <div class="hot-article">
      <div>조회수높은 게시글</div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.main-page{
  /* border-radius: 8px;
  margin: 8px 4px;
  background-color: #fff;
  padding: 4px 22px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
}
.main-page > div{
  border-radius: 8px;
  margin: 8px 4px;
  background-color: #fff;
  padding: 4px 22px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-self: start;
  width: 100%;
  flex-direction: column;
}
/* .promotion{
  border-radius: 8px;
  margin: 8px 4px;
  background-color: #fff;
  padding: 4px 22px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.suggestion{
  border-radius: 8px;
  margin: 8px 4px;
  background-color: #fff;
  padding: 4px 22px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.hot-goods{
  border-radius: 8px;
  margin: 8px 4px;
  background-color: #fff;
  padding: 4px 22px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.hot-article{
  border-radius: 8px;
  margin: 8px 4px;
  background-color: #fff;
  padding: 4px 22px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
} */
</style> -->