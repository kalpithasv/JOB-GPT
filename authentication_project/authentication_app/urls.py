from django.contrib import admin
from django.urls import path,include
from django import views

urlpatterns = [
    path('Home/', views.Home),
    
]
