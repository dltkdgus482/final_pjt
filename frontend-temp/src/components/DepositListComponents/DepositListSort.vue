<template>
  <div class="deposit-sort">
    <div>
      <span class="count">
        {{ 100 }}
      </span>
      <b>
        개
      </b>
    </div>
    <!-- <div class="dropdown">
      <button>정렬버튼</button>
    </div> -->

  </div>
</template>

<script setup>

</script>

<style scoped>
.count {
  font-size: 20px;
  color: blue;
  font-weight: bold;
  margin-left: 10px;
}
.deposit-sort {
  border-radius: 8px;
  margin: 16px 4px;
  background-color: #fff;
  padding: 10px 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
/* .dropdown{
  margin-right: 10px;
}
.dropdown button{
  border-radius: 8px;
  border: 0.5px solid gray;
  padding: 4px 10px;
  font-size: 14px;
  border: none;
  cursor: pointer;
} */


</style>