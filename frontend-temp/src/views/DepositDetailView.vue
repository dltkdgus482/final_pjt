<template>
  <div>
    <DepositListNavVue class="nav"/>
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
import DepositListNavVue from '../components/DepositListComponents/DepositListNav.vue'
import DepositDetailHeader from '@/components/DepositDetailComponents/DepositDetailHeader.vue'
import DepositDetailBody from '@/components/DepositDetailComponents/DepositDetailBody.vue'
import DepositDetailFooter from '@/components/DepositDetailComponents/DepositDetailFooter.vue'
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 36px;
  padding: 10px 20px;
}

.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>