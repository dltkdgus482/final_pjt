<template>
  <div class="comment">
    <div>
      <p class="author">작성자: {{ comment.user }}</p>
      <p class="date">작성일: {{ comment.created_at }}</p>
      <p class="text">{{ comment.content }}</p>
    </div>
    <div class="edit">
      <p @click.prevent="udpateComment">수정</p>
      <p @click.prevent="deleteComment">삭제</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  comment: Object,
  index: Number,
})

const updateComment = function () {

}

const deleteComment = function () {
  
}

</script>

<style scoped>
.comment {
  display: flex;
  justify-content: space-between;
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px 20px;
  padding-top: 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px 5px;
}
.text{
  /* margin: auto; */
  border: none;
  padding: 1px;
  word-wrap: break-word;
}
.author{
  font-size: 10px;
  color: #999;
} 
.date{
  font-size: 10px;
  color: #999;
}
.edit p{
  border: none;
  background-color: #f3f5f7;
  border-radius: 8px;
  padding: 4px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>