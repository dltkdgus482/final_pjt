<template>
  <div class="back">
    <RouterView />
    <Chatbot />
    <BottomNavbarComponent class="bottom-navbar-component"/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Chatbot from '@/components/Chatbot.vue'
import BottomNavbarComponent from '@/components/BottomNavbar.vue'
</script>

<style>

  body {
    margin: 0;
    background-color: gray;
  }
</style>