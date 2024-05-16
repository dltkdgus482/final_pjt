<template>
  <div>
    <h1>CommentCreate</h1>
    <div class="create-comment">
      <input type="text">
      <button class="comment-write">댓글 작성</button>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.create-comment {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 5px;
}

.comment-write {
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
</style>