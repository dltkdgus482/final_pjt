<template>
  <div>
    <UpdatePasswordNav />
    <div class="non-nav">
      <UpdatePasswordHeader />

      <UpdatePasswordBody />
      <hr>
      <UpdatePasswordFooter />
    </div>
  </div>
</template>

<script setup>
import UpdatePasswordNav from "@/components/UpdatePasswordComponents/UpdatePasswordNav.vue"
import UpdatePasswordHeader from "@/components/UpdatePasswordComponents/UpdatePasswordHeader.vue"
import UpdatePasswordBody from "@/components/UpdatePasswordComponents/UpdatePasswordBody.vue"
import UpdatePasswordFooter from "@/components/UpdatePasswordComponents/UpdatePasswordFooter.vue"
</script>

<style scoped>
.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>