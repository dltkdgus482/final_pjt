<template>
  <div>
    <MapNav />
    <div class="non-nav">
      <MapHeader />
      <hr>
      <MapBody />
      <hr>
      <MapFooter />
    </div>
  </div>
</template>

<script setup>
import MapNav from '@/components/MapComponents/MapNav.vue'
import MapHeader from '@/components/MapComponents/MapHeader.vue'
import MapBody from '@/components/MapComponents/MapBody.vue'
import MapFooter from '@/components/MapComponents/MapFooter.vue'
</script>

<style scoped>
.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}

@media (min-width: 569px) {
  .non-nav {
    max-width: 768px;
  }
}

@media (min-width: 769px) {
  .non-nav {
    max-width: 992px;
  }
}
</style>