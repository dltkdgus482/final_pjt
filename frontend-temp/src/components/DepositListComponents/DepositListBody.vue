<template>
  <div>
    <div class="filter">
      <div class="save-type">
        <span @click.prevent="filterTotal">전체</span>
        <span @click.prevent="filterDeposits">예금</span>
        <span @click.prevent="filterSavings">적금</span>
      </div>
      <div class="chioce">
        <img @click.prevent="setCurrentIconPage(currentIconPage - 1)" class="arrow" src="/assets/arrow-left.png" alt="arrow-left">
        <div v-for="data in paginatedIconData" :key="data.id" class="bank-icon">
          <div @click.prevent="filterBank(data)">
            <img width="24px" height="24px" :src="'/assets/BankIcons/' + data + '.png'" :alt="data + 'icon'">
            <p>{{ bankObj[data] }}</p>
          </div>
        </div>
        <img @click.prevent="setCurrentIconPage(currentIconPage + 1)" class="arrow" src="/assets/arrow-right.png" alt="arrow-right">
      </div>
    </div>

    <div class="deposit-sort">
      <div>
        <span class="count" v-if="finProducts_copy && finProducts_copy.length">
          {{ finProducts_copy.length }}
        </span>
        <b>
          개
        </b>
        <select v-model="selectedOption" name="" id="" class="dropdown">
          <option value="최고 금리 순">최고 금리 순</option>
          <option value="최저 금리 순">최저 금리 순</option>
        </select>
      </div>
    </div>

    <div v-for="data in paginatedData" :key="data.id" class="circular-border">
      <RouterLink v-if="data.fin_prdt_nm.includes('예금')" class="router" :to="{ name: 'DepositDetailView', params: { 'depositId': data.id } }">
        <img :src="'/assets/BankIcons/' + data.kor_co_nm + '.png'" alt="#" width="42" height="42">
        <div class="bank">
          <!-- <p>{{data}}</p> -->
          <!-- <p>{{ index + (currentPage - 1) * itemsPerPage }}</p> -->
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
      <RouterLink v-else class="router" :to="{ name: 'SavingDetailView', params: { 'savingId': data.id } }">
        <img :src="'/assets/BankIcons/' + data.kor_co_nm + '.png'" alt="#" width="42" height="42">
        <div class="bank">
          <!-- <p>{{data}}</p> -->
          <!-- <p>{{ index + (currentPage - 1) * itemsPerPage }}</p> -->
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
import { ref, watch, computed, onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const selectedOption = ref('최고 금리 순')
const finProducts_copy = ref([])
let finProducts

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

  await axios({
    method: 'GET',
    url: `${store.API_URL}/api/v1/savings/`,
    headers: {
      Authorization: `Token ${store.token}`,
    },
  })
  .then((response) => {
    store.savings = response.data
  })
})

finProducts = computed(() => [...store.deposits, ...store.savings])
finProducts_copy.value = finProducts.value
finProducts_copy.value = finProducts_copy.value.sort((a, b) => b.intr_rate2 - a.intr_rate2)

const itemsPerPage = 8
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(finProducts_copy.value.length / itemsPerPage))
const lastPaginatedPage = computed(() => Math.floor((totalPages.value - 1) / 10) * 10)
const nextPages = computed(() => Math.ceil(currentPage.value / 10) * 10 + 1)

const paginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = currentPage.value * itemsPerPage
  return finProducts_copy.value.slice(startIndex, endIndex)
})

const startPage = computed(() => Math.floor((currentPage.value - 1) / 10) * 10 + 1)
const endPage = computed(() => Math.min(startPage.value + 9, totalPages.value))

const setCurrentPage = (page) => {
  currentPage.value = page
}

// 은행 아이콘

const iconsPerPage = 6
const currentIconPage = ref(1)

const totalIconPages = computed(() => Math.ceil(store.bankList.length / iconsPerPage))
const lastPaginatedIconPage = computed(() => Math.floor((totalIconPages.value - 1) / 10) * 10)
const nextIconPages = computed(() => Math.ceil(currentIconPage.value / 10) * 10 + 1)

const paginatedIconData = computed(() => {
  const startIconIndex = (currentIconPage.value - 1) * iconsPerPage
  const endIconIndex = currentIconPage.value * iconsPerPage
  return store.bankList.slice(startIconIndex, endIconIndex)
})

const startIconPage = computed(() => Math.floor((currentIconPage.value - 1) / 10) * 10 + 1)
const endIconPage = computed(() => Math.min(startIconPage.value + 9, totalIconPages.value))

const setCurrentIconPage = (page) => {
  if (page >= 1 && page <= totalIconPages.value) {
    currentIconPage.value = page
  }
}

const bankObj = {
  경남은행: '경남',
  광주은행: '광주',
  국민은행: 'KB국민',
  농협은행주식회사: 'NH농협',
  대구은행: '대구',
  부산은행: '부산',
  수협은행: '수협',
  신한은행: '신한',
  우리은행: '우리',
  전북은행: '전북',
  제주은행: '제주',
  '주식회사 카카오뱅크': '카카오뱅크',
  중소기업은행: 'IBK기업',
  '토스뱅크 주식회사': '토스뱅크',
  하나은행: '하나',
  한국산업은행: 'KDB산업',
  한국스탠다드차타드은행: 'SC제일',
  '주식회사 케이뱅크': '케이뱅크',
}

// 정렬 기능

watch(selectedOption, (value) => {
  if (value === '최고 금리 순') {
    finProducts_copy.value = finProducts_copy.value.sort((a, b) => b.intr_rate2 - a.intr_rate2)
  } else if (value === '최저 금리 순') {
    finProducts_copy.value = finProducts_copy.value.sort((a, b) => b.intr_rate - a.intr_rate)
  }
})

const filterTotal = function () {
  finProducts_copy.value = finProducts.value
  currentPage.value = 1
}

const filterDeposits = function () {
  finProducts_copy.value = finProducts.value.filter(finProduct => finProduct.fin_prdt_nm.includes('예금'))
  currentPage.value = 1
}

const filterSavings = function () {
  finProducts_copy.value = finProducts.value.filter(finProduct => finProduct.fin_prdt_nm.includes('적금'))
  currentPage.value = 1
}

// const depositParams = function (index, data) {
//   if (data.fin_prdt_nm.includes('예금')) {
//     return index
//   } else {
//     return index - store.deposits.length
//   }
// }

const filterBank = function (data) {
  finProducts_copy.value = finProducts.value.filter(finProduct => finProduct.kor_co_nm === data)
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

.filter{
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin: 10px 4px;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.save-type{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 120px;
  border-radius: 30px;
  margin: auto;
  margin-top: -5px;
  background-color: #f3f5f7;
  padding: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.save-type span{
  border-radius: 30px;
  background-color: #fff;
  padding: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.chioce{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
}
.bank-icon{
  border: solid 1px #d3d3d3;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 10%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
}
.bank-icon p{
  font-size: 14px;
  line-height: 2;
  margin-bottom: 0px;
}
.arrow {
  cursor: pointer;
  width: 25px;
  height: 25px;
}
.count {
  font-size: 20px;
  color: blue;
  font-weight: bold;
  margin-left: 10px;
}
.deposit-sort {
  border-radius: 8px;
  margin: 16px 4px;
  background-color: #fff;
  padding: 10px 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dropdown{
  /* border: none; */
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>