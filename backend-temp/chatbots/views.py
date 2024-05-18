from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.conf import settings
from rest_framework.decorators import api_view
import json


from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# permission Decorators
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.authentication import TokenAuthentication, BasicAuthentication

# from django.shortcuts import get_object_or_404, get_list_or_404

# from .serializers import ArticleListSerializer, ArticleSerializer
# from .models import Article

import os
from openai import OpenAI

model='gpt-3.5-turbo'
client = OpenAI(
    # This is the default and can be omitted
    api_key=os.environ.get("OPEN_AI_API_KEY"),
)

@csrf_exempt
@api_view(['POST'])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def chatbot(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user_message = data['message']
        chat_completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "user",
                    "content": user_message,
                },
            ],
            max_tokens=1024,
            temperature=0.5,
            # top_p=1,
            # frequency_penalty=0.5,
            # presence_penalty=0.5,
            # stop=["Human"],
        )
        # print(chat_completion)
        response_message = chat_completion.choices[0].message.content
        return JsonResponse({'response': response_message})

