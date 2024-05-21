<template>
  <div>
    <div class="header">
      <div v-if="article && article.category && article.user && article.user.username && article.created_at">
        <!-- <p>{{article}}</p> -->
        <p class="article-info">카테고리: {{ article.category }}</p>
        <p class="article-info">작성자: {{ article.user.username }}</p>
        <p class="article-info">작성일: {{ store.formatDate(article.created_at) }}</p>
        <p class="article-info">조회수: {{ article.views }}</p>
        <p class="title">{{ article.title }}</p>
      </div>
      <div v-else></div>

    </div>
    <div class="article">
      <p>{{ article.content }}</p>
    </div>
    <div class="edit">
      <RouterLink class="router" :to="{ name: 'ArticleUpdateView', params: { articleId: articleId - 1 } }">수정</RouterLink>
      <p class="delete" @click.prevent="deleteArticle">삭제</p>
    </div>
    <div class="comment">
      <CommentCreate />
      <template v-if="comments && comments.length">
        <CommentList 
          v-for="(comment, index) in comments"
          :key="comment.id"
          :comment="comment"
          :index="index"
          :articleId="articleId"
        />
      </template>
      <template v-else>
        <p class="empty-comment text">아직 댓글이 없습니다...</p>
      </template>
    </div>
  </div>
</template>

<script setup>
import axios from "axios"
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import CommentCreate from '@/components/ArticleDetailComponents/CommentCreate.vue'
import CommentList from '@/components/ArticleDetailComponents/CommentList.vue'

const article = ref({})
const comments = ref([])
const store = useCounterStore()
const route = useRoute()
const router = useRouter()

const articleId = (+route.params.articleId)

// console.log(articleId)

onMounted(async () => {
  axios.defaults.withCredentials = false

  await axios({
    method: 'GET',
    url: `${store.API_URL}/api/v1/articles/${articleId}/`,
    headers: {
      Authorization: `Token ${store.token}`,
    },
  })
  .then((response) => {
    article.value = response.data
  })

  await axios({
    method: 'GET',
    url: `${store.API_URL}/api/v1/articles/${articleId}/comments/`,
    headers: {
      Authorization: `Token ${store.token}`,
    },
  })
  .then((response) => {
    comments.value = response.data
  })
})

defineProps({
  article: Object,
  index: Number,
})

const deleteArticle = function () {
  axios.defaults.withCredentials = false

  axios({
    method: 'DELETE',
    url: `${store.API_URL}/api/v1/articles/${articleId}/`,
    headers: {
      Authorization: `Token ${store.token}`,
    },
  })
  .then((response) => {
    router.push({ name: 'ArticleView' })
  })

}
</script>

<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px 5px;

}
.article-info{
  font-size: 12px;
}
.title{
  font-weight: bold;
  font-size: 25px;
  margin: auto;
  /* width: 500px; */
  /* overflow: hidden; */
  word-wrap: break-word;
}
.article{
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px 5px;
  word-wrap: break-word;
}

.empty-comment {
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
.edit {
  display: flex;
  justify-content: right;
}
.edit p {
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 6px;
  cursor: pointer;
}
.router{
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 16px 6px;
  text-decoration: none;
  font-style: black;
  color: #404048;
}
</style>