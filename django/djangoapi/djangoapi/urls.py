from django.contrib import admin
from django.urls import path,include
from rest_framework import routers                 
from crudapi import views 



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('crudapi.urls')),
]
