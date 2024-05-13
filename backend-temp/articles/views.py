from django.views.decorators.csrf import get_token, ensure_csrf_cookie, csrf_exempt
from django.http import JsonResponse

@csrf_exempt
def chatbot(request):
    if request.method == 'POST':
        return JsonResponse({'response': 'Hello, World!'})
    return JsonResponse({'response': 'Hello, World!'})

def get_csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})