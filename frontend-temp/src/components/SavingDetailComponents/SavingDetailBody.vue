<template>
  <div class="saving">
    <div class="logo">
      <div>
        <p class="saving-product">
          {{ savingProduct }}
        </p> 
        <p class="bank-name">
          {{ bankName }}
        </p>
      </div>
      <img v-if="saving && saving.kor_co_nm" :src="'/assets/BankIcons/' + saving.kor_co_nm + '.png'" alt="#" width="42" height="42">
    </div>
    <div class="rate">
      <p class="best">
        최고금리
        <p>{{ savingIntrRate2.toFixed(2) }}%</p>
      </p>
      <p class="base">
        기본금리
        <p>{{ savingIntrRate.toFixed(2) }}%</p>
      </p>
      <button class="join">
        가입하기
      </button>
    </div>
  </div>
  <div class="plus-data">
    <h3>상품 안내</h3>
    <dl>
      <dt>가입방법</dt>
      <dd>{{ saving.join_way }}</dd>
      <dt>우대조건</dt>
      <dd v-html="specialCondition"></dd>    
      <dt>가입대상</dt>
      <dd>{{ saving.join_member }}</dd>          
      <dt>최고한도</dt>
      <dd v-if="maxLimit">{{ maxLimit }}</dd>
      <dd v-else>없음</dd>
      <dt>만기이자</dt>
      <dd v-html="maturityInterest"></dd>
      <dt>기타</dt>
      <dd v-html="otherNotes"></dd>
    </dl>
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
const maxLimit = computed(() => saving.value?.max_limit || '없음')
const specialCondition = computed(() => {
  if (saving.value?.spcl_cnd) {
    return saving.value.spcl_cnd.replace(/\n/g, '<br>')
  }
  return ''
})

const maturityInterest = computed(() => {
  if (saving.value?.mtrt_int) {
    return saving.value.mtrt_int.replace(/\n/g, '<br>')
  }
  return ''
})

const otherNotes = computed(() => {
  if (saving.value?.etc_note) {
    return saving.value.etc_note.replace(/\n/g, '<br>')
  }
  return ''
})

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
.saving {  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin: 10px 4px;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* align-items: center; */
  justify-content: space-between;
}
.saving-product{
  font-size: 24px;
  font-weight: bold;
  margin: 0px;
  margin-left: 6px;
}
.bank-name{
  font-size: 15px;
  margin: 0px;
  margin-left: 6px;
}
.logo {
  display: flex;
  align-items: center;
}
.logo img {
  width: 60px;
  height: 60px;
  margin-right: 20px;
  margin-left: auto;
  margin-top: 10px;
}
.best {
  color: skyblue;
  font-size: 15px;
  margin-right: 40px;
}
.best p{
  font-weight: bold;
  font-size: 25px;
  margin: 0px;
}
.base {
  font-size: 15px;
}
.base p{
  font-weight: bold;
  font-size: 25px;
  margin: 0px;
}
.join{
  margin-left: auto;
  margin-right: 20px;
  border-radius: 8px;
  background-color: #fff;
  border: solid 1px #eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 120px;
  height: 35px;
  font-size: large;
  font-weight: bold;
  cursor: pointer;
}
.rate{
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-left: 6px;
}

.plus-data {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 8px;
  margin: 10px 4px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
}
.plus-data h3{
  border-bottom: solid 1px #eee;
  margin: 0px;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.plus-data dl{
  display: flex;
  flex-wrap: wrap;
}
.plus-data dt{
  color: #aaa;
  width: 15%;
  margin: 0px;
  margin-top: 10px;
  padding: 0px;
}
.plus-data dd{
  width: 80%;
  margin: 0px;
  /* padding: 0 10px; */
  margin-top: 10px;
}
</style>