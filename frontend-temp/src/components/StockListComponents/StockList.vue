<template>
  <div>
      <Router-link class="coin-list" :to="{ name: 'StockDetailView', params: { stockId: coin.market } }">
        <div class="coin">
          <p class="like">{{ index }}</p>
          <img class="coin-icon" :src="`/assets/coinIcons/${coin.market.replace('KRW-', '')}.png`" alt="coinIcons">
          <p class="coin-name">{{ coin.korean_name }}</p>
        </div>
        <div class="coin-price">
          <p class="percent">{{ (signedChangeRate * 100).toFixed(2) }}%</p>
          <p class="current-price">{{ currentPrice.toLocaleString() }} 원</p>
        </div>
        <div class="tarde-amount">
          <p class="amount-coin">{{ acc_trade_volume_24h.toFixed(2) }} {{ coin.market.replace('KRW-', '') }}</p>
          <p class="amount-won">{{ Math.floor(acc_trade_price_24h / 100000000) }} 억</p>
        </div>
      </Router-link>
  </div>
</template>

<script setup>
defineProps({
  coin: Object,
  currentPrice: Number,
  signedChangeRate: Number,
  acc_trade_price_24h: Number,
  acc_trade_volume_24h: Number,
  index: Number,
})
</script>

<style scoped>
.coin-list {
  border-radius: 8px;
  margin: 10px 4px;
  background-color: #fff;
  padding: 8px 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  text-decoration: none;
  line-height: 17px;
  color: #404048;
  cursor: pointer;
}
/* 종목부분 */
.coin{
  display: flex;
  align-items: center;
  width: 200px;
  margin-right: 10px;
}
.like {
  width: 20px;
}
.coin-icon {
  width: 42px;
  height: 42px;
  margin-right: 10px;
}
.coin-name{
  word-wrap: break-word;
}
/* 등락률부분 */
.coin-price{
  display: flex;
  flex-direction: column;
  text-align: right;
  width: 110px;
}
.percent{
  margin: 0px;
  font-size: 20px;
  color: black;
  /* +빨강 0 검은색 -파란색 */
}
.current-price{
  margin: 0px;
  margin-top: 4px;
  font-size: 14px;
}
/* 거래량부분 */
.tarde-amount {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: right;
  width: 170px;
  margin-left: auto;
}
.amount-coin{
  width: 170px;
  margin: 0px;
  word-wrap: break-word;
}
.amount-won{
  margin: 0px;
  margin-top: 4px;
  font-size: 12px;
  color: gray;
}
</style>