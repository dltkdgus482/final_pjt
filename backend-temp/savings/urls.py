from django.urls import path
from . import views


urlpatterns = [
    path('', views.saving_list),
    path('<int:saving_pk>/', views.saving_detail),
]