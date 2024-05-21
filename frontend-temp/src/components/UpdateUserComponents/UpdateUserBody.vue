<template>
  <div>
    <form class="signup-form" @submit.prevent="signUp">
      <div>
        <input class="username" type="text" id="username" v-model.trim="username" placeholder="아이디" required>
        <button>중복확인</button>        
      </div>
      <input type="text" id="nickname" v-model.trim="nickname" placeholder="닉네임" required>
      <input type="text" name="" id="" v-model="age" placeholder="나이(숫자만 입력해주세요)">
      <div>
        <span class="gender">성별</span>
        <button class="gender-button" :class="{ selected: gender === 'M' }" @click.prevent="selectGender('M')">남</button>
        <button class="gender-button" :class="{ selected: gender === 'F' }" @click.prevent="selectGender('F')">여</button>
      </div>
      <input type="text" name="" id="pay" v-model="salary" placeholder="월수입(단위:원, 숫자만 입력해주세요)">
      <input @click.prevent="updateUserInfo" id="submit" type="submit" value="회원정보수정">
    </form> 
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

axios.defaults.withCredentials = false

const store = useCounterStore()
const route = useRoute()
const router = useRouter()

const userInfo = ref(null)

const username = ref(route.params.username)
const nickname = ref('')
const age = ref(0)
const gender = ref('')
const salary = ref(0)
const financial_products = ref(null)

const selectGender = function (data) {
  gender.value = data
}

onMounted(() => {
  const store = useCounterStore()

  axios({
    method: 'GET',
    url: `http://127.0.0.1:8000/dj-rest-auth/user/?username=${username.value}`,
    headers: {
      'Authorization': `Token ${store.token}`,
    },
  }) .then((response) => {
    userInfo.value = response.data

    nickname.value = userInfo.value.nickname
    age.value = userInfo.value.age
    gender.value = userInfo.value.gender
    salary.value = userInfo.value.salary
    financial_products.value = userInfo.value.financial_products
  })
})

const updateUserInfo = function () {
  axios({
    method: 'PUT',
    url: `http://127.0.0.1:8000/dj-rest-auth/user/?username=${username.value}`,
    headers: {
      'Authorization': `Token ${store.token}`,
    },
    data: {
      username: username.value,
      nickname: nickname.value,
      age: age.value,
      gender: gender.value,
      salary: salary.value,
      financial_products: financial_products.value
    },
  })
  .then((response) => {
    router.push({ name: 'ProfileView' })
  })
}
</script>

<style scoped>
.signup-form {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.signup-form input {
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding-left: 20px;
  font-size: 17px;
}

.signup-form div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div button {
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 90px;
  height: 50px;
  font-size: 14px;
  cursor: pointer;
}

.username {
  width: 400px;
}

#submit {
  margin-left: auto;
  padding: 4px 10px;
  font-size: 14px;
  cursor: pointer;
}

#submit:hover {
  background-color: #eee;
}
.gender{
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 90px;
  height: 50px;
  font-size: 14px;
  text-align: center;
  line-height: 50px;
}
.gender-button{
  width: 200px;
}

.gender-button.selected {
  border: 1px solid #000;
}
</style>
