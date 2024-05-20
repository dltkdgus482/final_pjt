<template>
  <div>
    <form @submit.prevent="createArticle">
      <div>
        <h3>제목</h3>
        <input class="title-box" type="text" v-model.trim="title" placeholder="제목을 입력하세요.">
      </div>
      <div>
        <h3>내용</h3>
        <textarea class="content-box" v-model.trim="content" placeholder="내용을 입력하세요."></textarea>
        <!-- <input class="content-box" type="text" placeholder="Write your article content here..."> -->
      </div>
      <div class="select">
        <h3>분류</h3>
        <select class="select-box" v-model="category">
          <option value="fin">금융</option>
          <option value="crypto">가상화폐</option>
        </select>
      </div>
      <div class="submit">
        <button class="button">제출</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import axios from 'axios'

const store = useCounterStore()
const route = useRoute()
const router = useRouter()

const title = ref('')
const content = ref('')
const category = ref('fin')

const createArticle = function () {
  axios({
    method: 'POST',
    url: `${store.API_URL}/api/v1/articles/`,
    headers: {
      Authorization: `Token ${store.token}`,
    },
    data: {
      title: title.value,
      content: content.value,
      category: category.value,
    },
  })
  .then((response) => {
    router.push({ name: 'ArticleView' })
  })
}
</script>

<style scoped>

.title-box {
  font-family: none;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding-left: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px 5px;  
}

.content-box {
  font-family: none;
  width: 100%;
  min-height: 300px;
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding-left: 10px;
  padding-top: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px 5px;
  /* word-wrap: break-word; */
  resize: none;
  
}

.select-box {
  width: 20%;
  height: 40px;
  margin-bottom: 20px;
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding-left: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 5px;
}
.submit{
  display: flex;
}
.button{
  align-self: flex-end;
  margin-left: auto;
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 5px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
}
</style>