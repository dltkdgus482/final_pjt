<template>
  <div>
    <div class="header">
      <div>
        <!-- <p>{{ article }}</p> -->
        <p class="article-info">{{ article.category }}</p>
        <p class="article-info">작성자: {{ article.user }}</p>
        <p class="article-info">작성일: {{ article.created_at }}</p>
        <p class="title">{{ article.title }}</p>
      </div>

    </div>
    <div class="article">
      <p>{{ article.content }}</p>
    </div>
    <div class="edit">
      <RouterLink class="router" :to="{ name: 'ArticleUpdateView', params: { articleId: index } }">수정</RouterLink>
      <p>삭제</p>
    </div>
    <div class="comment">
      <CommentCreate />
      <template v-if="comments && comments.length">
        <CommentList 
          v-for="(comment, index) in comments"
          :key="comment.id"
          :comment="comment"
          :index="index"
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
import { useRoute } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import CommentCreate from '@/components/ArticleDetailComponents/CommentCreate.vue'
import CommentList from '@/components/ArticleDetailComponents/CommentList.vue'

const article = ref({})
const comments = ref([])
const store = useCounterStore()
const route = useRoute()

const articleId = (+route.params.articleId) + 1

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
.edit p{
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 6px;
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
}
</style>