<template>
  <div>
    <div class="header">
      <p class="stock">종목</p>
      <p class="percent">등락률(현재가)</p>
      <p class="amount">거래량(코인/원)</p>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<style scoped>
.header{
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0px 16px;
  text-decoration: none;
  font-size: 15px;
  color: black;
  margin: 5px;
  height: 30px;
  margin-top: 20px;
}
.stock {
  margin-left: 20px;
  margin-right: 40px;
  width: 150px;
}
.percent {
  width: 160px;
}
.amount{
  margin-left: auto;
  width: 170px;
  text-align: right;
}

</style>