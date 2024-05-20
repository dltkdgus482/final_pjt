<template>
  <div class="pagination-container">
    <button @click="prevPage" :disabled="currentPage === 0" class="nav-button">Previous</button>
    <div class="list-container">
      <transition-group name="list" tag="ul" class="list">
        <li v-for="item in paginatedItems" :key="item" class="list-item">
          {{ item }}
        </li>
      </transition-group>
    </div>
    <button @click="nextPage" :disabled="currentPage === maxPage" class="nav-button">Next</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const items = ref(Array.from({ length: 20 }, (_, i) => i + 1)); // 1 to 20
const currentPage = ref(0);
const itemsPerPage = 5;

const paginatedItems = computed(() => {
  const start = currentPage.value * itemsPerPage;
  const end = start + itemsPerPage;
  return items.value.slice(start, end);
});

const maxPage = computed(() => Math.floor((items.value.length - 1) / itemsPerPage));

function nextPage() {
  if (currentPage.value < maxPage.value) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
}
</script>

<style>
.pagination-container {
  display: flex;
  align-items: center;
}

.nav-button {
  margin: 0 10px;
}

.list-container {
  flex-grow: 1; /* Expand to fill remaining space */
  overflow: hidden; /* Hide overflow */
}

.list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  flex: 1 0 20%; /* 5 items per view, so 20% each */
  min-width: 0; /* Ensure list items can shrink */
  margin: 5px;
  padding: 10px;
  background: #42b983;
  color: white;
  text-align: center;
}
</style>
