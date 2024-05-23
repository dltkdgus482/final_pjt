<template>
  <div class="out">
    <div class="in">
      <Router-link :to="{ name: 'MainView' }">
        <!-- 로고 -->
        <svg width="39" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
          <g>
            <g id="g2303_00000031922597863478397790000004595394903733610625_">
              <path id="path1948_00000134962089881649523420000009399677824023126944_" d="M11.859,0C10.88,0.005,9.945,0.088,9.123,0.234    C6.7,0.662,6.26,1.558,6.26,3.21v2.182h5.726V6.12H6.26H4.111c-1.664,0-3.121,1-3.577,2.903c-0.526,2.181-0.549,3.542,0,5.819    c0.407,1.695,1.379,2.903,3.043,2.903h1.969v-2.616c0-1.89,1.635-3.557,3.577-3.557h5.719c1.592,0,2.863-1.311,2.863-2.91V3.21    c0-1.552-1.309-2.717-2.863-2.976C13.858,0.07,12.837-0.004,11.859,0z M8.762,1.755c0.591,0,1.074,0.491,1.074,1.094    c0,0.601-0.483,1.088-1.074,1.088c-0.594,0-1.074-0.486-1.074-1.088C7.688,2.246,8.169,1.755,8.762,1.755z"/>
              <path id="path1950_00000083807539188134144630000011128538031068007323_" d="M18.418,6.12v2.543c0,1.971-1.671,3.63-3.577,3.63    H9.123c-1.567,0-2.863,1.341-2.863,2.91v5.452c0,1.552,1.349,2.464,2.863,2.91c1.812,0.533,3.55,0.629,5.719,0    c1.441-0.417,2.863-1.257,2.863-2.91v-2.182h-5.719v-0.727h5.719h2.863c1.664,0,2.284-1.161,2.863-2.903    c0.598-1.794,0.572-3.518,0-5.819c-0.411-1.657-1.197-2.903-2.863-2.903H18.418z M15.202,19.927c0.594,0,1.074,0.486,1.074,1.088    c0,0.604-0.481,1.094-1.074,1.094c-0.591,0-1.074-0.491-1.074-1.094C14.128,20.413,14.611,19.927,15.202,19.927z"/>
            </g>
          </g>
        </svg>
        <!-- 페이지 이름 -->
        <svg id="Layer_7" data-name="Layer 7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.42 22.49">
          <text class="cls-1" transform="translate(.24 19.5)"><tspan x="0" y="0">금융</tspan></text>
        </svg>
      </Router-link>

      <span>
        <!-- 내 정보 버튼 -->
        <Router-link v-if="isAuthenticated" :to="{ name: 'ProfileView' }">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 3.94772 2.44772 3.5 3 3.5H21C21.5523 3.5 22 3.94772 22 4.5C22 5.05228 21.5523 5.5 21 5.5H3C2.44772 5.5 2 5.05228 2 4.5Z" fill="#1E1E23"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12.5C2 11.9477 2.44772 11.5 3 11.5H21C21.5523 11.5 22 11.9477 22 12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5Z" fill="#1E1E23"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 20.5C2 19.9477 2.44772 19.5 3 19.5H21C21.5523 19.5 22 19.9477 22 20.5C22 21.0523 21.5523 21.5 21 21.5H3C2.44772 21.5 2 21.0523 2 20.5Z" fill="#1E1E23"></path>
          </svg>
        </Router-link>
        <Router-link v-else :to="{ name: 'LoginView' }">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 3.94772 2.44772 3.5 3 3.5H21C21.5523 3.5 22 3.94772 22 4.5C22 5.05228 21.5523 5.5 21 5.5H3C2.44772 5.5 2 5.05228 2 4.5Z" fill="#1E1E23"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12.5C2 11.9477 2.44772 11.5 3 11.5H21C21.5523 11.5 22 11.9477 22 12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5Z" fill="#1E1E23"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 20.5C2 19.9477 2.44772 19.5 3 19.5H21C21.5523 19.5 22 19.9477 22 20.5C22 21.0523 21.5523 21.5 21 21.5H3C2.44772 21.5 2 21.0523 2 20.5Z" fill="#1E1E23"></path>
          </svg>
        </Router-link>
      </span>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const store = useCounterStore()

    const isAuthenticated = computed(() => store && store.token)

    return {
      isAuthenticated
    }
  }
}
</script>

<style scoped>
.in{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  white-space: nowrap;
  margin: 0 auto;
  max-width: 1120px;
  min-height: 56px;
  box-sizing: border-box;
  background-color: white
}
.out{
  background-color: white;
}
.cls-1 {
  fill: #231815;
  font-family: AppleSDGothicNeo-Bold-KSCpc-EUC-H, 'Apple SD Gothic Neo';
  font-size: 19px;
  font-weight: 1000;
}
</style>