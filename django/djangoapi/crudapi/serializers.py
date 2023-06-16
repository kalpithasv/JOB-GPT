from rest_framework import serializers
from .models import Users

class crudapiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('id' ,'title', 'description', 'completed')
