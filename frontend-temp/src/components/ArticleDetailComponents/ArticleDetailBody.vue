<template>
  <div>
    <p>Title: {{ article.title }}</p>
    <p>Category: 금융</p>
    <p>Author: {{ article.author }}</p>
    <p>Posted at {{ article.uploadDate }}</p>
    <hr>
    <h1>ArticleDetailBody</h1>
    <div class="article">
      <p>Content: {{ article.content }}</p>
    </div>
    <hr>
    <div class="comment">
      <CommentCreate />
      <hr>
      <CommentList 
        v-for="(comment, index) in comments"
        :key="comment.id"
        :comment="comment"
        :index="index"
      />
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { useRoute } from 'vue-router'
import CommentCreate from '@/components/ArticleDetailComponents/CommentCreate.vue'
import CommentList from '@/components/ArticleDetailComponents/CommentList.vue'

const route = useRoute()
const articleId = route.params.articleId
const store = useCounterStore()
const article = store.dummyArticle[articleId]

const comments = store.dummyComment.filter(comment => comment.article == articleId)
</script>

<style scoped>

</style>