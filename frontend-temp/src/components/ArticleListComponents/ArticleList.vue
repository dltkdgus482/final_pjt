<template>
  <div>
    <div class="circular-border">
      <RouterLink class="router" :to="{ name: 'ArticleDetailView', params: { articleId: index } }">
        <p>번호 {{ index + 1 }}</p>
        <p>분류 </p>
        <h3>{{ article.title }}</h3>
        <p class="line-margin">작성자 {{ article.author }}</p>
        <p>작성일 {{ article.uploadDate }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  article: Object,
  index: Number,
})
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