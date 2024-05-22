from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.conf import settings
from rest_framework.decorators import api_view
import json

from deposits.models import DepositProduct
from savings.models import SavingProduct

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.authentication import TokenAuthentication, BasicAuthentication

import os
from openai import OpenAI

from transformers import BertModel, BertTokenizer
from sklearn.metrics.pairwise import cosine_similarity
import torch
import pickle

coin_list = [{'market': 'KRW-BTC', 'korean_name': '비트코인'}, {'market': 'KRW-ETH', 'korean_name': '이더리움'}, {'market': 'KRW-NEO', 'korean_name': '네오'}, {'market': 'KRW-MTL', 'korean_name': '메탈'}, {'market': 'KRW-XRP', 'korean_name': '리플'}, {'market': 'KRW-ETC', 'korean_name': '이더리움클래식'}, {'market': 'KRW-SNT', 'korean_name': '스테이터스네트워크토큰'}, {'market': 'KRW-WAVES', 'korean_name': '웨이브'}, {'market': 'KRW-XEM', 'korean_name': '넴'}, {'market': 'KRW-QTUM', 'korean_name': '퀀텀'}, {'market': 'KRW-LSK', 'korean_name': '리스크'}, {'market': 'KRW-STEEM', 'korean_name': '스팀'}, {'market': 'KRW-XLM', 'korean_name': '스텔라루멘'}, {'market': 'KRW-ARDR', 'korean_name': '아더'}, {'market': 'KRW-ARK', 'korean_name': '아크'}, {'market': 'KRW-STORJ', 'korean_name': '스토리지'}, {'market': 'KRW-GRS', 'korean_name': '그로스톨코인'}, {'market': 'KRW-ADA', 'korean_name': '에이다'}, {'market': 'KRW-SBD', 'korean_name': '스팀달러'}, {'market': 'KRW-POWR', 'korean_name': '파워렛저'}, {'market': 'KRW-BTG', 'korean_name': '비트코인골드'}, {'market': 'KRW-ICX', 'korean_name': '아이콘'}, {'market': 'KRW-EOS', 'korean_name': '이오스'}, {'market': 'KRW-TRX', 'korean_name': '트론'}, {'market': 'KRW-SC', 'korean_name': '시아코인'}, {'market': 'KRW-ONT', 'korean_name': '온톨로지'}, {'market': 'KRW-ZIL', 'korean_name': '질리카'}, {'market': 'KRW-POLYX', 'korean_name': '폴리매쉬'}, {'market': 'KRW-ZRX', 'korean_name': '제로엑스'}, {'market': 'KRW-LOOM', 'korean_name': '룸네트워크'}, {'market': 'KRW-BCH', 'korean_name': '비트코인캐시'}, {'market': 'KRW-BAT', 'korean_name': '베이직어텐션토큰'}, {'market': 'KRW-IOST', 'korean_name': '아이오에스티'}, {'market': 'KRW-CVC', 'korean_name': '시빅'}, {'market': 'KRW-IQ', 'korean_name': '아이큐'}, {'market': 'KRW-IOTA', 'korean_name': '아이오타'}, {'market': 'KRW-HIFI', 'korean_name': '하이파이'}, {'market': 'KRW-ONG', 'korean_name': '온톨로지가스'}, {'market': 'KRW-GAS', 'korean_name': '가스'}, {'market': 'KRW-UPP', 'korean_name': '센티넬프로토콜'}, {'market': 'KRW-ELF', 'korean_name': '엘프'}, {'market': 'KRW-KNC', 'korean_name': '카이버네트워크'}, {'market': 'KRW-BSV', 'korean_name': '비트코인에스브이'}, {'market': 'KRW-THETA', 'korean_name': '쎄타토큰'}, {'market': 'KRW-QKC', 'korean_name': '쿼크체인'}, {'market': 'KRW-BTT', 'korean_name': '비트토렌트'}, {'market': 'KRW-MOC', 'korean_name': '모스코인'}, {'market': 'KRW-TFUEL', 'korean_name': '쎄타퓨엘'}, {'market': 'KRW-MANA', 'korean_name': '디센트럴랜드'}, {'market': 'KRW-ANKR', 'korean_name': '앵커'}, {'market': 'KRW-AERGO', 'korean_name': '아르고'}, {'market': 'KRW-ATOM', 'korean_name': '코스모스'}, {'market': 'KRW-TT', 'korean_name': '썬더코어'}, {'market': 'KRW-CRE', 'korean_name': '캐리프로토콜'}, {'market': 'KRW-MBL', 'korean_name': '무비블록'}, {'market': 'KRW-WAXP', 'korean_name': '왁스'}, {'market': 'KRW-HBAR', 'korean_name': '헤데라'}, {'market': 'KRW-MED', 'korean_name': '메디블록'}, {'market': 'KRW-MLK', 'korean_name': '밀크'}, {'market': 'KRW-STPT', 'korean_name': '에스티피'}, {'market': 'KRW-ORBS', 'korean_name': '오브스'}, {'market': 'KRW-VET', 'korean_name': '비체인'}, {'market': 'KRW-CHZ', 'korean_name': '칠리즈'}, {'market': 'KRW-STMX', 'korean_name': '스톰엑스'}, {'market': 'KRW-DKA', 'korean_name': '디카르고'}, {'market': 'KRW-HIVE', 'korean_name': '하이브'}, {'market': 'KRW-KAVA', 'korean_name': '카바'}, {'market': 'KRW-AHT', 'korean_name': '아하토큰'}, {'market': 'KRW-LINK', 'korean_name': '체인링크'}, {'market': 'KRW-XTZ', 'korean_name': '테조스'}, {'market': 'KRW-BORA', 'korean_name': '보라'}, {'market': 'KRW-JST', 'korean_name': '저스트'}, {'market': 'KRW-CRO', 'korean_name': '크로노스'}, {'market': 'KRW-TON', 'korean_name': '토카막네트워크'}, {'market': 'KRW-SXP', 'korean_name': '솔라'}, {'market': 'KRW-HUNT', 'korean_name': '헌트'}, {'market': 'KRW-DOT', 'korean_name': '폴카닷'}, {'market': 'KRW-MVL', 'korean_name': '엠블'}, {'market': 'KRW-STRAX', 'korean_name': '스트라티스'}, {'market': 'KRW-AQT', 'korean_name': '알파쿼크'}, {'market': 'KRW-GLM', 'korean_name': '골렘'}, {'market': 'KRW-META', 'korean_name': '메타디움'}, {'market': 'KRW-FCT2', 'korean_name': '피르마체인'}, {'market': 'KRW-CBK', 'korean_name': '코박토큰'}, {'market': 'KRW-SAND', 'korean_name': '샌드박스'}, {'market': 'KRW-HPO', 'korean_name': '히포크랏'}, {'market': 'KRW-DOGE', 'korean_name': '도지코인'}, {'market': 'KRW-STRIKE', 'korean_name': '스트라이크'}, {'market': 'KRW-PUNDIX', 'korean_name': '펀디엑스'}, {'market': 'KRW-FLOW', 'korean_name': '플로우'}, {'market': 'KRW-AXS', 'korean_name': '엑시인피니티'}, {'market': 'KRW-STX', 'korean_name': '스택스'}, {'market': 'KRW-XEC', 'korean_name': '이캐시'}, {'market': 'KRW-SOL', 'korean_name': '솔라나'}, {'market': 'KRW-MATIC', 'korean_name': '폴리곤'}, {'market': 'KRW-AAVE', 'korean_name': '에이브'}, {'market': 'KRW-1INCH', 'korean_name': '1인치네트워크'}, {'market': 'KRW-ALGO', 'korean_name': '알고랜드'}, {'market': 'KRW-NEAR', 'korean_name': '니어프로토콜'}, {'market': 'KRW-AVAX', 'korean_name': '아발란체'}, {'market': 'KRW-T', 'korean_name': '쓰레스홀드'}, {'market': 'KRW-CELO', 'korean_name': '셀로'}, {'market': 'KRW-GMT', 'korean_name': '스테픈'}, {'market': 'KRW-APT', 'korean_name': '앱토스'}, {'market': 'KRW-SHIB', 'korean_name': '시바이누'}, {'market': 'KRW-MASK', 'korean_name': '마스크네트워크'}, {'market': 'KRW-ARB', 'korean_name': '아비트럼'}, {'market': 'KRW-EGLD', 'korean_name': '멀티버스엑스'}, {'market': 'KRW-SUI', 'korean_name': '수이'}, {'market': 'KRW-GRT', 'korean_name': '더그래프'}, {'market': 'KRW-BLUR', 'korean_name': '블러'}, {'market': 'KRW-IMX', 'korean_name': '이뮤터블엑스'}, {'market': 'KRW-SEI', 'korean_name': '세이'}, {'market': 'KRW-MINA', 'korean_name': '미나'}, {'market': 'KRW-CTC', 'korean_name': '크레딧코인'}, {'market': 'KRW-ASTR', 'korean_name': '아스타'}, {'market': 'KRW-ID', 'korean_name': '스페이스아이디'}, {'market': 'KRW-PYTH', 'korean_name': '피스네트워크'}, {'market': 'KRW-MNT', 'korean_name': '맨틀'}, {'market': 'KRW-AKT', 'korean_name': '아카시네트워크'}, {'market': 'KRW-ZETA', 'korean_name': '제타체인'}]

client = OpenAI(
    api_key=os.environ.get("OPEN_AI_API_KEY"),
)

model_name = 'bert-base-uncased'
model = BertModel.from_pretrained(model_name)
tokenizer = BertTokenizer.from_pretrained(model_name)

with open('chatbots/deposits_cache.pkl', 'rb') as f:
    deposits_cache = pickle.load(f)   

with open('chatbots/savings_cache.pkl', 'rb') as f:
    savings_cache = pickle.load(f)   

with open('chatbots/coins_cache.pkl', 'rb') as f:
    coins_cache = pickle.load(f)    

API_URL = 'http://localhost:5173/'

def get_embedding(text):
    if text in coins_cache:
        return coins_cache[text]

    inputs = tokenizer(text, return_tensors='pt')
    outputs = model(**inputs)
    return outputs.last_hidden_state[0].mean(dim=0).detach().numpy()

def calculate_cosine_similarity(word1, word2):
    # Get the embeddings for word1 and word2
    word1_embedding = get_embedding(word1)
    word2_embedding = get_embedding(word2)

    # Reshape the embeddings to 2D arrays
    word1_embedding = word1_embedding.reshape(1, -1)
    word2_embedding = word2_embedding.reshape(1, -1)

    # Calculate the cosine similarity
    cosine_sim = cosine_similarity(word1_embedding, word2_embedding)

    return cosine_sim[0][0]

@csrf_exempt
@api_view(['POST'])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def chatbot(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user_message = data['message']
        chat_completion = client.chat.completions.create(
            model="ft:gpt-3.5-turbo-1106:personal:final-pjt-gpt:9RZiO6ap",
            messages=[
                {
                    "role": "user",
                    "content": f'"{user_message}" 라는 질문은 ["예금 적금", "가상 화폐", "기타"] 3개의 카테고리 중 어디에 속하는 질문인가요? 단답형으로 대답해주세요.',
                },
            ],
            max_tokens=1024,
            temperature=0.2,
            top_p=1,
        )

        if chat_completion.choices[0].message.content == "예금 적금":
            chat_completion = client.chat.completions.create(
                model="ft:gpt-3.5-turbo-1106:personal:final-pjt-gpt:9RZiO6ap",
                messages=[
                    {
                        "role": "user",
                        "content": f'"{user_message}" 라는 질문은 ["예적금 상품 추천", "예적금 상품 검색"] 2개의 카테고리 중 어디에 속하는 질문인가요? 단답형으로 대답해주세요.',
                    },
                ],
                max_tokens=1024,
                temperature=0.2,
                top_p=1,
            )

            if chat_completion.choices[0].message.content == "예적금 상품 추천":
                return JsonResponse({'response': '조금 더 자세히 질문해주시면 답변드리는데 도움이 될 것 같아요!'})
            
            elif chat_completion.choices[0].message.content == "예적금 상품 검색":
                similarity_dict = {}

                user_message_embedding = get_embedding(user_message)

                for d_prdt in deposits_cache:
                    deposit_embedding = deposits_cache[d_prdt]
                    similarity = cosine_similarity(user_message_embedding.reshape(1, -1), deposit_embedding.reshape(1, -1))
                    similarity_dict[d_prdt] = similarity

                for s_prdt in savings_cache:
                    saving_embedding = savings_cache[s_prdt]
                    similarity = cosine_similarity(user_message_embedding.reshape(1, -1), saving_embedding.reshape(1, -1))
                    similarity_dict[s_prdt] = similarity

                sorted_similarity_dict = dict(sorted(similarity_dict.items(), key=lambda x: x[1], reverse=True))
                top_prdt = list(sorted_similarity_dict.keys())[0]

                if '예금' in top_prdt:
                    prdt_id = DepositProduct.objects.get(fin_prdt_nm=top_prdt).id
                    return JsonResponse({'response': f'이 링크에 가시면 원하시는 상품에 대한 정보를 얻으실 수 있을 것 같아요! {API_URL}deposit/{prdt_id}/'})
                else:
                    prdt_id = SavingProduct.objects.get(fin_prdt_nm=top_prdt).id
                    return JsonResponse({'response': f'이 링크에 가시면 원하시는 상품에 대한 정보를 얻으실 수 있을 것 같아요! {API_URL}saving/{prdt_id}/'})

            else:
                return JsonResponse({'response': '조금 더 자세히 질문해주시면 답변드리는데 도움이 될 것 같아요!'})

        elif chat_completion.choices[0].message.content == "가상 화폐":
            chat_completion = client.chat.completions.create(
                model="ft:gpt-3.5-turbo-1106:personal:final-pjt-gpt:9RZiO6ap",
                messages=[
                    {
                        "role": "user",
                        "content": f'"{user_message}" 라는 질문은 ["종목 추천", "정보 검색"] 2개의 카테고리 중 어디에 속하는 질문인가요? 단답형으로 대답해주세요.',
                    },
                ],
                max_tokens=1024,
                temperature=0.2,
                top_p=1,
            )

            if chat_completion.choices[0].message.content == "종목 추천":
                return JsonResponse({'response': '암호화폐 시장은 매우 변동성이 크고 위험이 따르기 때문에, 현재 시점에서 특정 코인 종목을 추천해드리는 것은 어렵습니다.'})
            
            elif chat_completion.choices[0].message.content == "정보 검색":
                similarity_dict = {}

                user_message_embedding = get_embedding(user_message)

                for coin in coin_list:
                    coin_name = coin['korean_name']
                    coin_embedding = coins_cache[coin_name]
                    similarity = cosine_similarity(user_message_embedding.reshape(1, -1), coin_embedding.reshape(1, -1))
                    similarity_dict[coin_name] = similarity

                sorted_similarity_dict = dict(sorted(similarity_dict.items(), key=lambda x: x[1], reverse=True))
                top_coin = list(sorted_similarity_dict.keys())[0]

                for coin in coin_list:
                    if coin['korean_name'] == top_coin:
                        top_coin = coin['market']

                return JsonResponse({'response': f'이 링크에 가시면 원하시는 정보를 얻으실 수 있을 것 같아요! {API_URL}stocks/{top_coin}/'})

            else:
                return JsonResponse({'response': '조금 더 자세히 질문해주시면 답변드리는데 도움이 될 것 같아요!'})
        else:
            chat_completion = client.chat.completions.create(
                model="ft:gpt-3.5-turbo-1106:personal:final-pjt-gpt:9RZiO6ap",
                messages=[
                    {
                        "role": "user",
                        "content": user_message,
                    },
                ],
                max_tokens=1024,
                temperature=0.2,
                top_p=1,
            )
            response_message = chat_completion.choices[0].message.content
            return JsonResponse({'response': response_message})

