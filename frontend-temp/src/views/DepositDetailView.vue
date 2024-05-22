<template>
  <div>
    <DepositDetailNav />
    <div class="non-nav">

      <DepositDetailHeader />
      <DepositDetailBody/>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import DepositDetailNav from '@/components/DepositDetailComponents/DepositDetailNav.vue'
import DepositDetailHeader from '@/components/DepositDetailComponents/DepositDetailHeader.vue'
import DepositDetailBody from '@/components/DepositDetailComponents/DepositDetailBody.vue'
import Footer from "@/components/Footer.vue"
</script>

<style scoped>
.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>