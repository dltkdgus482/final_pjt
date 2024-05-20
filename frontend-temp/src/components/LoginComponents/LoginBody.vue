<template>
  <div class="login">
    <img src="" alt="Logo">
    <input class="username" type="text" id="username" v-model.trim="username" placeholder="아이디" required>
    <input type="password" id="password" v-model.trim="password" placeholder="비밀번호" required>
    <button @click.prevent="logIn">로그인</button>
    <div class="submit">
      <Router-link :to="{ name: 'SignUpView' }">
        <button>회원가입</button>
      </Router-link>
      <button>비밀번호 찾기</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

const username = ref('')
const password = ref('')

const logIn = function () {
  const payload = {
    username: username.value,
    password: password.value
  }
  store.logIn(payload)
}
</script>

<style scoped>
.login{
  display: flex;
  border-radius: 2px;
  border: none;
  margin-top: 50px;
  background-color: rgb(178, 233, 255);
  justify-content: center;
  flex-direction: column;
  height: 500px;
}
.login img{
  margin: 50px auto;
  align-self: center;
}
.login input{
  margin-top: 15px;
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding-left: 20px;
  font-size: 17px;
  width: 80%;
  align-self: center;
}
.login button{
  margin-top: 35px;
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding-left: 20px;
  font-size: 17px;
  width: 80%;
  align-self: center;
  cursor: pointer;
}
.submit{
  display: flex;
  justify-content: right;
  margin-right: 20px;
}
.submit button{
  font-size: 14px;
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
  width: 130px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 15px 10px;
  /* margin-right: 25px; */
  cursor: pointer;
}
</style>