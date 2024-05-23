<template>
  <div class="back">
    <RouterView />
    <Chatbot v-if="showChatbot"/>
    <BottomNavbarComponent class="bottom-navbar-component"/>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import Chatbot from '@/components/Chatbot.vue'
import BottomNavbarComponent from '@/components/BottomNavbar.vue'

const route = useRoute()

const showChatbot = computed(() => route.name != 'MainView' && route.name != 'LoginView' && route.name != 'SignUpView' && route.name != 'UpdatePasswordView' && route.name != 'UpdateUserView')
</script>

<style>

  body {
    margin: 0;
    background-color: #f3f5f7;
  }
</style>