from django.views.decorators.csrf import get_token, ensure_csrf_cookie, csrf_exempt
from django.http import JsonResponse
from django.conf import settings
from rest_framework.decorators import api_view
import json

import os
from openai import OpenAI

model='gpt-3.5-turbo'
client = OpenAI(
    # This is the default and can be omitted
    api_key=os.environ.get("OPEN_AI_API_KEY"),
)

@csrf_exempt
@api_view(['POST'])
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

def get_csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})
