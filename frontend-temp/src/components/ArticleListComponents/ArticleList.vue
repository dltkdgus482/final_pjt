<template>
  <div>
    <div class="circular-border">
      <RouterLink class="router" :to="{ name: 'ArticleDetailView', params: { articleId: index } }">
        <h4>Title: {{ article.title }}</h4>
        <p>Author: {{ article.author }}</p>
        <p>Posted at {{ article.uploadDate }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  article: Object,
  index: Number
})
</script>

<style scoped>
.circular-border {
  border: 1px solid #000;
  border-radius: 8px;
  margin: 8px 4px;
  background-color: #fff;
  padding: 4px 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.router {
  text-decoration: none;
  font-size: 17px;
  line-height: 17px;
  color: #404048;
  font-weight: 500;
}
</style>