from django.shortcuts import render


def react_home(request):
    return render(request, 'frontend/index.html')
