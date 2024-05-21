<template>
  <div>
    <div class="deposit">
      <div class="simple-data">
        <div class="logo">
          <div>
            <p>
              {{ depositProduct }}
            </p> 
            <p>
              {{ bankName }}
            </p>
          </div>
          <img v-if="deposit && deposit.kor_co_nm" :src="'/assets/BankIcons/' + deposit.kor_co_nm + '.png'" alt="#" width="42" height="42">
        </div>
        <div class="rate">
          <p class="best">
            최고금리
            <span>{{ depositIntrRate2.toFixed(2) }}%</span>
          </p>
          <p>
            기본금리
            <span>{{ depositIntrRate.toFixed(2) }}%</span>
          </p>
        </div>
      </div>
      <div class="plus-data">
        <p>{{ deposit }}</p>
        <br>
        <p>{{ deposit.depositoption_set }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios"
import { ref, computed, onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { useRoute } from 'vue-router'

const store = useCounterStore()
const route = useRoute()
const deposit = ref({})

const bankName = computed(() => deposit.value?.kor_co_nm || '')
const depositProduct = computed(() => deposit.value?.fin_prdt_nm || '')
const depositIntrRate = computed(() => deposit.value?.intr_rate || 0)
const depositIntrRate2 = computed(() => deposit.value?.intr_rate2 || 0)

onMounted(async () => {
  axios.defaults.withCredentials = false
  await axios({
    method: 'GET',
    url: `${store.API_URL}/api/v1/deposits/${+route.params.depositId + 1}/`,
    headers: {
      Authorization: `Token ${store.token}`,
    },
  })
  .then((response) => {
    deposit.value = response.data
  })
})
</script>

<style scoped>
.detail {
  display: flex;
  border-radius: 8px;
  margin: 10px 4px;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
}

.deposit {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin: 10px 4px;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* align-items: center; */
  justify-content: space-between;
}

.simple-data {
  display: flex;
  /* justify-content: space-between; */
  align-items: stretch;
  flex-direction: column;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  margin-left: auto;
}

.logo p {
  font-size: 16px;
  line-height: 2;
}
.best {
  color: skyblue;
}
.best span{
  font-weight: bold;
  font-size: 18px;
}
.plus-data {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #ccc;
  text-align: left;
}

</style>