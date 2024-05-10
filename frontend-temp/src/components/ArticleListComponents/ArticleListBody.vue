<template>
  <div>
    <button>전체</button>
    <button>금융</button>
    <button>증권</button>
    <ArticleList 
      v-for="(article, index) in store.dummyArticle"
      :key="article.id"
      :article="article"
      :index="index"
    />
  </div>
</template>

<script setup>
import ArticleList from '@/components/ArticleListComponents/ArticleList.vue'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<style scoped>

</style>