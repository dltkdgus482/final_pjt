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

  await axios({
    method: 'GET',
    url: `${store.API_URL}/api/v1/deposits/`,
    // headers: {
    //   Authorization: `Token ${store.token}`,
    // },
  })
  .then((response) => {
    store.deposits = response.data
  })

  await axios({
    method: 'GET',
    url: `${store.API_URL}/api/v1/savings/`,
    // headers: {
    //   Authorization: `Token ${store.token}`,
    // },
  })
  .then((response) => {
    store.savings = response.data
  })

  const getCurrentInfo = async (market) => {
    try {
      const response = await axios.get(`https://api.upbit.com/v1/ticker?markets=${market}`)
      // console.log(response.data[0])
      return { 
        price: response.data[0].trade_price, 
        signed_change_rate: response.data[0].signed_change_rate,
        acc_trade_price_24h: response.data[0].acc_trade_price_24h, 
        acc_trade_volume_24h: response.data[0].acc_trade_volume_24h,
      }
    }

    catch (error) {
      return { 
        price: null, 
        signed_change_rate: null,
        acc_trade_price_24h: null, 
        acc_trade_volume_24h: null,
      }
    }
  }

  for (const coin in store.currentPrice) {
    const { price, signed_change_rate, acc_trade_price_24h, acc_trade_volume_24h } = await getCurrentInfo(coin)

    if (price != null) {
      store.currentPrice[coin] = price
    }

    if (signed_change_rate != null) {
      store.currentChangeRate[coin] = signed_change_rate
    }

    if (acc_trade_price_24h != null) {
      store.currentTradePriceKRW[coin] = acc_trade_price_24h
    }

    if (acc_trade_volume_24h != null) {
      store.currentTradePriceBTC[coin] = acc_trade_volume_24h
    }

    // 딜레이 추가
    await new Promise(resolve => setTimeout(resolve, 130)) // 1초 딜레이
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