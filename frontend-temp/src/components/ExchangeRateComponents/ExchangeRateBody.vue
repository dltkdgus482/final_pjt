<template>
  <div>
    <h1>ExchangeRateBody</h1>
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