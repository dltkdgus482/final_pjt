<template>
  <div>
    <StockListNavVue />
    <hr>
    <div class="non-nav">
      <h1>StockListPage</h1>
      <hr>
      <StockListHeader />
      <hr>
      <StockListBody />
      <hr>
      <StockListFooter />
    </div>
  </div>
</template>

<script setup>
import StockListNavVue from "@/components/StockListComponents/StockListNav.vue"
import StockListHeader from "@/components/StockListComponents/StockListHeader.vue"
import StockListBody from "@/components/StockListComponents/StockListBody.vue"
import StockListFooter from "@/components/StockListComponents/StockListFooter.vue"
</script>

<style scoped>
.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>