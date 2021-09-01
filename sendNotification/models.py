from django.db import models
from django.contrib.auth import get_user_model as User


class Notification(models.Model):
    user = models.ForeignKey(User(), on_delete=models.CASCADE)
    email = models.CharField(max_length=255)
    subject = models.CharField(max_length=100)
    body = models.TextField()
    send_time = models.DateTimeField()
    is_send = models.BooleanField(default=False)

    def __str__(self):
        return self.subject
