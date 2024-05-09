<template>
  <div>
    <div v-for="data in dummyData" :key="data.id" class="circular-border">
      <a href="#">
        <img src="../assets/SB_WOORIFIN_Profile.png" alt="#" width="42" height="42">
        <div class="bank">
          <h3>{{ data.name }}</h3>
          <p>누구나가입 / 누구나이용</p>
        </div>
        <div class="option">
          <p>최고 {{ data.max }}%</p>
          <p>기본 {{ data.default }}%</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const dummyData = [
  { name: '우리은행', max: '3.90', default: '3.10' },
  { name: '우리은행', max: '3.90', default: '3.10' },
  { name: '우리은행', max: '3.90', default: '3.10' },
  { name: '우리은행', max: '3.90', default: '3.10' },
  { name: '우리은행', max: '3.90', default: '3.10' },
]
</script>

<style scoped>
.circular-border {
  border: 1px solid #000;
  border-radius: 8px;
  margin: 8px 4px;
  background-color: #fff;
  padding: 4px 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

a {
  text-decoration: none;
  font-size: 17px;
  line-height: 17px;
  color: #404048;
  font-weight: 500;
  display: flex;
  align-items: center;
}

</style>