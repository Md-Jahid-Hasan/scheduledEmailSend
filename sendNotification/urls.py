from django.urls import path
from .views import SendEmail, ListEmail

app_name = 'sendNotification'

urlpatterns = [
    path('api/notification-add/', SendEmail.as_view(), name="send-email"),
    path('api/email-list/', ListEmail.as_view(), name="email-list"),
]