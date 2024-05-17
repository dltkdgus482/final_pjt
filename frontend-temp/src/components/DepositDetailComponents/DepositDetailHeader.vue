<template>
  <div class="deposit">
    <div class="simple-data">
      <div class="logo">
        <img src="" alt="">
        <p>
          은행명:
          <span>
            {{ 부산은행 }}
          </span> 
          <br>
          상품명: 
          <span>
            {{ 무슨무슨상품 }}
          </span>
        </p>
      </div>
      <div class="rate">
        <p class="best">
          최고금리
          <span>3.90%</span>
        </p>
        <p>
          기본금리
          <span>2.35%</span>
        </p>
      </div>
    </div>
    <div class="plus-data">
      부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명부연설명
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.deposit {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin: 10px 4px;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* align-items: center; */
  justify-content: space-between;
}

.simple-data {
  display: flex;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.logo p {
  font-size: 16px;
  line-height: 2;
}
.best {
  color: skyblue;
}
.best span{
  font-weight: bold;
  font-size: 18px;
}
.plus-data {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #ccc;
  text-align: left;
}

</style>