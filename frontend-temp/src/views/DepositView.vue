<template>
  <div>
    <DepositListNavVue />

    <div class="non-nav">
      <DepositListBody />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import DepositListNavVue from '../components/DepositListComponents/DepositListNav.vue'
import DepositListBody from '@/components/DepositListComponents/DepositListBody.vue'
import Footer from "@/components/Footer.vue"
</script>

<style scoped>

.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>