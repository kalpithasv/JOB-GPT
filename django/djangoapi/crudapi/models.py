from django.db import models

# Create your models here.
class Users(models.Model):
     Username = models.CharField(max_length=255)
     Password = models.CharField(max_length=255)
     Email = models.CharField(max_length=255)
     Status = models.CharField(max_length=255)
     Added_On = models.CharField(max_length=255)
     User_Role = models.CharField(max_length=255)
     User_Status=models.CharField(max_length=50)
