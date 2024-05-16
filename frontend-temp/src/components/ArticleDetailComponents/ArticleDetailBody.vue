<template>
  <div>
    <div class="header">
      <div>
        <p class="category">금융</p>
        <p class="title">{{ article.title }}</p>
      </div>
      <div class="author">
        <p >작성자: {{ article.author }}</p>
        <p>작성일: {{ article.uploadDate }}</p>
      </div>
    </div>

    <div class="article">
      <p>lorem ipsum dolor sit amet consectetur adipisicing elit. libero, veniam? sit ipsum distinctio quae eveniet reprehenderit. molestias commodi voluptas, possimus quasi omnis quibusdam ipsum ad tempora facilis aperiam. ratione, exercitationem.
        {{ article.content }}</p>
    </div>

    <div class="comment">
      <CommentCreate />
      <hr>
      <CommentList 
        v-for="(comment, index) in comments"
        :key="comment.id"
        :comment="comment"
        :index="index"
      />
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { useRoute } from 'vue-router'
import CommentCreate from '@/components/ArticleDetailComponents/CommentCreate.vue'
import CommentList from '@/components/ArticleDetailComponents/CommentList.vue'

const route = useRoute()
const articleId = route.params.articleId
const store = useCounterStore()
const article = store.dummyArticle[articleId]

const comments = store.dummyComment.filter(comment => comment.article == articleId)
</script>

<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px 5px;

}
.category{
  font-size: 12px;
}
.title{
  font-weight: bold;
  font-size: 30px;
  margin: auto;
}
.author{
  font-size: 12px;
  padding-top: 20px;
}
.article{
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px 5px;
}
</style>