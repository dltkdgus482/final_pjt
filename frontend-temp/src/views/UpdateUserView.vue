<template>
  <div>
    <UpdateUserNav />
    <div class="non-nav">
      <UpdateUserHeader />

      <UpdateUserBody />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import UpdateUserNav from "@/components/UpdateUserComponents/UpdateUserNav.vue"
import UpdateUserHeader from "@/components/UpdateUserComponents/UpdateUserHeader.vue"
import UpdateUserBody from "@/components/UpdateUserComponents/UpdateUserBody.vue"
import Footer from "@/components/Footer.vue"
</script>

<style scoped>
.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>