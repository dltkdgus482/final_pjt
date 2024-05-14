<template>
  <div>
    <div>
      <p>Title</p>
      <input class="title-box" type="text" placeholder="Enter a title">
    </div>
    <div>
      <p>Content</p>
      <input class="content-box" type="text" placeholder="Write your article content here...">
    </div>
    <div class="select">
      <p>Category</p>
      <select class="select-box" name="" id="">
        <option value="">금융</option>
        <option value="">증권</option>
      </select>
    </div>
    <button>Publish</button>
  </div>
</template>

<script setup>

</script>

<style scoped>
.title-box {
  width: 80%;
  height: 40px;
  margin-bottom: 20px;
}

.content-box {
  width: 80%;
  height: 192px;
  margin-bottom: 20px;
}

.select-box {
  width: 80%;
  height: 40px;
  margin-bottom: 20px;
}
</style>