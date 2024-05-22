<template>
  <div>
    <MapNav />
    <div class="non-nav">
      <MapBody />
    </div>
  </div>
</template>

<script setup>
import MapNav from '@/components/MapComponents/MapNav.vue'
import MapBody from '@/components/MapComponents/MapBody.vue'
</script>

<style scoped>
.non-nav {

}

/* @media (min-width: 569px) {
  .non-nav {
    margin-left: auto;
    margin-right: auto;
    max-width: 768px;
  }
}

@media (min-width: 769px) {
  .non-nav {
    margin-left: auto;
    margin-right: auto;
    max-width: 992px;
  }
} */
</style>