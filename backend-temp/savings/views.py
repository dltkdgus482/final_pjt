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
def saving_detail(request, deposit_pk):
    saving = get_object_or_404(SavingProduct, pk=deposit_pk)

    if request.method == 'GET':
        serializer = SavingProductSerializer(saving)
        return Response(serializer.data)