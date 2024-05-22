from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# permission Decorators
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication

from django.contrib.auth import get_user_model

import os
import random
import string
import smtplib
from email.mime.text import MIMEText

NAVER_MAIL_API_KEY = os.getenv('NAVER_MAIL_API_KEY')
sender = 'dltkdgus482@naver.com'  
naver_id = 'dltkdgus482'
naver_app_password = NAVER_MAIL_API_KEY

User = get_user_model()

def generate_auth_key():
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for i in range(6))

@api_view(['POST'])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def signout(request):
    user = User.objects.get(username=request.user.username)
    user.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

auth_key = ''
@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def verify(request):
    global auth_key

    if request.method == 'GET':
        return Response({'message': auth_key == request.GET.get('auth_key')})
    elif request.method == 'POST':
        auth_key = generate_auth_key()

        receiver = request.data.get('email')
        smtp = smtplib.SMTP('smtp.naver.com', 587)
        smtp.ehlo()
        smtp.starttls()
        smtp.login(naver_id, naver_app_password)
        msg = MIMEText(f'인증코드: {auth_key}')
        msg['From'] = sender
        msg['Subject'] = '인증메일'
        msg['To'] = receiver
        smtp.sendmail(sender, receiver, msg.as_string())
        smtp.quit()
        return Response({'message': '인증메일이 발송되었습니다.'})