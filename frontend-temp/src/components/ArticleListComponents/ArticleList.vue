<template>
  <div>
    <div class="circular-border">
      <RouterLink class="router" :to="{ name: 'ArticleDetailView', params: { articleId: article.id } }">
        <!-- <p>{{ article }}</p> -->
        <h3>제목: {{ article.title }}</h3>
        <p class="line-margin">작성자: {{ article.user.username }}</p>
        <p>작성일: {{ store.formatDate(article.created_at) }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  article: Object,
  index: Number,
})

import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<style scoped>
.circular-border {
  border-radius: 8px;
  margin: 8px 4px;
  background-color: #fff;
  padding: 4px 22px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.router {
  text-decoration: none;
  font-size: 13px;
  line-height: 17px;
  color: #404048;
  font-weight: 500;
}
.router h3{
  font-size: 20px;
}
.line-margin{
  margin-bottom: -10px;
}
</style>