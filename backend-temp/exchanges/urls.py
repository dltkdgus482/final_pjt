from django.urls import path
from . import views


urlpatterns = [
    path('', views.exchange_list),
    path('<str:cur_unit>/', views.exchange_detail),
]