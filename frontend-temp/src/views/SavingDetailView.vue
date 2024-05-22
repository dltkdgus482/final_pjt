<template>
  <div>
    <SavingDetailNavVue />

    <div class="non-nav">
      <SavingDetailHeader />
      <SavingDetailBody />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import SavingDetailNavVue from '@/components/SavingDetailComponents/SavingDetailNav.vue'
import SavingDetailBody from '@/components/SavingDetailComponents/SavingDetailBody.vue'
import Footer from "@/components/Footer.vue"
</script>

<style scoped>

.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>