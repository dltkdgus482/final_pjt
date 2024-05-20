<template>
  <div class="filter">
    <div class="save-type">
      <span>예금</span>
      <span>적금</span>
    </div>
    <div class="chioce">
      <div class="button"> < </div>
      <!-- <img class="arrow" src="/assets/arrow-left" alt="arrow-left"> -->
      <div class="bank"> <!--v-for-->
        <img src="" alt="">
        <p>은행명</p>
      </div>
      <div class="bank"> <!--v-for-->
        <img src="" alt="">
        <p>은행명</p>
      </div>
      <div class="bank"> <!--v-for-->
        <img src="" alt="">
        <p>은행명</p>
      </div>
      <div class="bank"> <!--v-for-->
        <img src="" alt="">
        <p>은행명</p>
      </div>
      <div class="bank"> <!--v-for-->
        <img src="" alt="">
        <p>은행명</p>
      </div>
      <div class="bank"> <!--v-for-->
        <img src="" alt="">
        <p>은행명</p>
      </div>
      <div class="button"> > </div>
      <!-- <img class="arrow" src="/assets/arrow-right" alt="arrow-right"> -->
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.filter{
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin: 10px 4px;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.save-type{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 120px;
  border-radius: 30px;
  margin: auto;
  margin-top: -5px;
  background-color: #f3f5f7;
  padding: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
}
.save-type span{
  border-radius: 30px;
  background-color: #fff;
  padding: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.chioce{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
}
.bank{
  border: solid 1px #d3d3d3;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 10%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bank p{
  font-size: 14px;
  line-height: 2;
  margin-bottom: 0px;
}
.button{
  text-align: center;
  line-height: 100%;
  border: solid 1px #d3d3d3;
  border-radius: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 20px;
  height: 20px;
}
</style>