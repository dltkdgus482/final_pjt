from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# permission Decorators
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

from django.contrib.auth import get_user_model

User = get_user_model()

@api_view(['POST'])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def signout(request):
    user = User.objects.get(username=request.user.username)
    user.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)