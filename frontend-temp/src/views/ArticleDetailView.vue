<template>
  <div>
    <ArticleDetailNav class="nav"/>
    <hr>
    <div class="non-nav">
      <h1>ArticleDetailPage</h1>
      <hr>
      <ArticleDetailHeader />
      <hr>
      <ArticleDetailBody />
      <hr>
      <ArticleDetailFooter />
    </div>
  </div>
</template>

<script setup>
import ArticleDetailNav from "@/components/ArticleDetailComponents/ArticleDetailNav.vue"
import ArticleDetailHeader from "@/components/ArticleDetailComponents/ArticleDetailHeader.vue" 
import ArticleDetailBody from "@/components/ArticleDetailComponents/ArticleDetailBody.vue"
import ArticleDetailFooter from "@/components/ArticleDetailComponents/ArticleDetailFooter.vue"
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 36px;
  padding: 10px 20px;
}

.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>