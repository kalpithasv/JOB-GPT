from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect



def Home(request):
    render(request,'index.html')

# Create your views here.
