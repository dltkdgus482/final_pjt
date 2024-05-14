<template>
  <div>
    <DepositListNavVue />

    <div class="non-nav">
      <DepositFilter />

      <DepositSort />

      <DepositListBody />

      <DepositListFooter />
    </div>
  </div>
</template>

<script setup>
import DepositListNavVue from '../components/DepositListComponents/DepositListNav.vue'
import DepositFilter from '@/components/DepositListComponents/DepositFilter.vue'
import DepositSort from '@/components/DepositListComponents/DepositSort.vue'
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