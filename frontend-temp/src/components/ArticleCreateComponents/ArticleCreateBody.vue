<template>
  <div>
    <div>
      <h3>제목</h3>
      <input class="title-box" type="text" placeholder="제목을 입력하세요.">
    </div>
    <div>
      <h3>내용</h3>
      <textarea class="content-box" placeholder="내용을 입력하세요."></textarea>
      <!-- <input class="content-box" type="text" placeholder="Write your article content here..."> -->
    </div>
    <div class="select">
      <h3>분류</h3>
      <select class="select-box" name="" id="">
        <option value="">금융</option>
        <option value="">증권</option>
      </select>
    </div>
    <div class="submit">
      <button class="button">제출</button>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

.title-box {
  font-family: none;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding-left: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px 5px;  
}

.content-box {
  font-family: none;
  width: 100%;
  min-height: 300px;
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding-left: 10px;
  padding-top: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px 5px;
  /* word-wrap: break-word; */
  resize: none;
  
}

.select-box {
  width: 10%;
  height: 40px;
  margin-bottom: 20px;
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding-left: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 5px;
}
.submit{
  display: flex;
}
.button{
  align-self: flex-end;
  margin-left: auto;
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 5px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
}
</style>