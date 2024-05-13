<template>
  <div>
    <MapNav class="nav"/>
    <hr>
    <div class="non-nav">
      <h1>MapPage</h1>
      <hr>
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
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 36px;
  padding: 10px 20px;
}

.non-nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}
</style>