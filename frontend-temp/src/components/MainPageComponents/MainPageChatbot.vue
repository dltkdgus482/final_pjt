<template>
  <div class="main-chatbot">

    <div class="chatbot-icon-container">
      <img class="chatbot-icon" src="/assets/chatbot.gif" alt="chatbot-icon">
    </div>

    <p class="ment">
      무엇을 도와드릴까요?
    </p>

    <div id="chat-container">
        <div id="chat-messages">
          <div v-for="message in messages" :key="message.id" class="message">
            {{ message.sender }}: {{ message.message }}
          </div>
          <!-- <div class="message">챗봇: 안녕하세요! 무엇을 도와드릴까요?</div> -->
        </div>
        <div id="user-input">
            <input @keydown.enter="sendMessage" type="text" v-model="userInput" placeholder="무엇이든지 질문해보세요!" />
            <button @click="sendMessage">검색</button>
        </div>
    </div>

    <div class="hashtag">
      <button @click.prevent="recommendPrdt()"># 예금 상품 추천받기</button>
      <button @click.prevent="describePrdt()"># 적금 상품 설명 받기</button>
      <button @click.prevent="searchCrypto()"># 코인 종목 추천받기</button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useCounterStore } from '@/stores/counter'

axios.defaults.withCredentials = false
const store = useCounterStore()

const userInput = ref('')
const aiMessage = ref('')
const messages = ref([])

const recommendPrdt = function () {
  userInput.value = '한도가 높은 예금 상품 하나만 추천해줘'
}

const describePrdt = function () {
  userInput.value = '카카오뱅크 26주 적금 상품에 대해 설명해줘'
}

const searchCrypto = function () {
  userInput.value = '코인 종목 추천해줘'
}

const url = 'http://127.0.0.1:8000/api/v1/chatbots/'

const sendMessage = function () {
  const userMessage = userInput.value.trim()
  userInput.value = ''
  addMessage('나', userMessage)

  if (userMessage.length === 0) {
    return
  } else if (!store.token) {
    addMessage('챗봇', '로그인이 필요한 서비스입니다.')
  } else {
    axios({
      url: url,
      method: 'POST',
      data: {
        message: userMessage,
      },
      headers: {
        'Authorization': `Token ${store.token}`,
      },
    })
    .then((response) => {
      aiMessage.value = response.data.response
      addMessage('챗봇', aiMessage.value)
    })
  }
}

const addMessage = function (sender, message) {
  messages.value.unshift({ sender, message })
}
</script>

<style scoped>
.main-chatbot {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.chatbot-icon {
  width: 100px;
  height: 100px;
  /* background-color: #1e88e5; */
  /* border-radius: 50%;
  cursor: pointer; */
}

.chatbot-icon-container {
  margin-bottom: -20px;
}
.ment{
  font-size: 30px;
  font-weight: 600;
}
.message {
  border-top: 1px solid #ccc;
  padding: 10px;
  margin-top: 5px;
  background-color: #f3f5f7;
  border-radius: 8px;
}

#chat-container {
  margin-top: 10px;
  width: 80%;
  max-height: 300px; /* 최대 높이 설정 */
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
}

#user-input {
  display: flex;
  padding: 20px;
  padding-top: 0px;
  height: 40px;
}

#user-input input {
  flex: 1;
  outline: none;
  width: 50%;
  border-radius: 8px;
  border: #e6e6e6 solid 1px;
  margin-right: 10px;
  padding-left: 5px;
}

#user-input button {
  border: none;
  background-color: #1e88e5;
  color: white;
  padding: 10px 15px;
  cursor: pointer;
  width: 20%;
  /* font-size: 9px; */
  border-radius: 8px;
}
.hashtag{
  display: flex;
  /* justify-content: flex-start;
  text-align: center; */
  align-self: flex-start;
  widows: 100%;
  margin-top: 10px;
  margin-left: 10%;
  font-size: 16px;
}
.hashtag button{
  padding: 6px;
  border-radius: 8px;
  border: 1px solid #eee;
  color: #4e5968;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0px 10px;
  cursor: pointer;
}
.hashtag button:hover{
  background-color: #eee;
  font-weight: bold;
}
</style>
