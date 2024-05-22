<template>
  <div>
    <ArticleCreateNav />
    <div class="non-nav">
      <ArticleCreateHeader />
      <ArticleCreateBody />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import ArticleCreateNav from '@/components/ArticleCreateComponents/ArticleCreateNav.vue'
import ArticleCreateHeader from '@/components/ArticleCreateComponents/ArticleCreateHeader.vue'
import ArticleCreateBody from '@/components/ArticleCreateComponents/ArticleCreateBody.vue'
import Footer from "@/components/Footer.vue"
</script>

<style scoped>
.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>