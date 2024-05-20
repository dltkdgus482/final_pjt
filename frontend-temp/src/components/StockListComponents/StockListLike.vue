<template>
  <div>
    <Router-link :to="{ name: 'StockView' }">
      <button>가상화폐</button>
    </Router-link>
    <Router-link :to="{ name: 'ExchangeRateView' }">
      <button>환율</button>
    </Router-link>
    <h3>관심 종목</h3>
    <StockListHeader/>
    
  </div>
</template>

<script setup>
import StockListHeader from '@/components/StockListComponents/StockListHeader.vue'
</script>

<style scoped>

</style>