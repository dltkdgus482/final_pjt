<template>
  <div>
    <div class="saving">
      <div class="simple-data">
        <div class="logo">
          <div>
            <p>
              {{ savingProduct }}
            </p> 
            <p>
              {{ bankName }}
            </p>
          </div>
          <img v-if="saving && saving.kor_co_nm" :src="'/assets/BankIcons/' + saving.kor_co_nm + '.png'" alt="#" width="42" height="42">
        </div>
        <div class="rate">
          <p class="best">
            최고금리
            <span>{{ savingIntrRate2.toFixed(2) }}%</span>
          </p>
          <p>
            기본금리
            <span>{{ savingIntrRate.toFixed(2) }}%</span>
          </p>
        </div>
      </div>
      <div class="plus-data">
        <p>{{ saving }}</p>
        <br>
        <p>{{ saving.savingoption_set }}</p>
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
const saving = ref({})

const bankName = computed(() => saving.value?.kor_co_nm || '')
const savingProduct = computed(() => saving.value?.fin_prdt_nm || '')
const savingIntrRate = computed(() => saving.value?.intr_rate || 0)
const savingIntrRate2 = computed(() => saving.value?.intr_rate2 || 0)

onMounted(async () => {
  axios.defaults.withCredentials = false
  
  await axios({
    method: 'GET',
    url: `${store.API_URL}/api/v1/savings/${+route.params.savingId}/`,
    headers: {
      Authorization: `Token ${store.token}`,
    },
  })
  .then((response) => {
    saving.value = response.data
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

.saving {
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