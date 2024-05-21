<template>
  <div>
    <div>

    </div>
    <img v-if="exchangeRate && exchangeRate.kor_co_nm" :src="'/assets/BankIcons/' + exchangeRate.kor_co_nm + '.png'" alt="#" width="42" height="42">
  </div>
</template>

<script setup>
import axios from "axios"
import { onMounted } from "vue"
import { useCounterStore } from '@/stores/counter'

axios.defaults.withCredentials = false

const store = useCounterStore()

onMounted(() => {
  axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/v1/exchanges',
    headers: {
      'Authorization': `Token ${store.token}`,
    },
  })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    
  })
})
</script>

<style scoped>

</style>