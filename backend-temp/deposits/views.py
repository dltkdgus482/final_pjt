from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# permission Decorators
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.authentication import TokenAuthentication, BasicAuthentication

from django.shortcuts import get_object_or_404, get_list_or_404

from .serializers import DepositProductListSerializer, DepositProductSerializer
from .models import DepositProduct

from django.contrib.auth import get_user_model

User = get_user_model()

@api_view(['GET'])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def deposit_list(request):
    if request.method == 'GET':
        deposit_products = get_list_or_404(DepositProduct)
        serializer = DepositProductListSerializer(deposit_products, many=True)
        return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def deposit_detail(request, deposit_pk):
    deposit = get_object_or_404(DepositProduct, pk=deposit_pk)

    if request.method == 'GET':
        serializer = DepositProductSerializer(deposit)
        return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def deposit_recommend(request):
    if request.method == 'GET':
        return Response({'recommend_prdt_cd': '추천 알고리즘 구현 중'})