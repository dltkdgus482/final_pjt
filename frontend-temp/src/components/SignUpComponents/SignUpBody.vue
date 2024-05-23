<template>
  <div>
    <form class="signup-form" @submit.prevent="signUp">
      <div>
        <input class="username" type="text" id="username" v-model.trim="username" placeholder="아이디" required>
        <button>중복확인</button>        
      </div>
      <input type="password" id="password1" v-model.trim="password1" placeholder="비밀번호" required>
      <input type="password" id="password2" v-model.trim="password2" placeholder="비밀번호 확인" required>
      <div>
        <input type="text" v-model.trim="email" id="email" placeholder="이메일" required>
        <button @click.prevent="sendAuthKey">인증하기</button>
      </div>
      <div>
        <input v-model.trim="auth_key" type="text" id="auth-code" placeholder="인증코드">
        <button @click.prevent="checkAuthKey">제출</button>
      </div>
      <input type="text" id="nickname" v-model.trim="nickname" placeholder="닉네임" required>
      <input type="number" name="" id="" v-model.trim="age" placeholder="나이(숫자만 입력해주세요)">
      <div>
        <span class="gender">성별</span>
        <button class="gender-button" :class="{ 'selected': selectedGender == 'M' }" @click.prevent="selectGender('M')">남</button>
        <button class="gender-button" :class="{ 'selected': selectedGender == 'F' }" @click.prevent="selectGender('F')">여</button>
      </div>
      <input type="number" name="" v-model.trim="salary" id="pay" placeholder="월수입(단위:원, 숫자만 입력해주세요)">
      <input id="submit" type="submit" value="회원가입">
    </form> 
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

axios.defaults.withCredentials = false

const username = ref(null)
const password1 = ref(null)
const password2 = ref(null)
const nickname = ref(null)
const email = ref(null)
const auth_key = ref(null)
const store = useCounterStore()
const isAuthenticated = ref(false)
const selectedGender = ref(null)
const age = ref(null)
const salary = ref(0)

const signUp = function () {
  const payload = {
    username: username.value,
    password1: password1.value,
    password2: password2.value,
    nickname: nickname.value,
    email: email.value,
    age: age.value,
    gender: selectedGender.value,
    salary: salary.value,
  }
  
  if (isAuthenticated.value) {
    store.signUp(payload)
  } else {
    alert('이메일 인증이 필요합니다.')
  }
}

const selectGender = function (data) {
  selectedGender.value = data
}

const sendAuthKey = function () {
  axios({
    method: 'POST',
    url: `${store.API_URL}/api/v1/accounts/verify/`,
    data: {
      email: email.value,
    },
  })
  .then((response) => {
    isAuthenticated.value = false
    alert('인증메일이 발송되었습니다.')
  })
}

const checkAuthKey = function () {
  axios({
    method: 'GET',
    url: `${store.API_URL}/api/v1/accounts/verify/`,
    params: {
      auth_key: auth_key.value,
    },
  })
  .then((response) => {
    if (response.data.message) {
      isAuthenticated.value = true
      alert('인증되었습니다.')
    } else {
      alert('인증코드가 일치하지 않습니다.')
    }
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

#email {
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
  background-color: #eee;
}

</style>
