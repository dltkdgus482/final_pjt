<template>
  <div>
    <form class="signup-form">
      <input type="password" v-model.trim="password1" placeholder="새 비밀번호" required>
      <input type="password" v-model.trim="password2" placeholder="비밀번호 확인" required>
      <input @click.prevent="updatePassword" id="submit" type="submit" value="비밀번호수정">
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
const password1 = ref('')
const password2 = ref('')

const updatePassword = function () {
  axios({
    method: 'POST',
    url: `http://127.0.0.1:8000/dj-rest-auth/password/change/?username=${username.value}`,
    headers: {
      'Authorization': `Token ${store.token}`,
    },
    data: {
      new_password1: password1.value,
      new_password2: password2.value
    }
  }) .then((response) => {
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
