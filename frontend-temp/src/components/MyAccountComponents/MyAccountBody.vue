<template>
  <div class="account">
    <p class="page-owner">{{ 닉네임 }} 님의 페이지</p>
    <p>내가 쓴 글</p>
    <p>좋아요 누른 글</p>
    <p>좋아요 누른 예/적금</p>
    <div class="update">
      <button>내 정보 변경</button>
      <button>비밀번호 변경</button>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .account{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 17px;
  }
  .account p{
    border: none;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px 18px;
    width: 80%;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .page-owner{
    margin-bottom: 40px;
  }
  .update button{
    border: none;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 30px;
    font-size: 17px;
  }

</style>