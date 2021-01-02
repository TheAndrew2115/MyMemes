from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def wain(request):
    return HttpResponse("Hello")
