<template>
  <div>
    <LoginNav />
    <div class="non-nav">
      <LoginBody />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import LoginNav from "@/components/LoginComponents/LoginNav.vue"

import LoginBody from "@/components/LoginComponents/LoginBody.vue"
import Footer from "@/components/Footer.vue"
</script>

<style scoped>
.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>