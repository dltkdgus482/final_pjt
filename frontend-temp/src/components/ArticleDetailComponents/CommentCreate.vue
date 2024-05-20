<template>
  <div>
    <h2>댓글</h2>
    <form @submit.prevent="createComment" class="create-comment">
      <textarea v-model.trim="content" class="comment-content" placeholder="댓글을 입력하세요."></textarea>
      <!-- <input type="text" class="comment-content"> -->
      <button class="comment-button">댓글 작성</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import axios from 'axios'

const store = useCounterStore()
const route = useRoute()
const articleId = +route.params.articleId

const content = ref('')

const createComment = function () {
  axios({
    method: 'POST',
    url: `${store.API_URL}/api/v1/articles/${articleId}/comments/`,
    headers: {
      Authorization: `Token ${store.token}`,
    },
    data: {
      content: content.value,
    },
  })
  .then((response) => {
    location.reload()
  })
  .catch((error) => {
    alert('댓글 작성에 실패했습니다.')
  })
}
</script>

<style scoped>
.create-comment {
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */
  flex-direction: column;
  margin: 10px 5px;
}
.comment-content {
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: none;
  font-size: 16px;
  /* word-wrap: break-word; */
  min-height: 100px;
  /* padding: 10px; */
  border: 1px solid #ccc;
  border-radius: 4px;
  /* 사용자가 수동으로 크기 조정 불가 */
  resize: none;
  /* 필요 시 스크롤 바 숨김 */
  /* overflow: hidden; */
  box-sizing: content-box;
}

.comment-button {
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 80px;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: auto;
}
</style>