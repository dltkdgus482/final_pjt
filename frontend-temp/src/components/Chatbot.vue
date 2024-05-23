<template>
  <div>
    <div class="chatbot-icon-container" @click="toggleChatContainer">
      <img class="chatbot-icon" src="/assets/chatbot.gif" alt="chatbot-icon">
    </div>

    <div id="chat-container" v-show="isChatContainerVisible">
        <div id="chat-messages">
          <div v-for="message in messages" :key="message.id" class="message">
            {{ message.sender }}: {{ message.message }}
          </div>
          <div class="message">챗봇: 안녕하세요! 무엇을 도와드릴까요?</div>
        </div>
        <form @submit.prevent="sendMessage">
          <div id="user-input">
              <input type="text" v-model="userInput" placeholder="메시지를 입력하세요..." />
              <button>전송</button>
          </div>
        </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useCounterStore } from '@/stores/counter'

axios.defaults.withCredentials = false
const store = useCounterStore()

const isChatContainerVisible = ref(false)
const userInput = ref('')
const aiMessage = ref('')
const messages = ref([])

const toggleChatContainer = () => {
  isChatContainerVisible.value = !isChatContainerVisible.value
}

// CSRF 토큰을 얻기 위한 뷰에 대한 URL
// const csrfTokenUrl = 'http://127.0.0.1:8000/api/v1/get_csrf/'

const url = 'http://127.0.0.1:8000/api/v1/chatbots/'

// let csrfToken

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
.chatbot-icon {
  width: 60px;
  height: 60px;
  background-color: #1e88e5;
  border-radius: 50%;
}
.chatbot-icon-container {
  z-index: 1000;
  position: fixed;
  bottom: 15%;
  right: 12%;
  cursor: pointer;
}
.message {
  border-top: 1px solid #ccc;
  padding: 10px;
  margin-top: 5px;
  background-color: #f3f5f7;
  border-radius: 8px;
}
/* .user-message{
  border-top: 1px solid #ccc;
  padding: 10px;
  margin-top: 5px;
  background-color: #e6e6e6;
  border-radius: 8px;
  text-align: right;
} */
#chat-container {
  z-index: 1000;
  position: fixed;
  bottom: 25%;
  right: 5%;
  width: 400px;
  height: 500px;
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
  padding: 5px;
  height: 40px;
}
#user-input input {
  flex: 1;
  outline: none;
  width: 50%;
  border-radius: 8px;
  border: #e6e6e6 solid 1px;
  margin-right: 10px;
}
#user-input button {
  border: none;
  background-color: #1e88e5;
  color: white;
  padding: 10px 15px;
  cursor: pointer;
  width: 20%;
  font-size: 9px;
  border-radius: 8px;
}
</style>