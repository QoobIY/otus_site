from django.shortcuts import render, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response


def index(request):
    return HttpResponse('<h1>hello world</h1>')


class OK(APIView):

    def get(self, request):
        return Response({'ans': 'Hello world'})
