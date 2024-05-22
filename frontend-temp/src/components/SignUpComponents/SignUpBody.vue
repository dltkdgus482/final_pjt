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
        <input type="text" id="email" placeholder="이메일" required>
        <button>인증하기</button>
      </div>
      <div>
        <input type="text" id="auth-code" placeholder="인증코드">
        <button>제출</button>
      </div>
      <input type="text" id="nickname" v-model.trim="nickname" placeholder="닉네임" required>
      <input type="text" name="" id="" placeholder="나이(숫자만 입력해주세요)">
      <div>
        <span class="gender">성별</span>
        <button class="gender-button" :class="{ 'selected': selectedGender == 'M' }" @click.prevent="selectGender('M')">남</button>
        <button class="gender-button" :class="{ 'selected': selectedGender == 'F' }" @click.prevent="selectGender('F')">여</button>
      </div>
      <input type="text" name="" id="pay" placeholder="월수입(단위:원, 숫자만 입력해주세요)">
      <input id="submit" type="submit" value="회원가입">
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

const selectedGender = ref(null)

const selectGender = function (data) {
  selectedGender.value = data
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
