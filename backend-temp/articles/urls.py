from django.urls import path
from . import views

app_name = 'articles'

urlpatterns = [
    path('chatbot/', views.chatbot, name='chatbot'),
    path('get_csrf/', views.get_csrf, name='get_csrf'),
]
