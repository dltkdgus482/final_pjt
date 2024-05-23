<template>
  <div>
    <ArticleDetailNav />
    <div class="non-nav">
      <ArticleDetailBody />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import ArticleDetailNav from "@/components/ArticleDetailComponents/ArticleDetailNav.vue"
import ArticleDetailBody from "@/components/ArticleDetailComponents/ArticleDetailBody.vue"
import Footer from "@/components/Footer.vue"
</script>

<style scoped>
.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>