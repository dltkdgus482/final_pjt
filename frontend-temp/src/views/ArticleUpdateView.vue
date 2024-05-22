<template>
  <div>
    <ArticleUpdateNav />
    <div class="non-nav">
      <ArticleUpdateHeader />
      <ArticleUpdateBody />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import ArticleUpdateNav from '@/components/ArticleUpdateComponents/ArticleUpdateNav.vue'
import ArticleUpdateHeader from '@/components/ArticleUpdateComponents/ArticleUpdateHeader.vue'
import ArticleUpdateBody from '@/components/ArticleUpdateComponents/ArticleUpdateBody.vue'
import Footer from "@/components/Footer.vue"
</script>

<style scoped>
.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>