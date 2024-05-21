<template>
  <div>
    <ExchangeRateNav />
    
    <div class="non-nav">
      <ExchangeRateHeader />
      <ExchangeRateBody />
      <hr>
      <ExchangeRateList />
      <ExchangeRateFooter />
    </div>
  </div>
</template>

<script setup>
import ExchangeRateNav from '@/components/ExchangeRateComponents/ExchangeRateNav.vue'
import ExchangeRateHeader from '@/components/ExchangeRateComponents/ExchangeRateHeader.vue'
import ExchangeRateBody from '@/components/ExchangeRateComponents/ExchangeRateBody.vue'
import ExchangeRateList from '@/components/ExchangeRateComponents/ExchangeRateList.vue'
import ExchangeRateFooter from '@/components/ExchangeRateComponents/ExchangeRateFooter.vue'
</script>

<style scoped>
.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>