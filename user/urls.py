from django.urls import path
from .views import CreateUserView, LoginView, GetLoginUser

app_name = 'user'

urlpatterns = [
    path('api/register/', CreateUserView.as_view(), name="registration"),
    path('api/login/', LoginView.as_view(), name="login"),
    path('api/me/', GetLoginUser.as_view(), name="me"),
]