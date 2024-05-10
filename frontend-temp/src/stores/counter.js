import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const dummyData = ref([
    { name: '우리은행', max: '3.90', default: '3.10' },
    { name: '부산은행', max: '3.40', default: '3.30' },
    { name: '신한은행', max: '3.70', default: '3.50' },
    { name: '카카오뱅크', max: '4.50', default: '4.10' },
    { name: '하나은행', max: '2.90', default: '2.10' },
  ])

  const dummyArticle = ref([
    { title: '테스트1', content: '테스트1입니다.', uploadDate: '2021-10-01', author: '홍길동'},
    { title: '테스트2', content: '테스트2입니다.', uploadDate: '2021-10-02', author: '홍길동'},
    { title: '테스트3', content: '테스트3입니다.', uploadDate: '2021-10-03', author: '홍길동'},
    { title: '테스트4', content: '테스트4입니다.', uploadDate: '2021-10-04', author: '홍길동'},
    { title: '테스트5', content: '테스트5입니다.', uploadDate: '2021-10-05', author: '홍길동'},
  ])

  return { dummyData, dummyArticle }
})
