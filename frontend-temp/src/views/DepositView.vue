<template>
  <div>
    <DepositListNavVue />
    <hr>
    <div class="non-nav">
      <h1>DepositListPage</h1>
      <hr>
      <DepositListHeader />
      <hr>
      <DepositListBody />
      <hr>
      <DepositListFooter />
    </div>
  </div>
</template>

<script setup>
import DepositListNavVue from '../components/DepositListComponents/DepositListNav.vue'
import DepositListHeader from '@/components/DepositListComponents/DepositListHeader.vue'
import DepositListBody from '@/components/DepositListComponents/DepositListBody.vue'
import DepositListFooter from '@/components/DepositListComponents/DepositListFooter.vue'
</script>

<style scoped>

.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>