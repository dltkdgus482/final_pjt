<template>
  <div>
    <DepositDetailNav />
    <hr>
    <div class="non-nav">
      <h1>DepositDetailPage</h1>
      <hr>
      <DepositDetailHeader />
      <hr>
      <DepositDetailBody />
      <hr>
      <DepositDetailFooter />
    </div>
  </div>
</template>

<script setup>
import DepositDetailNav from '@/components/DepositDetailComponents/DepositDetailNav.vue'
import DepositDetailHeader from '@/components/DepositDetailComponents/DepositDetailHeader.vue'
import DepositDetailBody from '@/components/DepositDetailComponents/DepositDetailBody.vue'
import DepositDetailFooter from '@/components/DepositDetailComponents/DepositDetailFooter.vue'
</script>

<style scoped>
.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>