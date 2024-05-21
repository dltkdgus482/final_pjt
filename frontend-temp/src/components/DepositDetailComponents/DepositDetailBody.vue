<template>
  <div class="deposit">
    <div class="logo">
      <div>
        <p class="deposit-product">
          {{ depositProduct }}
        </p> 
        <p class="bank-name">
          {{ bankName }}
        </p>
      </div>
      <img v-if="deposit && deposit.kor_co_nm" :src="'/assets/BankIcons/' + deposit.kor_co_nm + '.png'" alt="#" width="42" height="42">
    </div>
    <div class="rate">
      <p class="best">
        최고금리
        <p>{{ depositIntrRate2.toFixed(2) }}%</p>
      </p>
      <p class="base">
        기본금리
        <p>{{ depositIntrRate.toFixed(2) }}%</p>
      </p>
    </div>
  </div>
  <div class="plus-data">
    <h3>상품 안내</h3>
    <dl>
        <dt>가입방법</dt>
        <dd>{{ deposit.join_way }}</dd>
        <dt>우대조건</dt>
        <dd>{{ deposit.spcl_cnd }}</dd>      
        <dt>가입대상</dt>
        <dd>{{ deposit.join_member }}</dd>          
        <dt>최고한도</dt>
        <dd v-if="maxLimit">{{ maxLimit }}</dd>
        <dd v-else>없음</dd>
        <!-- <dt>금리유형</dt>
        <dd v-if="deposit && deposit.depositoption_set">{{ deposit.depositoption_set[0].intr_rate_type_nm }}</dd> -->
        <dt>만기이자</dt>
        <dd>{{ deposit.mtrt_int }}</dd>
        <dt>기타</dt>
        <dd>{{ deposit.etc_note }}</dd>
    </dl>
    <!-- <p>{{ deposit }}</p> -->
    <div v-if="deposit && deposit.depositoption_set">
    <h3>금리유형별 금리</h3>
    <ul>
      <li v-for="option in deposit.depositoption_set" :key="option.id">
        {{ option.save_trm }}개월 - {{ option.intr_rate_type_nm }}: {{ option.intr_rate }}%
      </li>
    </ul>
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
const maxLimit = computed(() => deposit.value?.max_limit || '없음')

onMounted(async () => {
  axios.defaults.withCredentials = false
  
  await axios({
    method: 'GET',
    url: `${store.API_URL}/api/v1/deposits/${+route.params.depositId}/`,
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
.deposit {  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin: 10px 4px;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* align-items: center; */
  justify-content: space-between;
}
.deposit-product{
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
  font-weight: bold;
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