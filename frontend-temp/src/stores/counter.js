import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const dummyData = [
    { name: '우리은행', max: '3.90', default: '3.10' },
    { name: '부산은행', max: '3.40', default: '3.30' },
    { name: '신한은행', max: '3.70', default: '3.50' },
    { name: '카카오뱅크', max: '4.50', default: '4.10' },
    { name: '하나은행', max: '2.90', default: '2.10' },
  ]

  return { dummyData }
})
