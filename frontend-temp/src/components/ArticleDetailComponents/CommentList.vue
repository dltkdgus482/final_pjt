<template>
  <div class="comment">
    <div>
      <p class="author">작성자: {{ comment.user }}</p>
      <p class="date">작성일: {{ comment.created_at }}</p>
      <p class="text">{{ comment.content }}</p>
    </div>
    <div class="edit">
      <p @click.prevent="deleteComment">삭제</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  comment: Object,
  index: Number,
  articleId: Number,
})

import axios from "axios"
import { useRoute, useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const router = useRouter()

const deleteComment = async function () {
  axios.defaults.withCredentials = false

  await axios({
    method: 'DELETE',
    url: `${store.API_URL}/api/v1/articles/${props.articleId}/comments/${props.comment.id}/`,
    headers: {
      Authorization: `Token ${store.token}`,
    },
  })
  .then((response) => {
    location.reload()
  })
}

</script>

<style scoped>
.comment {
  display: flex;
  justify-content: space-between;
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px 20px;
  padding-top: 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px 5px;
}
.text{
  /* margin: auto; */
  border: none;
  padding: 1px;
  word-wrap: break-word;
}
.author{
  font-size: 10px;
  color: #999;
} 
.date{
  font-size: 10px;
  color: #999;
}
.edit p{
  border: none;
  background-color: #f3f5f7;
  border-radius: 8px;
  padding: 4px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 35px;
  text-align: center;
}
</style>