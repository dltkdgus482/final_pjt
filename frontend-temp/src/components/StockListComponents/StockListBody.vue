<template>
  <div>
    <h3>TOP 종목</h3>
    <div>
      <StockListHeader />
      <StockList 
        v-for="(coin, index) in paginatedData"
        :key="coin.market"
        :coin="coin"
        :currentPrice="currentPrice[coin.market]"
        :index="index + (currentPage - 1) * itemsPerPage"
      />
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
import { watch, ref, computed, onMounted, onUnmounted } from 'vue'
import { useCounterStore } from '@/stores/counter'
import StockList from '@/components/StockListComponents/StockList.vue'
import StockListHeader from '@/components/StockListComponents/StockListHeader.vue'

const store = useCounterStore()
const itemsPerPage = 5
const currentPage = ref(1)
let ws = null
let currentCoinList = ref({})

const currentPrice = store.currentPrice

const totalPages = computed(() => Math.ceil(store.coinData.length / itemsPerPage))
const lastPaginatedPage = computed(() => Math.floor((totalPages.value - 1) / 10) * 10)
const nextPages = computed(() => Math.ceil(currentPage.value / 10) * 10 + 1)

const startPage = computed(() => Math.floor((currentPage.value - 1) / 10) * 10 + 1)
const endPage = computed(() => Math.min(startPage.value + 9, totalPages.value))

const setCurrentPage = (page) => {
  currentPage.value = page
}

const paginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = currentPage.value * itemsPerPage
  currentCoinList.value = store.coinData.slice(startIndex, endIndex)
  return store.coinData.slice(startIndex, endIndex)
})

onMounted(() => {
  ws = new WebSocket('wss://api.upbit.com/websocket/v1')

  const sendWebSocketMessage = async () => {
    for (const coin of currentCoinList.value) {
      ws.send(JSON.stringify([
        {"ticket":"test"},
        {"type":"ticker","codes":[coin.market]},
        {"format":"SIMPLE"}
      ]))
      await new Promise(resolve => setTimeout(resolve, 300)) // 1초 딜레이
    }
  }

  ws.onopen = () => {
    sendWebSocketMessage()
  }

  ws.onmessage = (msg) => {
    const reader = new FileReader()
    reader.onload = function(event) {
      const data = JSON.parse(event.target.result)
      if (data.tp) {
        currentPrice[data.cd] = data.tp
      }
    }
    reader.readAsText(msg.data)
  }

  // currentCoinList의 변경을 감지하고 웹소켓 메시지를 재생성합니다.
  watch(currentCoinList, sendWebSocketMessage)
})

onUnmounted(() => {
  if (ws) {
    ws.close()
  }
})
</script>

<style scoped>
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
.pagination button:hover {
  background-color: gray;
  color: #fff;
}

.list{
  border-radius: 8px;
  /* border: 1px solid black; */
  align-items: center;
  justify-content: space-between;
  /* background-color: #fff; */
  padding: 0px 20px;
  text-decoration: none;
  font-size: 17px;
  color: black;
  display: flex;
  margin: 5px;
  align-items: center;
  flex-direction: column;
}
.coin-list {
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 0px 20px;
  text-decoration: none;
  font-size: 17px;
  color: black;
  display: flex;
  margin-bottom: 10px;
  width: 100%;
  align-items: center;
}
</style>
