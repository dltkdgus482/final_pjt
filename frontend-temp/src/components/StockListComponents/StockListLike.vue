<template>

  <div class="save-type">
    <Router-link :to="{ name: 'ExchangeRateView' }">
      <button>환율</button>
    </Router-link>
    <Router-link :to="{ name: 'StockView' }">
      <button >가상화폐</button>
    </Router-link>
  </div>
</template>

<script setup>
import StockListHeader from '@/components/StockListComponents/StockListHeader.vue'
</script>

<style scoped>
/* button{
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  border: none;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 17px;
  color: black;
  cursor: pointer;
} */
.save-type{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 190px;
  border: solid 1px #eee;
  border-radius: 20px;
  margin: auto;
  margin-top: 15px;
  background-color: #fff;
  padding: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.save-type button{
  text-align: center;
  width: 85px;
  border-radius: 20px;
  background-color: #eee;
  padding: 4px;
  border: solid 1px #eee;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  cursor: pointer;
  font-size: 16px;
}
.save-type button:hover{
  background-color: #ccc;
  font-weight: bold;
}
</style>