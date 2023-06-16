from django.contrib import admin
from django.urls import path,include
from crudapi import views

urlpatterns = [
    path('home/', views.home),
    path('restapi/', views.signup.as_view()),
    
]