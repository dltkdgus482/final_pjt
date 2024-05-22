<template>
  <div>
    <StockDetailNav />
    <div class="non-nav">
      <StockDetailHeader />
      <hr>
      <StockDetailBody />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import StockDetailNav from '@/components/StockDetailComponents/StockDetailNav.vue'
import StockDetailHeader from '@/components/StockDetailComponents/StockDetailHeader.vue'
import StockDetailBody from '@/components/StockDetailComponents/StockDetailBody.vue'
import Footer from "@/components/Footer.vue"
</script>

<style scoped>
.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>