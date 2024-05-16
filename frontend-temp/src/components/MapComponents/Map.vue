<template>
  <div>
    <button @click="clear()">초기화</button>
    <div id="map"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const api_key = import.meta.env.VITE_APP_KAKAO_MAP_API_KEY
let map = null
let markers = []

const clear = function () {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null)
  }
  markers = []
}

onMounted(() => {
  if (window.kakao && window.kakao.maps) {
    initMap()
  } else {
    const script = document.createElement('script')
    /* global kakao */
    script.onload = () => kakao.maps.load(initMap)
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${api_key}&libraries=services`
    document.head.appendChild(script)
  }
})

const initMap = () => {
  const infowindow = new kakao.maps.InfoWindow({zIndex:1})
  const container = document.getElementById('map')
  const options = {
    center: new kakao.maps.LatLng(35.095393, 128.855691),
    level: 6,
  }

  // 지도 객체를 등록합니다.
  // 지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
  map = new kakao.maps.Map(container, options)
  
  const ps = new kakao.maps.services.Places(map)
  
  const searchOptions = {
    useMapBounds: true,
  }

  const placesSearchCB = function (data, status) {
    if (status === kakao.maps.services.Status.OK) {
      for (let i = 0; i < data.length; i++) {
        displayMarker(data[i])
      }
    }
  }
  
  for (let page = 1; page < 3; page++) {
    searchOptions.page = page
    ps.categorySearch('BK9', placesSearchCB, searchOptions)
  }
  
  
  const displayMarker = function (place) {
    const marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x),
    })
  
    kakao.maps.event.addListener(marker, 'click', function() {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
      infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
      infowindow.open(map, marker)
    })
  }

  kakao.maps.event.addListener(map, 'zoom_changed', function() {
    ps.categorySearch('BK9', placesSearchCB, searchOptions)
  })

  kakao.maps.event.addListener(map, 'dragend', function() {
    ps.categorySearch('BK9', placesSearchCB, searchOptions)
  })
}


</script>

<style scoped>
#map {
  width: 100%;
  height: 550px;
}
</style>