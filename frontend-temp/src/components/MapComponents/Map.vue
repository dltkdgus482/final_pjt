<template>
  <div class="map-container">
    <div id="map"></div>
    <div class="filter">
      <!-- <button @click="clear()">새로고침</button> -->
      <button @click="clear('전체')">전체</button>
      <button @click="clear('은행')">은행</button>
      <button @click="clear('ATM')">ATM</button>
      <button @click="currentPos()">현재 위치</button>
      <form @submit.prevent="clear(inputSearchKeyword); searchButtonClick()">
        <input type="text" v-model.trim="inputSearchKeyword">
        <button>검색</button>
      </form>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const api_key = import.meta.env.VITE_APP_KAKAO_MAP_API_KEY
const keyword = ref(null)
const inputSearchKeyword = ref(null)
const searchButtonClicked = ref(false)

let lat = 0
let lng = 0

let map = null
let clear = null
let currentPos = null
let markers = []

const searchButtonClick = () => {
  searchButtonClicked.value = true
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

  lat = 35.0934
  lng = 128.855691

  const options = {
    center: new kakao.maps.LatLng(lat, lng),
    level: 5,
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
      if (data && data.length > 0 && searchButtonClicked.value === true) {
        const position = new kakao.maps.LatLng(data[0].y, data[0].x)
        map.setCenter(position)
        searchButtonClicked.value = false
      }


      for (let i = 0; i < data.length; i++) {
        // if (data[i].place_name.includes('ATM')) {
        //   continue
        // }
        // console.log(data[i])
        displayMarker(data[i])
      }
    }
  }
  
  for (let page = 1; page < 3; page++) {
    searchOptions.page = page
    // ps.keywordSearch('은행', placesSearchCB, searchOptions)
    if (keyword.value == '전체') {
      ps.keywordSearch('은행', placesSearchCB, searchOptions)
      ps.keywordSearch('ATM', placesSearchCB, searchOptions)
    } else {
      ps.keywordSearch(keyword.value, placesSearchCB, searchOptions)
    }
  }

  clear = function (searchKeyword) {
    infowindow.close()
    keyword.value = searchKeyword

    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null)
    }
    markers = []

    if (keyword.value == '전체') {
      ps.keywordSearch('은행', placesSearchCB, searchOptions)
      ps.keywordSearch('ATM', placesSearchCB, searchOptions)
    } else if (keyword.value == '은행') {
      ps.keywordSearch('은행', placesSearchCB, searchOptions)
    } else if (keyword.value == 'ATM') {
      ps.keywordSearch('ATM', placesSearchCB, searchOptions)
    } else {
      ps.keywordSearch(keyword.value, placesSearchCB, searchOptions)
    }
  }
  
  const displayMarker = function (place) {
    const marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x),
    })

    markers.push(marker)
  
    kakao.maps.event.addListener(marker, 'click', function() {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
      infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>')
      infowindow.open(map, marker)
    })
  }

  kakao.maps.event.addListener(map, 'zoom_changed', function() {
    // ps.keywordSearch('은행', placesSearchCB, searchOptions)
    if (keyword.value == '전체') {
      ps.keywordSearch('은행', placesSearchCB, searchOptions)
      ps.keywordSearch('ATM', placesSearchCB, searchOptions)
    } else {
      ps.keywordSearch(keyword.value, placesSearchCB, searchOptions)
    }
  })

  kakao.maps.event.addListener(map, 'dragend', function() {
    // ps.keywordSearch('은행', placesSearchCB, searchOptions)
    if (keyword.value == '전체') {
      ps.keywordSearch('은행', placesSearchCB, searchOptions)
      ps.keywordSearch('ATM', placesSearchCB, searchOptions)
    } else {
      ps.keywordSearch(keyword.value, placesSearchCB, searchOptions)
    }
  })

  currentPos = function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude
        lng = position.coords.longitude
        map.setCenter(new kakao.maps.LatLng(lat, lng))
        if (keyword.value == '전체') {
          ps.keywordSearch('은행', placesSearchCB, searchOptions)
          ps.keywordSearch('ATM', placesSearchCB, searchOptions)
        } else {
          ps.keywordSearch(keyword.value, placesSearchCB, searchOptions)
        }
      })
    }
    
    else {
      alert('현재 위치를 찾을 수 없습니다.')
    }
  }
}


</script>

<style scoped>
.map-container {
  position: relative;
}

.filter {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
}

.filter button {
  height: 30px;
  font-size: 14px;
  border: solid 1px #d3d3d3;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-right: 10px;
  line-height: normal;
}

input {
  height: 30px;
  font-size: 14px;
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  line-height: normal;
  border: solid 1px #d3d3d3;
}

.filter button:hover {
  background-color: #eee;
}

#map {
  width: 100%;
  height: 600px;
  margin-top: 20px;
}
</style>