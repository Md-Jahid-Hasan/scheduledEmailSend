from django.urls import path
from .views import react_home

app_name = "frontend"

urlpatterns = [
    path("", react_home, name="react-home"),
    path("login/", react_home, name="react-home"),
    path("register/", react_home, name="react-home"),
    path("send-email/", react_home, name="react-home"),
    path("mail-list/", react_home, name="react-home"),
]