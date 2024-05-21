<template>
  <div class="account">
    <p class="page-owner">
      {{ userInfo.username }} 님의 페이지
      <hr>
      <div>{{ userInfo }}</div>
    </p>
    <p>
      <div>
        나의 금융상품
      </div>
      <hr class="hr">
      <div v-if="userInfo && userInfo.financial_products && userInfo.financial_products.length">
        <div>{{ userInfo.financial_products }}</div>
      </div>
      <div v-else>
        <div>아직 가입한 금융상품이 없습니다</div>
      </div>
    </p>
    <p>
      <div>
        나의 게시글
      </div>
      <hr class="hr">
    </p>
    <div class="update">
      <Router-link v-if="userInfo && userInfo.username" class="router" :to="{ name: 'UpdateUserView', params: { 'username': userInfo.username } }">
        <button>내 정보 변경</button>
      </Router-link>
      <Router-link v-if="userInfo && userInfo.username" class="router" :to="{ name: 'UpdatePasswordView', params: { 'username': userInfo.username } }">
        <button>비밀번호 변경</button>
      </Router-link>
    </div>
  </div>
</template>

<script setup>
import axios from "axios"
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const route = useRoute()
const router = useRouter()

const userInfo = ref({
  username: '',
  age: '',
  financial_products: '',
  nickname: '',
  pk: '',
  salary: '',
  email: '',
})

axios.defaults.withCredentials = false

onMounted(async () => {
  await axios({
    method: 'GET',
    url: 'http://127.0.0.1:8000/dj-rest-auth/user/',
    headers: {
      'Authorization': `Token ${store.token}`,
    },
  })
  .then((response) => {
    userInfo.value = response.data
    userInfo.value.financial_products = userInfo.value.financial_products.split(',')
    // console.log(userInfo.value.financial_products)
  })
})
</script>

<style scoped>
  .account{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 17px;
  }
  .account p{
    border: none;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px 18px;
    width: 80%;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .page-owner{
    margin-bottom: 40px;
  }
  .update button{
    border: none;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 30px;
    font-size: 17px;
  }

.router button {
  cursor: pointer;
}

.hr {
  color: #f3f5f7;
}
</style>

