<template>
  <div class="account">
    <p class="page-owner">
      <h3>{{ userInfo.username }} 님의 페이지</h3>
      <hr>
      <div class="detail">
        <p class="dt">
          아이디
        </p>
        <p class="dd">
          {{ userInfo.username }}
        </p> 
        <p class="dt">
          이메일
        </p>
        <p class="dd">
          {{ userInfo.email }}
        </p> 
        <p class="dt">
          닉네임
        </p>
        <p class="dd">
          {{ userInfo.nickname }}
        </p> 
        <p class="dt">
          나이
        </p>
        <p class="dd">
          {{ userInfo.age }}
        </p> 
        <p class="dt">
          성별
        </p>
        <p class="dd">
          {{ userInfo.gender }}
        </p> 
        <p class="dt">
          연봉
        </p>
        <p class="dd">
          {{ userInfo.salary }}
        </p> 
      </div>
    </p>

    <p class="products">
      <h3 class="my-deposit">
        내가 가입한 상품 목록
      </h3>
      <hr> 

      <div class="box" v-if="myDeposits && myDeposits.length">
        <b>예금</b>
        <div class="deposit-data" v-for="(prdt, index) in myDeposits" :key="index">
          <span class="router" v-if="Array.isArray(prdt)">
            <img :src="'/assets/BankIcons/' + prdt[1] + '.png'" alt="#" width="42" height="42">
            <div class="bank">
              <h4>{{ prdt[0] }}</h4>
              <p class="color">{{ prdt[1] }}</p>
            </div>
            <div class="option">
              <p class="color">최고 
                <span class="numcolor">{{ prdt[3] }}%</span>  
              </p>
              <p>기본 
                <span>{{ prdt[2] }}%</span>
              </p>
            </div>
          </span>
        </div>
      </div>

      <div class="box" v-if="mySavings && mySavings.length">
        <b>적금</b>
        <div class="deposit-data" v-for="(prdt, index) in mySavings" :key="index">
          <span class="router" v-if="Array.isArray(prdt)">
            <img :src="'/assets/BankIcons/' + prdt[1] + '.png'" alt="#" width="42" height="42">
            <div class="bank">
              <h4>{{ prdt[0] }}</h4>
              <div class="color">{{ prdt[1] }}</div>
            </div>
            <div class="option">
              <p class="color">최고 
                <span class="numcolor">{{ prdt[3] }}%</span>  
              </p>
              <p>기본
                <span>{{ prdt[2] }}%</span>
              </p>
            </div>
          </span>
        </div>
      </div>
      
      <div v-else>
        <div>아직 가입한 금융상품이 없습니다</div>
      </div>
    </p>

    <p class="rate-chart">
      <h3>
        상품 금리 비교
        <hr>
      </h3>
      <canvas id="Chart"></canvas>
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
    return userInfo.value.financial_products
      .filter(prdt => prdt.trim() in deposits && Array.isArray(deposits[prdt.trim()]) && deposits[prdt.trim()][0].includes('예금'))
      .map(prdt => deposits[prdt.trim()])
  }
})

const mySavings = computed(() => {
  if (Array.isArray(userInfo.value.financial_products)) {
    return userInfo.value.financial_products
      .filter(prdt => prdt.trim() in savings && Array.isArray(savings[prdt.trim()]) && savings[prdt.trim()][0].includes('적금'))
      .map(prdt => savings[prdt.trim()])
  }
})
// const myDeposits = computed(() => {
//   if (Array.isArray(userInfo.value.financial_products)) {
//     return userInfo.value.financial_products.map((prdt) => {
//       return deposits[prdt.trim()]
//     })
//   } else {
//     return []
//   }
// })

// const mySavings = computed(() => {
//   if (Array.isArray(userInfo.value.financial_products)) {
//     return userInfo.value.financial_products.map((prdt) => {
//       return savings[prdt.trim()]
//     })
//   } else {
//     return []
//   }
// })

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
        data: myDeposits.value.filter(prdt => Array.isArray(prdt) && prdt.length).map(prdt => prdt[2])
  .concat(mySavings.value.filter(prdt => Array.isArray(prdt) && prdt.length).map(prdt => prdt[2])),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: '최고 금리',
        data: myDeposits.value.filter(prdt => Array.isArray(prdt) && prdt.length).map(prdt => prdt[3])
  .concat(mySavings.value.filter(prdt => Array.isArray(prdt) && prdt.length).map(prdt => prdt[3])),
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
/* .account p{
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px 18px;
  width: 90%;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
} */
.page-owner{
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px 18px;
  width: 568px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.detail {
  display: flex;
  /* width: 80%; */
  /* flex-direction: column; */
  /* min-width: 500px; */
  margin: 0 ;
  flex-wrap: wrap;
  justify-content: center;
}
.dt, .dd {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}
.dt {
  width: 10%;
  background-color: #f9f9f9;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  align-self: center;
}
.dd {
  width: 75%;
  background-color: #fff;
  text-align: left;
  padding-left: 20px;
}
.products{
  /* display: flex; */
  /* align-items: center; */
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px 18px;
  width: 568px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: center;
}
.my-deposit{
  /* text-align: center; */
  margin-top: 0px;
}
.box{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.deposit-data{
  display: flex;
  justify-content: center;
  border: solid 2px #eee;
  background-color: #fff;
  border-radius: 8px;
  /* padding: 20px 18px; */
  width: 90%;
  /* text-align: center; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
}
.rate-chart{
  border: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px 18px;
  width: 90%;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.router {
  text-decoration: none;
  font-size: 14px;
  /* line-height: 17px; */
  color: #404048;
  /* font-weight: 500; */
  display: flex;
  align-items: center;
  width: 90%;
  justify-content: space-between;
  margin: 0px;
  /* padding-left: 10px; */
  /* background-color: #eee; */
}

.bank {
  text-align: left;
  margin-left: 10px;
  margin-right: auto;
  width: 300px;
  height: 95%;
  /* line-height: ; */
}
.bank .color {
  margin-top: -10px;
  margin-left: 0px;
  color: gray;
}
.option{
  /* margin-right: 10px; */
}

.option .color{
  color: green;
}

.option .numcolor{
  color: green;
  font-size: 18px;
  font-weight: bold;
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
hr{
  border: solid 0.1px #eee;
}

</style>

