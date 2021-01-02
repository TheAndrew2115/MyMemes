from django.urls import path
from .views import wain

urlpatterns = [
    path('', wain),
]