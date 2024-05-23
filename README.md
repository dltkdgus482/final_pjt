#### 금융 프로젝트 - C&C Finance
  
## 목차

- [프로젝트 개요](#프로젝트-개요)
  - [프로젝트 소개](#1-프로젝트-소개)
  - [기술 스택 및 개발 도구](#2-기술-스택-및-개발-도구)
  - [팀원 구성 및 역할 분담](#3-팀원-구성-및-역할-분담)
  - [초기 세팅](#4-초기-세팅)
  - [초기 디자인](#5-레이아웃-디자인-초안)
- [프로젝트 결과](#프로젝트-결과)
  - [ERD](#1-erd)
  - [컴포넌트 구조도](#2-컴포넌트-구조도)
  - [필수 기능](#3-필수-기능)
  - [금융 상품 추천 알고리즘](#4-금융-상품-추천-알고리즘)
  - [추가 기능](#5-추가-기능)
- [프로젝트 규칙](#프로젝트-규칙)
- [느낀 점](#느낀-점)

## 프로젝트 개요

### 1. 프로젝트 소개

- 프로젝트 소개

### 2. 기술 스택 및 개발 도구

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

### 3. 팀원 구성 및 역할 분담

[깃허브 주소](https://github.com/Rootn61)

- **팀장**: 손원륜
    - 레이아웃 디자인 초안 작성
    - 전반적인 페이지 구조 및 디자인 작성, 보완
    - Javascript를 이용하여 메인페이지, 예적금 상세페이지 구현
    - 로고 디자인, ppt 작성

[깃허브 주소](https://github.com/dltkdgus482)
  
- **팀원**: 이상현
  - Django 및 백엔드 개발 담당
  - Vue.js와 Django 간의 통신 구현
  - 예, 적금 상품 추천 알고리즘 구현
  - 가상화폐 실시간 시세 조회, 이메일 인증 추가 기능 구현
  - 데이터베이스 모델링

---

### 4. 초기 세팅

1. 프론트 환경 변수(.env)

```
VITE_APP_KAKAO_MAP_API_KEY='카카오맵 API 키'
```

2. 서버 환경 변수(.env)

```
OPEN_AI_API_KEY='OPENAI API 키'
API_KEY='한국수출입은행 API 키'
NAVER_MAIL_API_KEY='네이버메일 API 키'
```

3. 서버 모듈 업그레이드

```
pip install --upgrade setuptools
```

4. 더미 데이터 로딩

```
python manage.py loaddata articles.json deposits.json exchanges.json savings.json user_data.json
```
---

### 5. 레이아웃 디자인 초안
https://www.figma.com/board/NanCGXaL5DGpS5MlIT2rZp/Untitled?node-id=0%3A1&t=iV61CAvUGQAz5qgq-1


## 프로젝트 결과

### 1. ERD
![img](./ERD/ERD_final.png)

---

### 2. 컴포넌트 구조도

```
.
├── App.vue
├── components
│   ├── ArticleCreateComponents
│   │   ├── ArticleCreateBody.vue
│   │   ├── ArticleCreateHeader.vue
│   │   └── ArticleCreateNav.vue
│   ├── ArticleDetailComponents
│   │   ├── ArticleDetailBody.vue
│   │   ├── ArticleDetailHeader.vue
│   │   ├── ArticleDetailNav.vue
│   │   ├── CommentCreate.vue
│   │   └── CommentList.vue
│   ├── ArticleListComponents
│   │   ├── ArticleList.vue
│   │   ├── ArticleListBody.vue
│   │   ├── ArticleListHeader.vue
│   │   └── ArticleListNav.vue
│   ├── ArticleUpdateComponents
│   │   ├── ArticleUpdateBody.vue
│   │   ├── ArticleUpdateHeader.vue
│   │   └── ArticleUpdateNav.vue
│   ├── DepositDetailComponents
│   │   ├── DepositDetailBody.vue
│   │   ├── DepositDetailHeader.vue
│   │   └── DepositDetailNav.vue
│   ├── DepositListComponents
│   │   ├── DepositListBody.vue
│   │   └── DepositListNav.vue
│   ├── ExchangeRateComponents
│   │   ├── ExchangeRateBody.vue
│   │   ├── ExchangeRateHeader.vue
│   │   └── ExchangeRateNav.vue
│   ├── LoginComponents
│   │   ├── LoginBody.vue
│   │   └── LoginNav.vue
│   ├── MainPageComponents
│   │   ├── MainPageBody.vue
│   │   ├── MainPageChatbot.vue
│   │   ├── MainPageHeader.vue
│   │   └── MainPageNav.vue
│   ├── MapComponents
│   │   ├── Map.vue
│   │   ├── MapBody.vue
│   │   ├── MapFooter.vue
│   │   ├── MapHeader.vue
│   │   ├── MapInfo.vue
│   │   └── MapNav.vue
│   ├── ProfileComponents
│   │   ├── ProfileBody.vue
│   │   ├── ProfileFooter.vue
│   │   ├── ProfileHeader.vue
│   │   └── ProfileNav.vue
│   ├── SavingDetailComponents
│   │   ├── SavingDetailBody.vue
│   │   ├── SavingDetailHeader.vue
│   │   └── SavingDetailNav.vue
│   ├── SignUpComponents
│   │   ├── SignUpBody.vue
│   │   ├── SignUpHeader.vue
│   │   └── SignUpNav.vue
│   ├── StockDetailComponents
│   │   ├── StockDetailBody.vue
│   │   ├── StockDetailHeader.vue
│   │   └── StockDetailNav.vue
│   ├── StockListComponents
│   │   ├── StockList.vue
│   │   ├── StockListBody.vue
│   │   ├── StockListHeader.vue
│   │   ├── StockListLike.vue
│   │   └── StockListNav.vue
│   ├── UpdatePasswordComponents
│   │   ├── UpdatePasswordBody.vue
│   │   ├── UpdatePasswordHeader.vue
│   │   └── UpdatePasswordNav.vue
│   └── UpdateUserComponents
│   │   ├── UpdateUserBody.vue
│   │   ├── UpdateUserFooter.vue
│   │   ├── UpdateUserHeader.vue
│   │   └── UpdateUserNav.vue
│   ├── TopNavbar.vue
│   ├── Footer.vue
│   ├── BottomNavbar.vue
│   └── Chatbot.vue
├── main.js
├── router
│   └── index.js
├── stores
│   └── counter.js
└── views
    ├── ArticleCreateView.vue
    ├── ArticleDetailView.vue
    ├── ArticleUpdateView.vue
    ├── ArticleView.vue
    ├── DepositDetailView.vue
    ├── DepositView.vue
    ├── ExchangeRateView.vue
    ├── LoginView.vue
    ├── MainView.vue
    ├── MapView.vue
    ├── ProfileView.vue
    ├── SavingDetailView.vue
    ├── SignUpView.vue
    ├── StockDetailView.vue
    ├── StockView.vue
    ├── UpdatePasswordView.vue
    └── UpdateUserView.vue
```

---

### 3. 필수 기능
1. 메인 페이지
2. 회원 관리 기능
3. 환율 계산기
4. 근처 은행 검색
5. 게시판
6. 프로필 페이지(예적금 금리 비교)

---

### 4. 금융 상품 추천 알고리즘
1. 사용자가 어떠한 상품을 추천해달라고 요구(특정한 기준 없이 그냥 추천해달라고 하는 경우에도 추천해줌)
2. 사용자가 입력한 메세지의 의도를 Openai API를 이용하여 구분 (ex. 금융, 가상화폐, 기타)
```
def chatbot(request):
  if request.method == 'POST':
    data = json.loads(request.body)
    user_message = data['message']
    chat_completion = client.chat.completions.create(
      model="ft:gpt-3.5-turbo-1106:personal:final-pjt-gpt:9RZiO6ap",
      messages=[
        {
          "role": "user",
          "content": f'"{user_message}" 라는 질문은 ["예금 적금", "가상 화폐", "환율", "기타"] 4개의 카테고리 중 어디에 속하는 질문인가요? 단답형으로 대답해주세요.',
        },
      ],
      max_tokens=1024,
      temperature=0.2,
      top_p=1,
    )
```
3. 답변, 추천성의 정확성을 높이기 위해 2번의 과정을 반복하여 메세지의 의도를 좀 더 정확히 파악
4. 예를 들어 사용자의 의도가 '금융' -> '상품 추천 요구' 일 경우 DB에 저장된 상품 중 사용자가 입력한 메시지와 가장
유사도가 높은 상품을 추천해줌
5. 메시지, 단어끼리의 유사도를 검증하는 것은 임베딩 값을 계산하여 코사인 유사도를 이용하여 비교
6. GPT fine-tuning을 시도했으나 결과가 만족스럽지 않았음

```
from transformers import BertModel, BertTokenizer
from sklearn.metrics.pairwise import cosine_similarity

model_name = 'bert-base-uncased'
model = BertModel.from_pretrained(model_name)
tokenizer = BertTokenizer.from_pretrained(model_name)

def get_embedding(text):
    if text in coins_cache:
        return coins_cache[text]

    inputs = tokenizer(text, return_tensors='pt')
    outputs = model(**inputs)
    return outputs.last_hidden_state[0].mean(dim=0).detach().numpy()

def calculate_cosine_similarity(word1, word2):
    word1_embedding = get_embedding(word1)
    word2_embedding = get_embedding(word2)

    word1_embedding = word1_embedding.reshape(1, -1)
    word2_embedding = word2_embedding.reshape(1, -1)

    cosine_sim = cosine_similarity(word1_embedding, word2_embedding)

    return cosine_sim[0][0]
```

6. DB에 저장된 상품들의 임베딩 값은 미리 계산하여 json 파일과 비슷하게 pkl 형식의 형태로 저장

---

### 5. 추가 기능
1. 챗봇
2. 가상화폐 시세 실시간 제공
3. 이메일 인증

## 프로젝트 규칙

```
# 제목은 대문자로 시작합니다.
# 본문과 푸터는 선택 사항 입니다.
#######제목#######

#######본문#######

#######푸터#######

# --- COMMIT END ---
#   <타입> 리스트
#   feat        : 기능 (새로운 기능)
#   fix         : 버그 (버그 수정)
#   refactor    : 리팩토링
#   design      : CSS 등 사용자 UI 디자인 변경
#   comment     : 필요한 주석 추가 및 변경
#   style       : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
#   docs        : 문서 수정 (문서 추가, 수정, 삭제, README)
#   test        : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
#   chore       : 기타 변경사항 (빌드 스크립트 수정, assets, 패키지 매니저 등)
#   init        : 초기 생성
#   rename      : 파일 혹은 폴더명을 수정하거나 옮기는 작업만 한 경우
#   remove      : 파일을 삭제하는 작업만 수행한 경우
# ------------------
#   제목 첫 글자를 대문자로
#   제목은 명령문으로
#   제목 끝에 마침표(.) 금지
#   제목과 본문을 한 줄 띄워 분리하기
#   본문은 "어떻게" 보다 "무엇을", "왜"를 설명한다.
#   본문에 여러줄의 메시지를 작성할 땐 "-"로 구분
# ------------------
#   <꼬리말>
#   필수가 아닌 optioanl
#   Fixes        :이슈 수정중 (아직 해결되지 않은 경우)
#   Resolves     : 이슈 해결했을 때 사용
#   Ref          : 참고할 이슈가 있을 때 사용
#   Related to   : 해당 커밋에 관련된 이슈번호 (아직 해결되지 않은 경우)
#   ex) Fixes: #47 Related to: #32, #21
```

## 느낀 점

- 손원륜
  - 
  - 

- 이상현
  - 프로젝트를 진행하며 제 욕심으로 필수 기능을 완전히 구현하지 않은 상태에서 추가 기능을 많이 도입해서 기간 안에 끝내지 못할까 걱정했는데 역할 분담이나 협업이 생각보다 괜찮게 된 것 같고 그로 인해 프로젝트를 제때 마칠 수 있었다고 생각합니다. 하지만 일정 관리나 좀 더 명확한 소통을 했으면 더 좋지 않았을까 하는 아쉬움이 조금 있습니다. 2학기 시작하기 전까지 Jira와 같은 일정 관리 툴의 사용법을 익힐 것입니다.
  - 원래, 프로젝트를 진행하면서 특히 코파일럿과 같은 AI 어시스턴트를 이용하면서 더욱 더 한쪽만 알아서는 안되겠다고 생각했습니다. 그리고 생각보다 자바스크립트가 재밌었고, 프론트와 백을 모두 구축할 수 있는 언어라는 장점과 함께 매우 매력적인 언어라고 느꼈습니다.

  - 카카오맵, 네이버 메일, Openai, 업비트 등 다양한 API를 이용할 수 있어서 좋았습니다. 특히 업비트 API는 웹소켓 기능을 제공하여 실시간 시세 조회를 할 수 있어서 신기했습니다. 2학기가 시작하기 전까지는 업비트 매수, 매매 API 등 좀 더 다양한 분야의 API를 찾아보고, 사용해볼 것입니다.

  - 임베딩 기법을 활용하여 금융 상품 추천 알고리즘을 구현했는데, 우선 질문의 의도, 내용을 자세하게 분류하지 않은 것 같아 챗봇이 이상하게 추천해주는 경우가 많습니다. 이 분야를 어느 정도 배워두면 추후 프로젝트를 진행하는 데 매우 큰 도움이 될 것 같다고 느꼈으며, 특히 영화 추천 알고리즘을 임베딩 기법을 활용하여 구현했다면 꽤 괜찮은 성능의 추천 알고리즘을 구현할 수 있을 것 같습니다.

  - 실제로 AWS를 이용하여 배포를 하고 싶었으나 보안 관련 문제가 생겼을 때 바로 해결할 자신이 없었고 SSAFY에서 특강 형식으로 배포에 관한 강의를 진행한다고 하여 아쉽지만 지식을 습득한 다음 배포를 해보는 걸로 마무리 지었습니다.