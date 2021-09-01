from django.utils import timezone
from rest_framework import serializers
from django.contrib.auth import get_user_model as User
from .models import Notification


class CreateEmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        exclude = ['user']

    # def validate(self, attrs):
    #     if attrs['send_time'] < timezone.now():
    #         raise serializers.ValidationError("Please select a valid time")


class EmailSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()

    class Meta:
        model = Notification
        fields = '__all__'

