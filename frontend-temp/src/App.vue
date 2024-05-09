<template>
  <div>
    <HeaderComponent class="header-component"/>
    <BodyComponent class="border body-component"/>
    <FooterComponent class="border footer-component"/>
    <BottomNavbarComponent class="bottom-navbar-component"/>
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import BodyComponent from '@/components/BodyComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import BottomNavbarComponent from '@/components/BottomNavbarComponent.vue'
</script>

<style scoped>
.border {
  border: 1px solid black;
  border-radius: 8px;
}
.header-component {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 36px;
  padding: 10px 20px;
}

.body-component {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}

.footer-component {
  margin-left: auto;
  margin-right: auto;
  max-width: 568px;
}

.bottom-navbar-component {
}
</style>