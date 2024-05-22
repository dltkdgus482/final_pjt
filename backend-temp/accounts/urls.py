from django.urls import path
from . import views


urlpatterns = [
    path('signout/', views.signout),
    path('verify/', views.verify),
]