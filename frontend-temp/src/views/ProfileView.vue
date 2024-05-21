<template>
  <div>
    <ProfileNav />

    <div class="non-nav">
      <h1>ProfilePage</h1>
      <ProfileHeader />
      <ProfileBody />
      <ProfileFooter />
    </div>
  </div>
</template>

<script setup>
import ProfileNav from '@/components/ProfileComponents/ProfileNav.vue'
import ProfileHeader from '@/components/ProfileComponents/ProfileHeader.vue'
import ProfileBody from '@/components/ProfileComponents/ProfileBody.vue'
import ProfileFooter from '@/components/ProfileComponents/ProfileFooter.vue'
</script>

<style scoped>

.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>