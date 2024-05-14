<template>
  <div>
    <MainPageNav />
    <div class="non-nav">
      <MainPageHeader />
      <MainPageBody />
      <MainPageFooter />
    </div>
  </div>
</template>

<script setup>
import MainPageNav from '@/components/MainPageComponents/MainPageNav.vue'
import MainPageHeader from '@/components/MainPageComponents/MainPageHeader.vue'
import MainPageBody from '@/components/MainPageComponents/MainPageBody.vue'
import MainPageFooter from '@/components/MainPageComponents/MainPageFooter.vue'
</script>

<style scoped>
.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>