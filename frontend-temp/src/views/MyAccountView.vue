<template>
  <div>
    <MyAccountNav />

    <div class="non-nav">
      <h1>MyAccountPage</h1>
      <MyAccountBody />
      <MyAccountFooter />
    </div>
  </div>
</template>

<script setup>
import MyAccountNav from '@/components/MyAccountComponents/MyAccountNav.vue'
import MyAccountBody from '@/components/MyAccountComponents/MyAccountBody.vue'
import MyAccountFooter from '@/components/MyAccountComponents/MyAccountFooter.vue'
</script>

<style scoped>

.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>