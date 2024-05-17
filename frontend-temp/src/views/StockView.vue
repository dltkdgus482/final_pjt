<template>
  <div>
    <StockListNavVue />
    <div class="non-nav">
      <StockListLike />
      <hr>
      <StockListBody />
      <StockListFooter />
    </div>
  </div>
</template>

<script setup>
import StockListNavVue from "@/components/StockListComponents/StockListNav.vue"
import StockListLike from "@/components/StockListComponents/StockListLike.vue"
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