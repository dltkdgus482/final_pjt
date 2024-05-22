from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# permission Decorators
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.authentication import TokenAuthentication, BasicAuthentication

from django.shortcuts import get_object_or_404, get_list_or_404

from .serializers import ExchangeRateListSerializer, ExchangeRateSerializer
from .models import ExchangeRate

@api_view(['GET'])
@permission_classes([AllowAny])
def exchange_list(request):
    if request.method == 'GET':
        exchangerates = get_list_or_404(ExchangeRate)
        serializer = ExchangeRateListSerializer(exchangerates, many=True)
        return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def exchange_detail(request, cur_unit):
    exchangerate = get_object_or_404(ExchangeRate, cur_unit=cur_unit)

    if request.method == 'GET':
        serializer = ExchangeRateSerializer(exchangerate)
        return Response(serializer.data)