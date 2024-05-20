<template>
  <div>
    <ArticleUpdateNav />
    <div class="non-nav">
      <ArticleUpdateHeader />
      <ArticleUpdateBody />
      <ArticleUpdateFooter />
    </div>
  </div>
</template>

<script setup>
import ArticleUpdateNav from '@/components/ArticleUpdateComponents/ArticleUpdateNav.vue'
import ArticleUpdateHeader from '@/components/ArticleUpdateComponents/ArticleUpdateHeader.vue'
import ArticleUpdateBody from '@/components/ArticleUpdateComponents/ArticleUpdateBody.vue'
import ArticleUpdateFooter from '@/components/ArticleUpdateComponents/ArticleUpdateFooter.vue'
</script>

<style scoped>
.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>