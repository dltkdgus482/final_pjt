<template>
  <div>
    <h1>Map</h1>
    <div id="map"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const api_key = '1ea49f1aa17f10d56bae9ad831abfd60'
let map = null

onMounted(() => {
  if (window.kakao && window.kakao.maps) {
    initMap()
  } else {
    const script = document.createElement('script')
    /* global kakao */
    script.onload = () => kakao.maps.load(initMap)
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${api_key}`
    document.head.appendChild(script)
  }
})

const initMap = () => {
  const container = document.getElementById('map')
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 5,
  }

  // 지도 객체를 등록합니다.
  // 지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
  map = new kakao.maps.Map(container, options)
}
</script>

<style scoped>
#map {
  width: 400px;
  height: 400px;
}
</style>