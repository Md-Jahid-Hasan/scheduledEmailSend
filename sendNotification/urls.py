from django.urls import path
from .views import SendEmail

app_name = 'sendNotification'

urlpatterns = [
    path('api/notification-add/', SendEmail.as_view(), name="send-email"),
]