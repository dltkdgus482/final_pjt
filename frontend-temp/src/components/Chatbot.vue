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
        <div id="user-input">
            <input @keydown.enter="sendMessage" type="text" v-model="userInput" placeholder="메시지를 입력하세요..." />
            <button @click="sendMessage">전송</button>
        </div>
    </div>
  </div>
</template>

<script setup>
import { h, onMounted, ref } from 'vue'
import axios from 'axios'
axios.defaults.withCredentials = true

const isChatContainerVisible = ref(false)
const userInput = ref('')
const aiMessage = ref('')
const messages = ref([])

const toggleChatContainer = () => {
  isChatContainerVisible.value = !isChatContainerVisible.value
}

// CSRF 토큰을 얻기 위한 뷰에 대한 URL
// const csrfTokenUrl = 'http://127.0.0.1:8000/api/v1/get_csrf/'

const url = 'http://127.0.0.1:8000/api/v1/chatbot/'

// let csrfToken

const sendMessage = function () {
  const userMessage = userInput.value.trim()
  userInput.value = ''
  addMessage('나', userMessage)

  if (userMessage.length === 0) {
    return
  } else {
    axios({
      url: url,
      method: 'POST',
      // headers: {
      //   'X-CSRFToken': csrfToken,
      // },
      data: {
        message: userMessage,
      },
      // withCredentials: true,
    })
    .then((response) => {
      aiMessage.value = response.data.response
      // console.log(aiMessage.value)
      addMessage('챗봇', aiMessage.value)
    })
  }
}

const addMessage = function (sender, message) {
  messages.value.unshift({ sender, message })
}

  // axios({
  //   url: csrfTokenUrl,
  //   withCredentials: true,
  // }).then((response) => {
  //   csrfToken = response.data.csrfToken
  // }).then((response) => {
  //   axios({
  //     url: url,
  //     method: 'POST',
  //     headers: {
  //       'X-CSRFToken': csrfToken,
  //     },
  //     data: {
  //       message: userMessage.value,
  //     },
  //     withCredentials: true,
  //   }).then((response) => {
  //     console.log(response)
  //   })
  // })
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
  background-color: #e6e6e6;
}
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
}
#user-input button {
  border: none;
  background-color: #1e88e5;
  color: white;
  padding: 10px 15px;
  cursor: pointer;
  width: 20%;
  font-size: 9px;
  border-radius: 2px;
}
</style>