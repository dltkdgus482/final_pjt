<template>
  <div>
    <div class="exchange-rate">
      <h3 class="exchange-title">환전고시환율</h3>
      <div class="box">
        <select name="" id="" class="dropdown">
          <option value="">a</option>
          <option value="">b</option>
          <option value="">b</option>
          <option value="">b</option>
          <option value="">b</option>
          <option value="">b</option>
          <option value="">b</option>
        </select>
        <div class="exchange">
          <input type="text" id="" name="">
          <label for="">원</label>
        </div>
      </div>

      <div class="equal">=</div>

      <div class="box">
        <select name="" id="" class="dropdown">
          <option value="">a</option>
          <option value="">b</option>
          <option value="">b</option>
          <option value="">b</option>
          <option value="">b</option>
          <option value="">b</option>
          <option value="">b</option>
        </select>
        <div class="exchange">
          <input type="text" id="" name="">
          <label for="">원</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios"
import { onMounted } from "vue"
import { useCounterStore } from '@/stores/counter'

axios.defaults.withCredentials = false

const store = useCounterStore()

onMounted(() => {
  axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/v1/exchanges',
    headers: {
      'Authorization': `Token ${store.token}`,
    },
  })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    
  })
})
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
</style>