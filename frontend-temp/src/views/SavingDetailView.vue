<template>
  <div>
    <SavingDetailNavVue />

    <div class="non-nav">
      <SavingDetailHeader />
      <SavingDetailBody />
      <SavingDetailFooter />
    </div>
  </div>
</template>

<script setup>
import SavingDetailNavVue from '@/components/SavingDetailComponents/SavingDetailNav.vue'
import SavingDetailBody from '@/components/SavingDetailComponents/SavingDetailBody.vue'
import SavingDetailFooter from '@/components/SavingDetailComponents/SavingDetailFooter.vue'
</script>

<style scoped>

.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>