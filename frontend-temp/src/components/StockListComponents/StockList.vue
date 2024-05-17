<template>
  <div>
      <Router-link class="circular-border router" :to="{ name: 'StockDetailView', params: { stockId: coin.market } }">
        <p>{{ index }}</p>
        <img class="coin-icon" :src="`/assets/coinIcons/${coin.market.replace('KRW-', '')}.png`" alt="coinIcons">
        <p>{{ coin.korean_name }}</p>
        <p>{{ coin.market }}</p>
        <p>{{ currentPrice.toLocaleString() }} 원</p>
      </Router-link>
  </div>
</template>

<script setup>
defineProps({
  coin: Object,
  currentPrice: Number,
  index: Number,
})
</script>

<style scoped>
.coin-icon {
  width: 42px;
  height: 42px;
}
.circular-border {
  border-radius: 8px;
  margin: 10px 4px;
  background-color: #fff;
  padding: 4px 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.router {
  text-decoration: none;
  font-size: 17px;
  line-height: 17px;
  color: #404048;
  /* font-weight: 500; */
  display: flex;
  align-items: center;
}
</style>