<template>
  <div>
    <div v-for="(data, index) in paginatedData" :key="data.id" class="circular-border">
      <div class="country-box">
        <div class="country">
          <img src="/assets/flagIcons/aed.svg" alt="#" width="25" height="25">
          <span class="country-name">{{ data.fin_prdt_nm }}</span>
        </div>
        <span class="time">{{ data.kor_co_nm }}</span>
      </div>

      <span class="option">{{ data.intr_rate2.toFixed(2) }}%</span>  

    </div>
  </div>
</template>

<script setup>
</script>





<style scoped>
.circular-border {
  border-radius: 8px;
  margin: 10px 4px;
  background-color: #fff;
  padding: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-direction: column; */
}
.country-box {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
.country{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: auto;
}
.country-name{
  margin-left: 8px;
}
.time {
  /* margin-left: 8px; */
  color: gray;
  font-size: 12px;
}

.option {
  /* margin-left: 150px; */
}
</style>