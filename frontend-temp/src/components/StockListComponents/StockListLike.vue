<template>
  <div>
    <Router-link :to="{ name: 'StockView' }">
      <button>가상화폐</button>
    </Router-link>
    <Router-link :to="{ name: 'ExchangeRateView' }">
      <button>환율</button>
    </Router-link>
    
  </div>
</template>

<script setup>
import StockListHeader from '@/components/StockListComponents/StockListHeader.vue'
</script>

<style scoped>
button{
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  border: none;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 17px;
  color: black;
  cursor: pointer;
}
</style>