<template>
  <div>
    <ArticleListNav />
    <hr>
    <div class="non-nav">
      <h1>ArticleListPage</h1>
      <hr>
      <ArticleListHeader />
      <hr>
      <ArticleListBody />
      <hr>
      <ArticleListFooter />
    </div>
  </div>
</template>

<script setup>
import ArticleListNav from "@/components/ArticleListComponents/ArticleListNav.vue"
import ArticleListHeader from "@/components/ArticleListComponents/ArticleListHeader.vue"
import ArticleListBody from "@/components/ArticleListComponents/ArticleListBody.vue"
import ArticleListFooter from "@/components/ArticleListComponents/ArticleListFooter.vue"
</script>

<style scoped>

.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>