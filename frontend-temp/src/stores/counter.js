import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'


export const useCounterStore = defineStore('counter', () => {
  const dummyData = ref([
    { name: '우리은행', max: '3.90', default: '3.10' },
    { name: '부산은행', max: '3.40', default: '3.30' },
    { name: '신한은행', max: '3.70', default: '3.50' },
    { name: '카카오뱅크', max: '4.50', default: '4.10' },
    { name: '하나은행', max: '2.90', default: '2.10' },
  ])

  const dummyArticle = ref([
    { title: '테스트1', content: '테스트1입니다.', uploadDate: '2021-10-01', author: '홍길동'},
    { title: '테스트2', content: '테스트2입니다.', uploadDate: '2021-10-02', author: '김철수'},
    { title: '테스트3', content: '테스트3입니다.', uploadDate: '2021-10-03', author: '이영희'},
    { title: '테스트4', content: '테스트4입니다.', uploadDate: '2021-10-04', author: '박철수'},
    { title: '테스트5', content: '테스트5입니다.', uploadDate: '2021-10-05', author: '김영희'},
    { title: '테스트6', content: '테스트6입니다.', uploadDate: '2021-10-06', author: '홍길동'},
    { title: '테스트7', content: '테스트7입니다.', uploadDate: '2021-10-07', author: '박철수'},
    { title: '테스트8', content: '테스트8입니다.', uploadDate: '2021-10-08', author: '이영희'},
    { title: '테스트9', content: '테스트9입니다.', uploadDate: '2021-10-09', author: '김철수'},
    { title: '테스트10', content: '테스트10입니다.', uploadDate: '2021-10-10', author: '홍길동'},
    { title: '테스트11', content: '테스트11입니다.', uploadDate: '2021-10-11', author: '박철수'},
    { title: '테스트12', content: '테스트12입니다.', uploadDate: '2021-10-12', author: '이영희'},
    { title: '테스트13', content: '테스트13입니다.', uploadDate: '2021-10-13', author: '김철수'},
    { title: '테스트14', content: '테스트14입니다.', uploadDate: '2021-10-14', author: '홍길동'},
    { title: '테스트15', content: '테스트15입니다.', uploadDate: '2021-10-15', author: '김영희'},
    { title: '테스트16', content: '테스트16입니다.', uploadDate: '2021-10-16', author: '박철수'},
    { title: '테스트17', content: '테스트17입니다.', uploadDate: '2021-10-17', author: '이영희'},
    { title: '테스트18', content: '테스트18입니다.', uploadDate: '2021-10-18', author: '김철수'},
    { title: '테스트19', content: '테스트19입니다.', uploadDate: '2021-10-19', author: '홍길동'},
    { title: '테스트20', content: '테스트20입니다.', uploadDate: '2021-10-20', author: '김영희'},
    { title: '테스트21', content: '테스트21입니다.', uploadDate: '2021-10-21', author: '박철수'},
    { title: '테스트22', content: '테스트22입니다.', uploadDate: '2021-10-22', author: '이영희'},
    { title: '테스트23', content: '테스트23입니다.', uploadDate: '2021-10-23', author: '김철수'},
    { title: '테스트24', content: '테스트24입니다.', uploadDate: '2021-10-24', author: '홍길동'},
    { title: '테스트25', content: '테스트25입니다.', uploadDate: '2021-10-25', author: '김영희'},
    { title: '테스트26', content: '테스트26입니다.', uploadDate: '2021-10-26', author: '박철수'},
    { title: '테스트27', content: '테스트27입니다.', uploadDate: '2021-10-27', author: '이영희'},
    { title: '테스트28', content: '테스트28입니다.', uploadDate: '2021-10-28', author: '김철수'},
    { title: '테스트29', content: '테스트29입니다.', uploadDate: '2021-10-29', author: '홍길동'},
    { title: '테스트30', content: '테스트30입니다.', uploadDate: '2021-10-30', author: '김영희'},
    { title: '테스트31', content: '테스트31입니다.', uploadDate: '2021-10-01', author: '홍길동'},
    { title: '테스트32', content: '테스트32입니다.', uploadDate: '2021-10-02', author: '김철수'},
    { title: '테스트33', content: '테스트33입니다.', uploadDate: '2021-10-03', author: '이영희'},
    { title: '테스트34', content: '테스트34입니다.', uploadDate: '2021-10-04', author: '박철수'},
    { title: '테스트35', content: '테스트35입니다.', uploadDate: '2021-10-05', author: '김영희'},
    { title: '테스트36', content: '테스트36입니다.', uploadDate: '2021-10-06', author: '홍길동'},
    { title: '테스트37', content: '테스트37입니다.', uploadDate: '2021-10-07', author: '박철수'},
    { title: '테스트38', content: '테스트38입니다.', uploadDate: '2021-10-08', author: '이영희'},
    { title: '테스트39', content: '테스트39입니다.', uploadDate: '2021-10-09', author: '김철수'},
    { title: '테스트40', content: '테스트40입니다.', uploadDate: '2021-10-10', author: '홍길동'},
    { title: '테스트41', content: '테스트41입니다.', uploadDate: '2021-10-11', author: '박철수'},
    { title: '테스트42', content: '테스트42입니다.', uploadDate: '2021-10-12', author: '이영희'},
    { title: '테스트43', content: '테스트43입니다.', uploadDate: '2021-10-13', author: '김철수'},
    { title: '테스트44', content: '테스트44입니다.', uploadDate: '2021-10-14', author: '홍길동'},
    { title: '테스트45', content: '테스트45입니다.', uploadDate: '2021-10-15', author: '김영희'},
    { title: '테스트46', content: '테스트46입니다.', uploadDate: '2021-10-16', author: '박철수'},
    { title: '테스트47', content: '테스트47입니다.', uploadDate: '2021-10-17', author: '이영희'},
    { title: '테스트48', content: '테스트48입니다.', uploadDate: '2021-10-18', author: '김철수'},
    { title: '테스트49', content: '테스트49입니다.', uploadDate: '2021-10-19', author: '홍길동'},
    { title: '테스트50', content: '테스트50입니다.', uploadDate: '2021-10-20', author: '김영희'},
    { title: '테스트51', content: '테스트51입니다.', uploadDate: '2021-10-21', author: '박철수'},
    { title: '테스트52', content: '테스트52입니다.', uploadDate: '2021-10-22', author: '이영희'},
    { title: '테스트53', content: '테스트53입니다.', uploadDate: '2021-10-23', author: '김철수'},
  ])

  const dummyComment = ref([
    { content: "댓글0입니다.", article: 26 },
    { content: "댓글1입니다.", article: 10 },
    { content: "댓글2입니다.", article: 37 },
    { content: "댓글3입니다.", article: 2 },
    { content: "댓글4입니다.", article: 18 },
    { content: "댓글5입니다.", article: 19 },
    { content: "댓글6입니다.", article: 7 },
    { content: "댓글7입니다.", article: 41 },
    { content: "댓글8입니다.", article: 14 },
    { content: "댓글9입니다.", article: 28 },
    { content: "댓글10입니다.", article: 24 },
    { content: "댓글11입니다.", article: 43 },
    { content: "댓글12입니다.", article: 49 },
    { content: "댓글13입니다.", article: 42 },
    { content: "댓글14입니다.", article: 51 },
    { content: "댓글15입니다.", article: 37 },
    { content: "댓글16입니다.", article: 17 },
    { content: "댓글17입니다.", article: 52 },
    { content: "댓글18입니다.", article: 9 },
    { content: "댓글19입니다.", article: 52 },
    { content: "댓글20입니다.", article: 37 },
    { content: "댓글21입니다.", article: 32 },
    { content: "댓글22입니다.", article: 45 },
    { content: "댓글23입니다.", article: 36 },
    { content: "댓글24입니다.", article: 29 },
    { content: "댓글25입니다.", article: 48 },
    { content: "댓글26입니다.", article: 50 },
    { content: "댓글27입니다.", article: 12 },
    { content: "댓글28입니다.", article: 51 },
    { content: "댓글29입니다.", article: 0 },
    { content: "댓글30입니다.", article: 49 },
    { content: "댓글31입니다.", article: 9 },
    { content: "댓글32입니다.", article: 30 },
    { content: "댓글33입니다.", article: 22 },
    { content: "댓글34입니다.", article: 47 },
    { content: "댓글35입니다.", article: 28 },
    { content: "댓글36입니다.", article: 14 },
    { content: "댓글37입니다.", article: 39 },
    { content: "댓글38입니다.", article: 0 },
    { content: "댓글39입니다.", article: 39 },
    { content: "댓글40입니다.", article: 20 },
    { content: "댓글41입니다.", article: 3 },
    { content: "댓글42입니다.", article: 43 },
    { content: "댓글43입니다.", article: 37 },
    { content: "댓글44입니다.", article: 16 },
    { content: "댓글45입니다.", article: 16 },
    { content: "댓글46입니다.", article: 1 },
    { content: "댓글47입니다.", article: 13 },
    { content: "댓글48입니다.", article: 18 },
    { content: "댓글49입니다.", article: 24 },
    { content: "댓글50입니다.", article: 49 },
    { content: "댓글51입니다.", article: 51 },
    { content: "댓글52입니다.", article: 5 },
    { content: "댓글53입니다.", article: 24 },
    { content: "댓글54입니다.", article: 16 },
    { content: "댓글55입니다.", article: 16 },
    { content: "댓글56입니다.", article: 25 },
    { content: "댓글57입니다.", article: 16 },
    { content: "댓글58입니다.", article: 38 },
    { content: "댓글59입니다.", article: 2 },
    { content: "댓글60입니다.", article: 39 },
    { content: "댓글61입니다.", article: 39 },
    { content: "댓글62입니다.", article: 4 },
    { content: "댓글63입니다.", article: 25 },
    { content: "댓글64입니다.", article: 47 },
    { content: "댓글65입니다.", article: 36 },
    { content: "댓글66입니다.", article: 0 },
    { content: "댓글67입니다.", article: 14 },
    { content: "댓글68입니다.", article: 1 },
    { content: "댓글69입니다.", article: 22 },
    { content: "댓글70입니다.", article: 49 },
    { content: "댓글71입니다.", article: 38 },
    { content: "댓글72입니다.", article: 13 },
    { content: "댓글73입니다.", article: 38 },
    { content: "댓글74입니다.", article: 7 },
    { content: "댓글75입니다.", article: 10 },
    { content: "댓글76입니다.", article: 15 },
    { content: "댓글77입니다.", article: 42 },
    { content: "댓글78입니다.", article: 50 },
    { content: "댓글79입니다.", article: 5 },
    { content: "댓글80입니다.", article: 51 },
    { content: "댓글81입니다.", article: 51 },
    { content: "댓글82입니다.", article: 37 },
    { content: "댓글83입니다.", article: 6 },
    { content: "댓글84입니다.", article: 34 },
    { content: "댓글85입니다.", article: 23 },
    { content: "댓글86입니다.", article: 32 },
    { content: "댓글87입니다.", article: 9 },
    { content: "댓글88입니다.", article: 40 },
    { content: "댓글89입니다.", article: 18 },
    { content: "댓글90입니다.", article: 39 },
    { content: "댓글91입니다.", article: 36 },
    { content: "댓글92입니다.", article: 26 },
    { content: "댓글93입니다.", article: 52 },
    { content: "댓글94입니다.", article: 15 },
    { content: "댓글95입니다.", article: 35 },
    { content: "댓글96입니다.", article: 43 },
    { content: "댓글97입니다.", article: 49 },
    { content: "댓글98입니다.", article: 47 },
    { content: "댓글99입니다.", article: 32 },
    { content: "댓글100입니다.", article: 37 },
    { content: "댓글101입니다.", article: 19 },
    { content: "댓글102입니다.", article: 22 },
    { content: "댓글103입니다.", article: 10 },
    { content: "댓글104입니다.", article: 7 },
    { content: "댓글105입니다.", article: 23 },
    { content: "댓글106입니다.", article: 16 },
    { content: "댓글107입니다.", article: 25 },
    { content: "댓글108입니다.", article: 12 },
    { content: "댓글109입니다.", article: 31 },
    { content: "댓글110입니다.", article: 36 },
    { content: "댓글111입니다.", article: 19 },
    { content: "댓글112입니다.", article: 49 },
    { content: "댓글113입니다.", article: 38 },
    { content: "댓글114입니다.", article: 3 },
    { content: "댓글115입니다.", article: 34 },
    { content: "댓글116입니다.", article: 17 },
    { content: "댓글117입니다.", article: 46 },
    { content: "댓글118입니다.", article: 0 },
    { content: "댓글119입니다.", article: 3 },
    { content: "댓글120입니다.", article: 16 },
    { content: "댓글121입니다.", article: 9 },
    { content: "댓글122입니다.", article: 10 },
    { content: "댓글123입니다.", article: 15 },
    { content: "댓글124입니다.", article: 39 },
    { content: "댓글125입니다.", article: 45 },
    { content: "댓글126입니다.", article: 13 },
    { content: "댓글127입니다.", article: 48 },
    { content: "댓글128입니다.", article: 39 },
    { content: "댓글129입니다.", article: 15 },
    { content: "댓글130입니다.", article: 27 },
    { content: "댓글131입니다.", article: 38 },
    { content: "댓글132입니다.", article: 21 },
    { content: "댓글133입니다.", article: 2 },
    { content: "댓글134입니다.", article: 13 },
    { content: "댓글135입니다.", article: 0 },
    { content: "댓글136입니다.", article: 33 },
    { content: "댓글137입니다.", article: 47 },
    { content: "댓글138입니다.", article: 12 },
    { content: "댓글139입니다.", article: 16 },
    { content: "댓글140입니다.", article: 27 },
    { content: "댓글141입니다.", article: 42 },
    { content: "댓글142입니다.", article: 30 },
    { content: "댓글143입니다.", article: 52 },
    { content: "댓글144입니다.", article: 37 },
    { content: "댓글145입니다.", article: 13 },
    { content: "댓글146입니다.", article: 26 },
    { content: "댓글147입니다.", article: 38 },
    { content: "댓글148입니다.", article: 47 },
    { content: "댓글149입니다.", article: 26 },
    { content: "댓글150입니다.", article: 31 },
    { content: "댓글151입니다.", article: 38 },
    { content: "댓글152입니다.", article: 34 },
    { content: "댓글153입니다.", article: 27 },
    { content: "댓글154입니다.", article: 33 },
    { content: "댓글155입니다.", article: 26 },
    { content: "댓글156입니다.", article: 35 },
    { content: "댓글157입니다.", article: 4 },
    { content: "댓글158입니다.", article: 20 },
    { content: "댓글159입니다.", article: 20 },
    { content: "댓글160입니다.", article: 9 },
    { content: "댓글161입니다.", article: 25 },
    { content: "댓글162입니다.", article: 5 },
    { content: "댓글163입니다.", article: 18 },
    { content: "댓글164입니다.", article: 6 },
    { content: "댓글165입니다.", article: 11 },
    { content: "댓글166입니다.", article: 27 },
    { content: "댓글167입니다.", article: 36 },
    { content: "댓글168입니다.", article: 9 },
    { content: "댓글169입니다.", article: 23 },
    { content: "댓글170입니다.", article: 6 },
    { content: "댓글171입니다.", article: 47 },
    { content: "댓글172입니다.", article: 50 },
    { content: "댓글173입니다.", article: 33 },
    { content: "댓글174입니다.", article: 51 },
    { content: "댓글175입니다.", article: 25 },
    { content: "댓글176입니다.", article: 20 },
    { content: "댓글177입니다.", article: 24 },
    { content: "댓글178입니다.", article: 25 },
    { content: "댓글179입니다.", article: 40 },
    { content: "댓글180입니다.", article: 28 },
    { content: "댓글181입니다.", article: 39 },
    { content: "댓글182입니다.", article: 40 },
    { content: "댓글183입니다.", article: 22 },
    { content: "댓글184입니다.", article: 49 },
    { content: "댓글185입니다.", article: 7 },
    { content: "댓글186입니다.", article: 41 },
    { content: "댓글187입니다.", article: 24 },
    { content: "댓글188입니다.", article: 6 },
    { content: "댓글189입니다.", article: 48 },
    { content: "댓글190입니다.", article: 21 },
    { content: "댓글191입니다.", article: 7 },
    { content: "댓글192입니다.", article: 17 },
    { content: "댓글193입니다.", article: 17 },
    { content: "댓글194입니다.", article: 4 },
    { content: "댓글195입니다.", article: 9 },
    { content: "댓글196입니다.", article: 32 },
    { content: "댓글197입니다.", article: 16 },
    { content: "댓글198입니다.", article: 32 },
    { content: "댓글199입니다.", article: 45 },
  ])

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
    console.log(username, password1, password2, nickname)
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

  return { dummyData, dummyArticle, dummyComment, coinData, currentPrice, API_URL,
    token, isLogin, signUp, logIn, currentChangeRate, currentTradePriceKRW, currentTradePriceBTC }
}, { persist: true })
