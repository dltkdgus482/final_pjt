import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'


export const useCounterStore = defineStore('counter', () => {
  // 예, 적금 관련 데이터

  const deposits = ref([])
  const savings = ref([])

  // 주식, 가상화폐 관련 데이터
  const coinData = [{"market": "KRW-BTC", "korean_name": "\ube44\ud2b8\ucf54\uc778"}, {"market": "KRW-ETH", "korean_name": "\uc774\ub354\ub9ac\uc6c0"}, {"market": "KRW-NEO", "korean_name": "\ub124\uc624"}, {"market": "KRW-MTL", "korean_name": "\uba54\ud0c8"}, {"market": "KRW-XRP", "korean_name": "\ub9ac\ud50c"}, {"market": "KRW-ETC", "korean_name": "\uc774\ub354\ub9ac\uc6c0\ud074\ub798\uc2dd"}, {"market": "KRW-SNT", "korean_name": "\uc2a4\ud14c\uc774\ud130\uc2a4\ub124\ud2b8\uc6cc\ud06c\ud1a0\ud070"}, {"market": "KRW-WAVES", "korean_name": "\uc6e8\uc774\ube0c"}, {"market": "KRW-XEM", "korean_name": "\ub134"}, {"market": "KRW-QTUM", "korean_name": "\ud000\ud140"}, {"market": "KRW-LSK", "korean_name": "\ub9ac\uc2a4\ud06c"}, {"market": "KRW-STEEM", "korean_name": "\uc2a4\ud300"}, {"market": "KRW-XLM", "korean_name": "\uc2a4\ud154\ub77c\ub8e8\uba58"}, {"market": "KRW-ARDR", "korean_name": "\uc544\ub354"}, {"market": "KRW-ARK", "korean_name": "\uc544\ud06c"}, {"market": "KRW-STORJ", "korean_name": "\uc2a4\ud1a0\ub9ac\uc9c0"}, {"market": "KRW-GRS", "korean_name": "\uadf8\ub85c\uc2a4\ud1a8\ucf54\uc778"}, {"market": "KRW-ADA", "korean_name": "\uc5d0\uc774\ub2e4"}, {"market": "KRW-SBD", "korean_name": "\uc2a4\ud300\ub2ec\ub7ec"}, {"market": "KRW-POWR", "korean_name": "\ud30c\uc6cc\ub81b\uc800"}, {"market": "KRW-BTG", "korean_name": "\ube44\ud2b8\ucf54\uc778\uace8\ub4dc"}, {"market": "KRW-ICX", "korean_name": "\uc544\uc774\ucf58"}, {"market": "KRW-EOS", "korean_name": "\uc774\uc624\uc2a4"}, {"market": "KRW-TRX", "korean_name": "\ud2b8\ub860"}, {"market": "KRW-SC", "korean_name": "\uc2dc\uc544\ucf54\uc778"}, {"market": "KRW-ONT", "korean_name": "\uc628\ud1a8\ub85c\uc9c0"}, {"market": "KRW-ZIL", "korean_name": "\uc9c8\ub9ac\uce74"}, {"market": "KRW-POLYX", "korean_name": "\ud3f4\ub9ac\ub9e4\uc26c"}, {"market": "KRW-ZRX", "korean_name": "\uc81c\ub85c\uc5d1\uc2a4"}, {"market": "KRW-LOOM", "korean_name": "\ub8f8\ub124\ud2b8\uc6cc\ud06c"}, {"market": "KRW-BCH", "korean_name": "\ube44\ud2b8\ucf54\uc778\uce90\uc2dc"}, {"market": "KRW-BAT", "korean_name": "\ubca0\uc774\uc9c1\uc5b4\ud150\uc158\ud1a0\ud070"}, {"market": "KRW-IOST", "korean_name": "\uc544\uc774\uc624\uc5d0\uc2a4\ud2f0"}, {"market": "KRW-CVC", "korean_name": "\uc2dc\ube45"}, {"market": "KRW-IQ", "korean_name": "\uc544\uc774\ud050"}, {"market": "KRW-IOTA", "korean_name": "\uc544\uc774\uc624\ud0c0"}, {"market": "KRW-HIFI", "korean_name": "\ud558\uc774\ud30c\uc774"}, {"market": "KRW-ONG", "korean_name": "\uc628\ud1a8\ub85c\uc9c0\uac00\uc2a4"}, {"market": "KRW-GAS", "korean_name": "\uac00\uc2a4"}, {"market": "KRW-UPP", "korean_name": "\uc13c\ud2f0\ub12c\ud504\ub85c\ud1a0\ucf5c"}, {"market": "KRW-ELF", "korean_name": "\uc5d8\ud504"}, {"market": "KRW-KNC", "korean_name": "\uce74\uc774\ubc84\ub124\ud2b8\uc6cc\ud06c"}, {"market": "KRW-BSV", "korean_name": "\ube44\ud2b8\ucf54\uc778\uc5d0\uc2a4\ube0c\uc774"}, {"market": "KRW-THETA", "korean_name": "\uc384\ud0c0\ud1a0\ud070"}, {"market": "KRW-QKC", "korean_name": "\ucffc\ud06c\uccb4\uc778"}, {"market": "KRW-BTT", "korean_name": "\ube44\ud2b8\ud1a0\ub80c\ud2b8"}, {"market": "KRW-MOC", "korean_name": "\ubaa8\uc2a4\ucf54\uc778"}, {"market": "KRW-TFUEL", "korean_name": "\uc384\ud0c0\ud4e8\uc5d8"}, {"market": "KRW-MANA", "korean_name": "\ub514\uc13c\ud2b8\ub7f4\ub79c\ub4dc"}, {"market": "KRW-ANKR", "korean_name": "\uc575\ucee4"}, {"market": "KRW-AERGO", "korean_name": "\uc544\ub974\uace0"}, {"market": "KRW-ATOM", "korean_name": "\ucf54\uc2a4\ubaa8\uc2a4"}, {"market": "KRW-TT", "korean_name": "\uc36c\ub354\ucf54\uc5b4"}, {"market": "KRW-CRE", "korean_name": "\uce90\ub9ac\ud504\ub85c\ud1a0\ucf5c"}, {"market": "KRW-MBL", "korean_name": "\ubb34\ube44\ube14\ub85d"}, {"market": "KRW-WAXP", "korean_name": "\uc641\uc2a4"}, {"market": "KRW-HBAR", "korean_name": "\ud5e4\ub370\ub77c"}, {"market": "KRW-MED", "korean_name": "\uba54\ub514\ube14\ub85d"}, {"market": "KRW-MLK", "korean_name": "\ubc00\ud06c"}, {"market": "KRW-STPT", "korean_name": "\uc5d0\uc2a4\ud2f0\ud53c"}, {"market": "KRW-ORBS", "korean_name": "\uc624\ube0c\uc2a4"}, {"market": "KRW-VET", "korean_name": "\ube44\uccb4\uc778"}, {"market": "KRW-CHZ", "korean_name": "\uce60\ub9ac\uc988"}, {"market": "KRW-STMX", "korean_name": "\uc2a4\ud1b0\uc5d1\uc2a4"}, {"market": "KRW-DKA", "korean_name": "\ub514\uce74\ub974\uace0"}, {"market": "KRW-HIVE", "korean_name": "\ud558\uc774\ube0c"}, {"market": "KRW-KAVA", "korean_name": "\uce74\ubc14"}, {"market": "KRW-AHT", "korean_name": "\uc544\ud558\ud1a0\ud070"}, {"market": "KRW-LINK", "korean_name": "\uccb4\uc778\ub9c1\ud06c"}, {"market": "KRW-XTZ", "korean_name": "\ud14c\uc870\uc2a4"}, {"market": "KRW-BORA", "korean_name": "\ubcf4\ub77c"}, {"market": "KRW-JST", "korean_name": "\uc800\uc2a4\ud2b8"}, {"market": "KRW-CRO", "korean_name": "\ud06c\ub85c\ub178\uc2a4"}, {"market": "KRW-TON", "korean_name": "\ud1a0\uce74\ub9c9\ub124\ud2b8\uc6cc\ud06c"}, {"market": "KRW-SXP", "korean_name": "\uc194\ub77c"}, {"market": "KRW-HUNT", "korean_name": "\ud5cc\ud2b8"}, {"market": "KRW-DOT", "korean_name": "\ud3f4\uce74\ub2f7"}, {"market": "KRW-MVL", "korean_name": "\uc5e0\ube14"}, {"market": "KRW-STRAX", "korean_name": "\uc2a4\ud2b8\ub77c\ud2f0\uc2a4"}, {"market": "KRW-AQT", "korean_name": "\uc54c\ud30c\ucffc\ud06c"}, {"market": "KRW-GLM", "korean_name": "\uace8\ub818"}, {"market": "KRW-META", "korean_name": "\uba54\ud0c0\ub514\uc6c0"}, {"market": "KRW-FCT2", "korean_name": "\ud53c\ub974\ub9c8\uccb4\uc778"}, {"market": "KRW-CBK", "korean_name": "\ucf54\ubc15\ud1a0\ud070"}, {"market": "KRW-SAND", "korean_name": "\uc0cc\ub4dc\ubc15\uc2a4"}, {"market": "KRW-HPO", "korean_name": "\ud788\ud3ec\ud06c\ub78f"}, {"market": "KRW-DOGE", "korean_name": "\ub3c4\uc9c0\ucf54\uc778"}, {"market": "KRW-STRIKE", "korean_name": "\uc2a4\ud2b8\ub77c\uc774\ud06c"}, {"market": "KRW-PUNDIX", "korean_name": "\ud380\ub514\uc5d1\uc2a4"}, {"market": "KRW-FLOW", "korean_name": "\ud50c\ub85c\uc6b0"}, {"market": "KRW-AXS", "korean_name": "\uc5d1\uc2dc\uc778\ud53c\ub2c8\ud2f0"}, {"market": "KRW-STX", "korean_name": "\uc2a4\ud0dd\uc2a4"}, {"market": "KRW-XEC", "korean_name": "\uc774\uce90\uc2dc"}, {"market": "KRW-SOL", "korean_name": "\uc194\ub77c\ub098"}, {"market": "KRW-MATIC", "korean_name": "\ud3f4\ub9ac\uace4"}, {"market": "KRW-AAVE", "korean_name": "\uc5d0\uc774\ube0c"}, {"market": "KRW-1INCH", "korean_name": "1\uc778\uce58\ub124\ud2b8\uc6cc\ud06c"}, {"market": "KRW-ALGO", "korean_name": "\uc54c\uace0\ub79c\ub4dc"}, {"market": "KRW-NEAR", "korean_name": "\ub2c8\uc5b4\ud504\ub85c\ud1a0\ucf5c"}, {"market": "KRW-AVAX", "korean_name": "\uc544\ubc1c\ub780\uccb4"}, {"market": "KRW-T", "korean_name": "\uc4f0\ub808\uc2a4\ud640\ub4dc"}, {"market": "KRW-CELO", "korean_name": "\uc140\ub85c"}, {"market": "KRW-GMT", "korean_name": "\uc2a4\ud14c\ud508"}, {"market": "KRW-APT", "korean_name": "\uc571\ud1a0\uc2a4"}, {"market": "KRW-SHIB", "korean_name": "\uc2dc\ubc14\uc774\ub204"}, {"market": "KRW-MASK", "korean_name": "\ub9c8\uc2a4\ud06c\ub124\ud2b8\uc6cc\ud06c"}, {"market": "KRW-ARB", "korean_name": "\uc544\ube44\ud2b8\ub7fc"}, {"market": "KRW-EGLD", "korean_name": "\uba40\ud2f0\ubc84\uc2a4\uc5d1\uc2a4"}, {"market": "KRW-SUI", "korean_name": "\uc218\uc774"}, {"market": "KRW-GRT", "korean_name": "\ub354\uadf8\ub798\ud504"}, {"market": "KRW-BLUR", "korean_name": "\ube14\ub7ec"}, {"market": "KRW-IMX", "korean_name": "\uc774\ubba4\ud130\ube14\uc5d1\uc2a4"}, {"market": "KRW-SEI", "korean_name": "\uc138\uc774"}, {"market": "KRW-MINA", "korean_name": "\ubbf8\ub098"}, {"market": "KRW-CTC", "korean_name": "\ud06c\ub808\ub527\ucf54\uc778"}, {"market": "KRW-ASTR", "korean_name": "\uc544\uc2a4\ud0c0"}, {"market": "KRW-ID", "korean_name": "\uc2a4\ud398\uc774\uc2a4\uc544\uc774\ub514"}, {"market": "KRW-PYTH", "korean_name": "\ud53c\uc2a4\ub124\ud2b8\uc6cc\ud06c"}, {"market": "KRW-MNT", "korean_name": "\ub9e8\ud2c0"}, {"market": "KRW-AKT", "korean_name": "\uc544\uce74\uc2dc\ub124\ud2b8\uc6cc\ud06c"}, {"market": "KRW-ZETA", "korean_name": "\uc81c\ud0c0\uccb4\uc778"}]

  const currentPrice = ref(coinData.reduce((acc, coin) => {
    acc[coin.market] = 0
    return acc
  }, {}))

  const currentChangeRate = ref(coinData.reduce((acc, coin) => {
    acc[coin.market] = 0
    return acc
  }, {}))

  const currentTradePriceKRW = ref(coinData.reduce((acc, coin) => {
    acc[coin.market] = 0
    return acc
  }, {}))

  const currentTradePriceBTC = ref(coinData.reduce((acc, coin) => {
    acc[coin.market] = 0
    return acc
  }, {}))

  // 회원가입 관련 데이터
  const router = useRouter()
  const API_URL = 'http://127.0.0.1:8000'
  const token = ref(null)
  const isLogin = computed(() => token.value !== null)

  const logIn = function (payload) {
    const { username, password } = payload

    axios({
      method: 'POST',
      url: `${API_URL}/dj-rest-auth/login/`,
      data: {
        username,
        password,
      },
    })
    .then((response) => {
      token.value = response.data.key
      router.push({ name: 'MainView' })
    })
  }

  const signUp = function (payload) {
    const { username, password1, password2, nickname } = payload
    axios({
      method: 'POST',
      url: `${API_URL}/dj-rest-auth/registration/`,
      data: {
        username,
        password1,
        password2,
        nickname,
      },
    })
    .then((response) => {
      const password = password1
      logIn({ username, password })
    })
  }

  const formatDate = (dateStr) => {
    let dateObj = new Date(dateStr)
    return dateObj.toLocaleString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
  }

  const bankList = [
    '경남은행', '광주은행', '국민은행', '농협은행주식회사', '대구은행', 
    '부산은행', '수협은행', '신한은행', '우리은행', '전북은행', '제주은행',
    '주식회사 카카오뱅크', '주식회사 케이뱅크', '중소기업은행', '토스뱅크 주식회사',
    '하나은행', '한국산업은행', '한국스탠다드차타드은행',
  ]

  return { coinData, currentPrice, API_URL, deposits, savings, bankList,
    token, isLogin, signUp, logIn, currentChangeRate, currentTradePriceKRW, currentTradePriceBTC, formatDate }
}, { persist: true })
