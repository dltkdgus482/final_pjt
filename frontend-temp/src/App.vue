<template>
  <div>
    <RouterView />
    <BottomNavbarComponent class="bottom-navbar-component"/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import BottomNavbarComponent from '@/components/BottomNavbarComponent.vue'
</script>

<style scoped>

.BottomNavbarComponent {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}

</style>