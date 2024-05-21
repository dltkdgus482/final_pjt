from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# permission Decorators
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.authentication import TokenAuthentication, BasicAuthentication

from django.shortcuts import get_object_or_404, get_list_or_404

from .serializers import SavingProductListSerializer, SavingProductSerializer
from .models import SavingProduct
from django.contrib.auth import get_user_model

User = get_user_model()

financial_products = [
    'WR0001B', '00320342', '10511008000996000', '10511008001004000', '10511008001166004', '10511008001278000', '01030500510002', '01030500560002', 'TD11300027000', 'TD11300031000', 'TD11300035000', 'TD11300036000', '101272000057', '101272000058', 
    '10-01-20-024-0046-0000', '10-01-20-024-0059-0000', '21001115', '21001203', '21001265', '21001266', '01211310121', '01211310130', '06492', '010300100335', '200-0135-12', '10-003-1225-0001', '10-003-1381-0001', '10-003-1384-0001', '10-003-1387-0001', '4', '01013000110000000001', '10120110400011', '10120114300011', '10120114700011', '10120116100011', '10-01-20-388-0002', '1001202000002', 'WR0001F', 'WR0001L', '00266451', '10521001000846001', '10527001000925000', '10527001001272000', '10527001001278000', '01020400490001', '01020400490002', '01020400510001', '01020400530001', '1020400640001', 'TD11330029000', 'TD11330030000', 'TD11330031000', 'TD11330032000', '220002101', '220002501', '220002701', '10-01-30-031-0018-0000', '10-01-30-031-0036', '10-01-30-031-0038-0000', '10-01-30-031-0048-0000', '10-01-30-031-0049-0000', '21000111', '21001116', '21001199', '21001236', '21001259', '21001268', '01211210113', 
    '01211210121', '01211210122', '03101', '03700', '010200100051', '010200100084', '010200100092', '010200100104', '010200100109', '230-0118-14', '230-0119-85', '10-047-1360-0002', '10-047-1365-0001', '10-047-1381-0001', '10-047-1387-0001', '10-059-1264-0001', '52', '53', '01012000200000000003', '01012000210000000000', '10140110400011', '10140114300011', '10140114700031', '10141109800021', '10141114300011', '10141114700031', '10-01-30-355-0002', '10-01-30-355-0005', '10-01-30-355-0006', '1001303001001', '1001303001003', '1001303001004', '1001303001005'
]

weights = {
    "age": 0.2,
    "subscribers": 0.15,
    "interest_rate": 0.35,
    "gender": 0.1,
    "salary": 0.2
}

def calculate_score(product, user, weights):
    score = 0
    # 나이 점수: 차이가 적을수록 높은 점수
    age_score = 1 - abs(product["age"] - user["age"]) / 100
    score += age_score * weights["age"]
    
    # 가입한 사람 수 점수: 많을수록 높은 점수
    subscriber_score = product["subscribers"] / 1000
    score += subscriber_score * weights["subscribers"]
    
    # 금리 점수: 높을수록 높은 점수
    interest_rate_score = product["interest_rate"] / 5
    score += interest_rate_score * weights["interest_rate"]
    
    # 성별 점수: 일치하면 높은 점수
    gender_score = 1 if product["gender"] == user["gender"] else 0
    score += gender_score * weights["gender"]
    
    # 월급 점수: 비율로 점수 계산 (이 예제에서는 10,000,000이 최대 월급으로 가정)
    salary_score = user["salary"] / 10000000
    score += salary_score * weights["salary"]
    
    return score

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def saving_list(request):
    if request.method == 'GET':
        saving_products = get_list_or_404(SavingProduct)
        serializer = SavingProductListSerializer(saving_products, many=True)
        return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def saving_detail(request, saving_pk):
    saving = get_object_or_404(SavingProduct, pk=saving_pk)

    if request.method == 'GET':
        serializer = SavingProductSerializer(saving)
        return Response(serializer.data)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def saving_recommend(request):
    if request.method == 'GET':
        return Response({'recommend_prdt_cd': '추천 알고리즘 구현 중'})