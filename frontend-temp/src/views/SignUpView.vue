<template>
  <div>
    <SignUpNav />
    <div class="non-nav">
      <SignUpHeader />

      <SignUpBody />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import SignUpNav from "@/components/SignUpComponents/SignUpNav.vue"
import SignUpHeader from "@/components/SignUpComponents/SignUpHeader.vue"
import SignUpBody from "@/components/SignUpComponents/SignUpBody.vue"
import Footer from "@/components/Footer.vue"
</script>

<style scoped>
.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>