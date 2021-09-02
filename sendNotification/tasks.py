from celery import Celery, shared_task
from .models import Notification
from django.core.mail import send_mail, send_mass_mail
from coreDevs.settings import EMAIL_HOST_USER
from time import sleep

app = Celery()


@shared_task
def send_email(body, subject, mail):
    # mail = Notification.objects.get(pk=id)
    email = mail.replace(" ", "").split(",")
    for m in email:
        send_mail(subject, body, EMAIL_HOST_USER, [m])

    return "Done"
