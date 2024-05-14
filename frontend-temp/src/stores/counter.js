import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

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

  return { dummyData, dummyArticle, dummyComment }
})
