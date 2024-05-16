<template>
  <div>
    <ArticleCreateNav />
    <div class="non-nav">
      <ArticleCreateHeader />

      <ArticleCreateBody />

    </div>
  </div>
</template>

<script setup>
import ArticleCreateNav from '@/components/ArticleCreateComponents/ArticleCreateNav.vue'
import ArticleCreateHeader from '@/components/ArticleCreateComponents/ArticleCreateHeader.vue'
import ArticleCreateBody from '@/components/ArticleCreateComponents/ArticleCreateBody.vue'
import ArticleCreateFooter from '@/components/ArticleCreateComponents/ArticleCreateFooter.vue'
</script>

<style scoped>
.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>