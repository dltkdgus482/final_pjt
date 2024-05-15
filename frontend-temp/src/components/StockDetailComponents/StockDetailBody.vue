<template>
  <div>
    <span class="type">
      <button @click="getData('minutes', '/1', 30)">1분</button>
      <button @click="getData('minutes', '/15', 24)">15분</button>
      <button @click="getData('minutes', '/60', 24)">1시간</button>
      <button @click="getData('days', '', 30)">1일</button>
      <button @click="getData('weeks', '', 24)">1주</button>
      <button @click="getData('months', '', 12)">1달</button>
    </span>
    <hr>
    <canvas id="bitcoinChart"></canvas>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Chart, registerables } from 'chart.js'
axios.defaults.withCredentials = false

Chart.register(...registerables)

const route = useRoute()
const CryptoData = ref([])
const currentDate = new Date().toISOString()
const stockId = route.params.stockId
let chart = null

const getData = function (type, unit, count) {
  axios({
    method: 'GET',
    url: `https://api.upbit.com/v1/candles/${type}${unit}?market=${stockId}&count=${count}&to=${currentDate}`,
    headers: {
      'accept': 'application/json'
    }
  }).then((response) => {
    chart?.destroy()
    CryptoData.value = response.data
    const dates = CryptoData.value.map(item => item.candle_date_time_kst).reverse()
    const prices = CryptoData.value.map(item => item.trade_price).reverse()

    const ctx = document.getElementById('bitcoinChart').getContext('2d')
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: 'Bitcoin Price',
          data: prices,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        // responsive: false,
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    })
  })
}

onMounted(() => {
  getData('days', '', 30)
})
</script>

<style scoped>
#bitcoinChart {
  width: 100%;
  height: 300px;
}

.type {
  align-items: center;
  width: 150px;
}
button{
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 10px;
  cursor: pointer;
}
</style>