<template>
  <div class="account">
    <p>{{ userInfo }}</p>
    <p class="page-owner">{{ userInfo.username }} 님의 페이지</p>
    <p>내가 쓴 글</p>
    <p>좋아요 누른 글</p>
    <p>좋아요 누른 예/적금</p>
    <div class="update">
      <button>내 정보 변경</button>
      <button>비밀번호 변경</button>
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
  financial_products: [],
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

</style>

