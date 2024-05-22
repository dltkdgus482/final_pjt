<template>
  <div>
    <div class="exchange-rate">
      <h3 class="exchange-title">환전고시환율</h3>
      <div class="box">
        <select v-model.trim="selectedCountry1" name="" id="" class="dropdown">
          <!-- <div class="flag">
            <img :src="`/assets/flagIcons/krw.svg`" alt="#" width="40px">
          </div> -->
          <option v-for="(country, index) in country_arr" :key="country.id" :value=country>
            <span>
              {{ country }}
              {{ unit_arr[index] }}
            </span>
          </option>
        </select>
        <div class="exchange">
          <input @input="calculateRate1" v-model.trim="money1" type="text" id="" name="">
          <label for="">{{ money1.toLocaleString() }} {{ unit_arr[country_arr.indexOf(selectedCountry1)] }}</label>
        </div>
      </div>

      <div class="equal">=</div>

      <div class="box">
        <select v-model.trim="selectedCountry2" name="" id="" class="dropdown">
          <!-- <img :src="`/assets/flagIcons/krw.svg`" alt="#"> -->
          <option v-for="(country, index) in country_arr" :key="country.id" :value=country>
            <span>
              {{ country }}
              {{ unit_arr[index] }}
            </span>
          </option>
        </select>
        <div class="exchange">
          <input @input="calculateRate2" v-model.trim="money2" type="text" id="" name="">
          <label for="">{{ money2.toLocaleString() }} {{ unit_arr[country_arr.indexOf(selectedCountry2)] }}</label>
        </div>
      </div>
    </div>

    <div class="header">
      <p>국가</p>
      <p>거래기준환율</p>
    </div>

    <div v-for="(country, index) in country_arr" :key="country.id">
      <div class="circular-border">
        <div class="country-box">
          <div class="country">
            <img :src="`/assets/flagIcons/${unit_arr[index].slice(0, 3).toLowerCase()}.svg`" alt="#" width="25" height="25">
            <span class="country-name">{{ country }}</span>
            <span class="country-name">{{ unit_arr[index] }}</span>
          </div>
        </div>
        <span class="time">{{ data_arr[index].deal_bas_r }}</span>
      </div>
    </div>

  </div>
</template>

<script setup>
import axios from "axios"
import { nextTick, ref, watch, onMounted } from "vue"
import { useCounterStore } from '@/stores/counter'

axios.defaults.withCredentials = false

const store = useCounterStore()
const data_arr = ref([])
const country_arr = ref([])
const unit_arr = ref([])

const selectedCountry1 = ref('한국')
const money1 = ref(1355)

const selectedCountry2 = ref('미국')
const money2 = ref(1)

onMounted(() => {
  axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/v1/exchanges',
    // headers: {
    //   'Authorization': `Token ${store.token}`,
    // },
  })
    .then((response) => {
      store.exchanges_arr = response.data
      data_arr.value = response.data
      country_arr.value = response.data.map(item => item.cur_nm.split(' ')[0])
      unit_arr.value = response.data.map(item => item.cur_unit)
      // console.log(data_arr.value)
    })
    .catch((error) => {
      console.log(error)
  })
})

const calculatedMoney2 = ref(0)
const calculatedMoney1 = ref(0)

const calculateRate1 = function () {
  money2.value = (money1.value * data_arr.value[country_arr.value.indexOf(selectedCountry1.value)].deal_bas_r / data_arr.value[country_arr.value.indexOf(selectedCountry2.value)].deal_bas_r).toFixed(2)
  // 형식 유지를 위해 toLocaleString 호출
  money2.value = parseFloat(money2.value).toLocaleString()
}

const calculateRate2 = function () {
  money1.value = (money2.value * data_arr.value[country_arr.value.indexOf(selectedCountry2.value)].deal_bas_r / data_arr.value[country_arr.value.indexOf(selectedCountry1.value)].deal_bas_r).toFixed(2)
  // 형식 유지를 위해 toLocaleString 호출
  money1.value = parseFloat(money1.value).toLocaleString()
}
</script>

<style scoped>
.exchange-rate{
  margin-bottom: 20px;
}
.box{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* padding: 10px; */
  background-color: #fff;
  border: none;
  border-radius: 8px;
  /* margin: 10px; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.dropdown{
  width: 100%;
  height: 40px;
  font-size: 17px;
  border: none;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: #eee;
  padding: 8px;
  /* margin: 10px; */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
}
.exchange{
  display: flex;
  /* justify-content: center; */
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  /* border: solid 1px #e0e0e0; */
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  margin: 10px;
  /* padding: 10px; */
  /* margin: 10px; */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
}
.exchange input{
  width: 99%;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  text-align: right;

  /* padding: 10px; */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
}
.exchange label{
  /* margin: 10px; */
  /* border: solid 1px #e0e0e0; */
  margin-right: 10px;
}
.equal{
text-align: center;
}

.circular-border {
  border-radius: 8px;
  margin: 10px 4px;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-direction: column; */
}
.country-box {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
.country{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: auto;
}
.country-name{
  margin-left: 8px;
}
.time {
  /* margin-left: 8px; */
  /* color: gray; */
  font-size: 17px;
}
.header{
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  /* border: solid 1px #e0e0e0; */
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0px 16px;
  text-decoration: none;
  font-size: 15px;
  color: black;
  margin: 5px;
  margin-top: 30px;
  height: 30px;
  justify-content: space-between;
}
</style>