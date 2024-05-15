<template>
  <div>
    <StockDetailNav />
    <div class="non-nav">
      <StockDetailHeader />
      <hr>
      <StockDetailBody />
      <hr>
      <StockDetailFooter />
    </div>
  </div>
</template>

<script setup>
import StockDetailNav from '@/components/StockDetailComponents/StockDetailNav.vue'
import StockDetailHeader from '@/components/StockDetailComponents/StockDetailHeader.vue'
import StockDetailBody from '@/components/StockDetailComponents/StockDetailBody.vue'
import StockDetailFooter from '@/components/StockDetailComponents/StockDetailFooter.vue'
</script>

<style scoped>
.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>