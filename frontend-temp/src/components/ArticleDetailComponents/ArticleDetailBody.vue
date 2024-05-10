<template>
  <div>
    <h1>ArticleDetailBody</h1>
    <p>Title: {{ article.title }}</p>
    <p>Author: {{ article.author }}</p>
    <p>Posted at {{ article.uploadDate }}</p>
    <p>Content: {{ article.content }}</p>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { useRoute } from 'vue-router'

const route = useRoute()
const articleId = route.params.articleId
const store = useCounterStore()
const article = store.dummyArticle[articleId]
</script>

<style scoped>

</style>