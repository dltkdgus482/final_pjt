<template>
  <div>
    <form class="signup-form" @submit.prevent="signUp">
      <span>
        <input class="uername" type="text" id="username" v-model.trim="username" placeholder="아이디" required>
        <button>중복확인</button>        
      </span>
      <input type="password" id="password1" v-model.trim="password1" placeholder="비밀번호" required>
      <input type="password" id="password2" v-model.trim="password2" placeholder="비밀번호 확인" required>
      <span>
        <input type="text" id="email" placeholder="이메일" required>
        <button>인증하기</button>
      </span>
      <span>
        <input type="text" id="" placeholder="인증코드">
        <button>제출</button>
      </span>
      <input class="nickname" type="text" id="nickname" v-model.trim="nickname" placeholder="닉네임" required>
      
      
      <input id="submit" type="submit">
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
.signup-form{
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
}
.signup-form input{
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding-left: 20px;
  font-size: 17px;

}
.signup-form span{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span button{
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 90px;
  height: 50px;
  font-size: 14px;
}
/* .uername{
  width: 300px;
} */
#submit{
  margin-left: auto;
  padding: 4px 10px;
  font-size: 14px;
}
#submit:hover{
  background-color: #eee;
}

</style>