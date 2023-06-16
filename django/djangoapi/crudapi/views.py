from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from .serializers import crudapiSerializer 
from rest_framework import viewsets      
from .models import Users  
from rest_framework.views import APIView    
from rest_framework.response import Response   
from rest_framework import status 
import datetime       


def home(request):
   return render(request,'index.html')

class signup(APIView):
   def post(self, request):
            user_model=Users()
            name=request.POST['Username']
            email=request.POST['Email_Address']
            password=request.POST['Password']
            
            get_users = Users.objects.filter(Email=email).values('id','Username','Password','Email','Status','Added_On','User_Role','User_Status')
            
            if (get_users.count()>0):
               return Response({'status':'false'},status=status.HTTP_201_CREATED)
            else:
                user_model.Username=name;
                user_model.Password=password;
                user_model.Email=email;
                user_model.Status='Active';
                user_model.Added_On=datetime.datetime.now();

                user_model.save()
            return Response({'status':'true'},status=status.HTTP_201_CREATED)
