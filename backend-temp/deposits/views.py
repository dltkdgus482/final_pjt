from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

import os

# permission Decorators
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.authentication import TokenAuthentication, BasicAuthentication

from django.shortcuts import get_object_or_404, get_list_or_404

from .serializers import DepositProductListSerializer, DepositProductSerializer
from .models import DepositProduct, DepositOption

from django.contrib.auth import get_user_model
import requests

User = get_user_model()

@api_view(['GET'])
@permission_classes([AllowAny])
def deposit_list(request):
    if request.method == 'GET':
        API_KEY = os.environ.get("API_KEY")

        url = f'http://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth={API_KEY}&topFinGrpNo=020000&pageNo=1'
        data = requests.get(url).json()['result']

        for deposit_product in data['baseList']:
            if DepositProduct.objects.filter(fin_prdt_cd=deposit_product['fin_prdt_cd']).exists():
                continue
            else:
                min_rate = 100
                max_rate = 0

                for deposit_option in data['optionList']:
                    if deposit_product['fin_prdt_cd'] == deposit_option['fin_prdt_cd']:
                        min_rate = min(min_rate, deposit_option['intr_rate'])
                        max_rate = max(max_rate, deposit_option['intr_rate2'])
                    else:
                        continue

                new_deposit_product = DepositProduct.objects.create(
                    fin_prdt_cd=deposit_product['fin_prdt_cd'],
                    fin_prdt_nm=deposit_product['fin_prdt_nm'],
                    kor_co_nm=deposit_product['kor_co_nm'],
                    join_way=deposit_product['join_way'],
                    mtrt_int=deposit_product['mtrt_int'],
                    spcl_cnd=deposit_product['spcl_cnd'],
                    join_deny=deposit_product['join_deny'],
                    join_member=deposit_product['join_member'],
                    etc_note=deposit_product['etc_note'],
                    max_limit=deposit_product['max_limit'],
                    intr_rate=min_rate,
                    intr_rate2=max_rate,
                )
                
                for deposit_option in data['optionList']:
                    DepositOption.objects.create(
                        depositproduct=new_deposit_product,
                        intr_rate_type=deposit_option['intr_rate_type'],
                        intr_rate_type_nm=deposit_option['intr_rate_type_nm'],
                        save_trm=deposit_option['save_trm'],
                        intr_rate=deposit_option['intr_rate'],
                        intr_rate2=deposit_option['intr_rate2'],
                    )

        deposit_products = get_list_or_404(DepositProduct)
        serializer = DepositProductListSerializer(deposit_products, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def deposit_detail(request, deposit_pk):
    deposit = get_object_or_404(DepositProduct, pk=deposit_pk)

    if request.method == 'GET':
        serializer = DepositProductSerializer(deposit)
        return Response(serializer.data)
    
    if request.method == 'POST':
        user = request.user
        if deposit.fin_prdt_cd in user.financial_products:
            return Response({'message': '이미 가입한 상품입니다.'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            user.financial_products += ', ' + deposit.fin_prdt_cd
            user.save()
            return Response({'message': '가입이 완료되었습니다.'})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def deposit_recommend(request):
    if request.method == 'GET':
        return Response({'recommend_prdt_cd': '추천 알고리즘 구현 중'})