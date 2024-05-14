<template>
  <div>
    <p>{{ index }}번째 댓글: {{ comment.content }}</p>
  </div>
</template>

<script setup>
defineProps({
  comment: Object,
  index: Number,
})
</script>

<style scoped>

</style>