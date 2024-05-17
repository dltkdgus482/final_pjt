<template>
  <div>
    <form class="signup-form" @submit.prevent="signUp">
      <span>
        <input type="text" id="username" v-model.trim="username" placeholder="아이디" required>
        <button>중복확인</button>        
      </span>
      <br>
      <input type="password" id="password1" v-model.trim="password1" placeholder="비밀번호" required>
      <br>
      <input type="password" id="password2" v-model.trim="password2" placeholder="비밀번호 확인" required>
      <br>
      <input type="text" id="nickname" v-model.trim="nickname" placeholder="닉네임" required>
      <br>
      <!-- <input type="text" id="email" placeholder="이메일" required> -->
      <input type="submit">
    </form> 
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

const username = ref(null)
const password1 = ref(null)
const password2 = ref(null)
const nickname = ref(null)
const store = useCounterStore()

const signUp = function () {
  const payload = {
    username: username.value,
    password1: password1.value,
    password2: password2.value,
    nickname: nickname.value,
  }
  store.signUp(payload)
}

</script>

<style scoped>
</style>