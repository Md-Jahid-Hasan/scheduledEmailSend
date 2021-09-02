from datetime import datetime
from celery.result import AsyncResult
import pytz
from django.shortcuts import render
from django.utils import timezone

from .serializers import EmailSerializer, CreateEmailSerializer
from rest_framework import generics, serializers
from rest_framework.permissions import IsAuthenticated
from .models import Notification
from .tasks import send_email


class SendEmail(generics.ListCreateAPIView):
    serializer_class = CreateEmailSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Notification.objects.filter(user=self.request.user)

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return CreateEmailSerializer
        return EmailSerializer

    def perform_create(self, serializer):
        data = serializer.save(user=self.request.user)
        # send_email.delay(data.body, data.subject, data.email)
        print(timezone.now().astimezone(pytz.utc))
        print(data.send_time.astimezone(pytz.utc))
        x = send_email.apply_async((data.body, data.subject, data.email), eta=data.send_time.astimezone(pytz.utc))
        result = AsyncResult(x.task_id)
        print(result.state)


class ListEmail(generics.ListAPIView):
    serializer_class = EmailSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Notification.objects.filter(user=self.request.user).order_by('-send_time')



