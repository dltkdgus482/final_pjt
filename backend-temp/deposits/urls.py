from django.urls import path
from . import views


urlpatterns = [
    path('', views.deposit_list),
    path('<int:deposit_pk>/', views.deposit_detail),
    path('recommend/', views.deposit_recommend),
]