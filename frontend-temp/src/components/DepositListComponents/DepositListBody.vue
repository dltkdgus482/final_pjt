<template>
  <div>
    <div v-for="(data, index) in paginatedData" :key="data.id" class="circular-border">
      <RouterLink class="router" :to="{ name: 'DepositDetailView', params: { 'depositId': index + (currentPage - 1) * itemsPerPage } }">
        <img :src="'/assets/BankIcons/' + data.kor_co_nm + '.png'" alt="#" width="42" height="42">
        <div class="bank">
          <h4>{{ data.fin_prdt_nm }}</h4>
          <p class="color">{{ data.kor_co_nm }}</p>
        </div>
        <div class="option">
          <p class="color">최고 
            <span class="numcolor">{{ data.intr_rate2.toFixed(2) }}%</span>  
          </p>
          <p>기본 
            <span>{{ data.intr_rate.toFixed(2) }}%</span>
          </p>
        </div>
      </RouterLink>
    </div>
    <div class="pagination">
        <button @click="setCurrentPage(currentPage - 10)" v-show="currentPage > 10" >
          이전
        </button>
        <button
          v-for="page in Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)"
          :key="page"
          @click="setCurrentPage(page)"
        >
          {{ page }}
        </button>
        <button @click="setCurrentPage(nextPages)" v-show="currentPage <= lastPaginatedPage">
          다음
        </button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios"
import { ref, computed, onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

onMounted(async () => {
  axios.defaults.withCredentials = false
  await axios({
    method: 'GET',
    url: `${store.API_URL}/api/v1/deposits/`,
    headers: {
      Authorization: `Token ${store.token}`,
    },
  })
  .then((response) => {
    store.deposits = response.data
  })
})

const itemsPerPage = 5
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(store.deposits.length / itemsPerPage))
const lastPaginatedPage = computed(() => Math.floor((totalPages.value - 1) / 10) * 10)
const nextPages = computed(() => Math.ceil(currentPage.value / 10) * 10 + 1)

const paginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = currentPage.value * itemsPerPage
  return store.deposits.slice(startIndex, endIndex)
})

const startPage = computed(() => Math.floor((currentPage.value - 1) / 10) * 10 + 1)
const endPage = computed(() => Math.min(startPage.value + 9, totalPages.value))

const setCurrentPage = (page) => {
  currentPage.value = page
}
</script>

<style scoped>
.circular-border {
  border-radius: 8px;
  margin: 10px 4px;
  background-color: #fff;
  padding: 4px 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.router {
  text-decoration: none;
  font-size: 14px;
  line-height: 17px;
  color: #404048;
  /* font-weight: 500; */
  display: flex;
  align-items: center;
  width: 900px;
  justify-content: space-between;
  margin: 0px;
}

/* * {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
} */
.bank {
  margin-left: 10px;
  margin-right: auto;
}

.bank .color {
  margin-top: -10px;
  color: gray;
}

.option .color{
  color: green;
}

.option .numcolor{
  color: green;
  font-size: 18px;
  font-weight: bold;
}
.option {
  /* margin-left: 150px; */
}



.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  white-space: nowrap;
  margin: 0 auto;
  max-width: 1120px;
  min-height: 56px;
  box-sizing: border-box;
}
.pagination button {
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin: 0 3px;
}
.pagination button:hover{
  background-color: #b3b3b3;
}
</style>