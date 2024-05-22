<template>
  <h2>{{ userInfo.nickname }} 님의 페이지</h2>
  <div class="account">
    <!-- <p class="page-owner">
      {{ userInfo.nickname }} 님의 페이지
      <hr>
      <div>{{ userInfo }}</div>
    </p> -->
    <p>
      <h3 class="my-deposit">
        가입한 상품
      </h3>
      <hr>
      <div v-if="myDeposits && myDeposits.length">
        <div class="deposit-data" v-for="(prdt, index) in myDeposits" :key="index">
          <span v-if="prdt && prdt.length">상품명: {{ prdt[0] }}, 기본 금리: {{ prdt[1] }}, 최고 금리: {{ prdt[2] }}</span>
        </div>
        <br>
        <canvas id="Chart"></canvas>
      </div>
      <div v-else-if="mySavings && mySavings.length">
        <div class="deposit-data" v-for="(prdt, index) in mySavings" :key="index">
          <span v-if="prdt && prdt.length">상품명: {{ prdt[0] }}, 기본 금리: {{ prdt[1] }}, 최고 금리: {{ prdt[2] }}</span>
        </div>
        <br>
        <canvas id="Chart"></canvas>
      </div>
      <div v-else>
        <div>아직 가입한 금융상품이 없습니다</div>
      </div>
    </p>
    <!-- <p>
      <div>
        나의 적금상품
      </div>
      <hr class="hr">
      <div v-if="mySavings && mySavings.length">
        <div v-for="(prdt, index) in mySavings" :key="index">
          <span v-if="prdt && prdt.length">상품명: {{ prdt[0] }}, 기본 금리: {{ prdt[1] }}, 최고 금리: {{ prdt[2] }}</span>
        </div>
      </div>
      <div v-else>
        <div>아직 가입한 금융상품이 없습니다</div>
      </div>
    </p> -->
    <p>
      <h3 class="my-article">
        나의 게시글
      </h3>
      <hr>
    </p>

    <div class="update">
      <Router-link v-if="userInfo && userInfo.username" :to="{ name: 'UpdateUserView', params: { 'username': userInfo.username } }">
        <button>내 정보 변경</button>
      </Router-link>
      <Router-link v-if="userInfo && userInfo.username" :to="{ name: 'UpdatePasswordView', params: { 'username': userInfo.username } }">
        <button>비밀번호 변경</button>
      </Router-link>
      <button v-if="isAuthenticated" @click="signout">회원탈퇴</button>
      <button v-if="isAuthenticated" @click="logout">로그아웃</button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios"
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

let chart = null

const store = useCounterStore()
const route = useRoute()
const router = useRouter()

const deposits = store.deposit_prdt_obj
const savings = store.saving_prdt_obj

const myDeposits = computed(() => {
  if (Array.isArray(userInfo.value.financial_products)) {
    return userInfo.value.financial_products.map((prdt) => {
      return deposits[prdt.trim()]
    })
  } else {
    return []
  }
})

const mySavings = computed(() => {
  if (Array.isArray(userInfo.value.financial_products)) {
    return userInfo.value.financial_products.map((prdt) => {
      return savings[prdt.trim()]
    })
  } else {
    return []
  }
})

const userInfo = ref({
  username: '',
  age: '',
  financial_products: '',
  nickname: '',
  pk: '',
  salary: '',
  email: '',
})

axios.defaults.withCredentials = false

onMounted(async () => {
  await axios({
    method: 'GET',
    url: 'http://127.0.0.1:8000/dj-rest-auth/user/',
    headers: {
      'Authorization': `Token ${store.token}`,
    },
  })
  .then((response) => {
    userInfo.value = response.data
    userInfo.value.financial_products = userInfo.value.financial_products.split(',')
  }).then(() => {
    getData()
  })
})

const getData = function () {
  const ctx = document.getElementById('Chart').getContext('2d')
  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: myDeposits.value.filter(prdt => Array.isArray(prdt) && prdt.length > 0).map(prdt => prdt[0])
  .concat(mySavings.value.filter(prdt => Array.isArray(prdt) && prdt.length > 0).map(prdt => prdt[0])),
      datasets: [{
        label: '기본 금리',
        data: myDeposits.value.filter(prdt => Array.isArray(prdt) && prdt.length).map(prdt => prdt[1])
  .concat(mySavings.value.filter(prdt => Array.isArray(prdt) && prdt.length).map(prdt => prdt[1])),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: '최고 금리',
        data: myDeposits.value.filter(prdt => Array.isArray(prdt) && prdt.length).map(prdt => prdt[2])
  .concat(mySavings.value.filter(prdt => Array.isArray(prdt) && prdt.length).map(prdt => prdt[2])),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      aspectRatio: 1.2,
      scales: {
        x: {
          ticks: {
            font: {
              size: 10, // 원하는 폰트 크기로 변경
            }
          }
        },
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          labels: {
            font: {
              size: 14, // 범례 원하는 폰트 크기로 변경
            }
          }
        },
      },
    }
  })
}


axios.defaults.withCredentials = false

const isLogin = ref(false)

const signout = () => {
  store.signout()
}
const logout = () => {
  store.logout()
}
const isAuthenticated = computed(() => store && store.token)
onMounted(() => {
  isLogin.value = store && store.token !== null && store.token !== ''
})
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
    width: 90%;
    /* text-align: center; */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .page-owner{
    margin-bottom: 40px;
    text-align: center;
  }
  .my-deposit{
    /* text-align: center; */
    margin-top: 0px;
  }
  .deposit-data{
    margin-top: 8px;
    padding: 6px;
    border: none;
    /* background-color: #fff; */
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .my-article{
    /* text-align: center; */
    margin-top: 0px;
  }
.update {
  width: 90%;
  display: flex;
  justify-content: space-evenly;
}

.update button {
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* margin: 10px; */
  font-size: 14px;
  /* flex-shrink: 0; 버튼들이 줄어들지 않도록 설정 */
  cursor: pointer;
}

</style>

