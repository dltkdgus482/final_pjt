<template>
  <div>
    <MainPageNav />
    <div class="non-nav">
      <MainPageHeader />
      <MainPageBody />
      <MainPageFooter />
    </div>
  </div>
</template>

<script setup>
import MainPageNav from '@/components/MainPageComponents/MainPageNav.vue'
import MainPageHeader from '@/components/MainPageComponents/MainPageHeader.vue'
import MainPageBody from '@/components/MainPageComponents/MainPageBody.vue'
import MainPageFooter from '@/components/MainPageComponents/MainPageFooter.vue'

import axios from 'axios'
import { onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'

onMounted(async () => {
  const store = useCounterStore()
  axios.defaults.withCredentials = false

  const getCurrentPrice = async (market) => {
    const response = await axios.get(`https://api.upbit.com/v1/ticker?markets=${market}`)
    return response.data[0].trade_price
  }

  for (const coin in store.currentPrice) {
    const price = await getCurrentPrice(coin)
    store.currentPrice[coin] = price

    // 딜레이 추가
    await new Promise(resolve => setTimeout(resolve, 130)) // 1초 딜레이
  }

  for (const coin in store.currentPrice) {
  }
})
</script>

<style scoped>
.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>