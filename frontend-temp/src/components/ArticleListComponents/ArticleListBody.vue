<template>
  <div>
    <div class="in">
      <div>
        <button>전체</button>
        <button>금융</button>
        <button>증권</button>
      </div>
      <div>
        <select name="" id="">
          <option value="">views</option>
        </select>
        <RouterLink :to="{ name: 'ArticleCreateView' }" class="write-article">
          <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <g>
              <path d="M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192   c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z"/>
            </g>
          </svg>
          글쓰기
        </RouterLink>
      </div>
    </div>
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
.in{
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  margin: 0 auto;
  max-width: 1120px;
  min-height: 56px;
  box-sizing: border-box;
}

.write-article {
  text-decoration: none;
  letter-spacing: -.3px;
  text-align: center;
  color: #404048;
  border: 1px solid #404048;
  margin-left: 6px;
  padding: 2px 4px;
  background-color: #fff;
  font-weight: 1000;
}
</style>