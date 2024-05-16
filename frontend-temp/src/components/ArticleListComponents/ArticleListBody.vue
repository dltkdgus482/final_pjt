<template>
  <div>
    <div class="in">
      <div class="category">
        <button>전체</button>
        <button>금융</button>
        <button>증권</button>
      </div>
      <div>
        <select name="" id="" class="dropdown">
          <option value="">views</option>
          <option value="">views</option>
          <option value="">views</option>
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
      v-for="(article, index) in paginatedData"
      :key="article.id"
      :article="article"
      :index="index + (currentPage - 1) * itemsPerPage"
    />
    <div class="pagination">
      <button @click="setCurrentPage(currentPage - 10)" v-show="currentPage > 10" >
        이전
      </button>
      <button
        v-for="page in Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)"
        :key="page"
        @click="setCurrentPage(page)"
      >
        {{ page }}
      </button>
      <button @click="setCurrentPage(nextPages)" v-show="currentPage <= lastPaginatedPage">
        다음
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ArticleList from '@/components/ArticleListComponents/ArticleList.vue'
import { useCounterStore } from '@/stores/counter'

const itemsPerPage = 5
const currentPage = ref(1)
const store = useCounterStore()

const totalPages = computed(() => Math.ceil(store.dummyArticle.length / itemsPerPage))
const lastPaginatedPage = computed(() => Math.floor((totalPages.value - 1) / 10) * 10)
const nextPages = computed(() => Math.ceil(currentPage.value / 10) * 10 + 1)

const paginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = currentPage.value * itemsPerPage
  return store.dummyArticle.slice(startIndex, endIndex)
})

const startPage = computed(() => Math.floor((currentPage.value - 1) / 10) * 10 + 1)
const endPage = computed(() => Math.min(startPage.value + 9, totalPages.value))

const setCurrentPage = (page) => {
  currentPage.value = page
}
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
.category {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
}
.in button{
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.write-article {
  text-decoration: none;
  /* letter-spacing: -0.3px; */
  text-align: center;
  color: #404048;
  margin-left: 6px;
  background-color: #fff;
  font-weight: 1000;
  border: none;
  border-radius: 8px;
  padding: 4px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.dropdown{
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
/* .dropdown > option{
  border-radius: 8px;
} */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  white-space: nowrap;
  margin: 0 auto;
  max-width: 1120px;
  min-height: 56px;
  box-sizing: border-box;
}
.pagination button {
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin: 0 3px;
}
</style>