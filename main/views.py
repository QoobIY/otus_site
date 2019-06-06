from django.shortcuts import render, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import OtusUser, Course, Lesson
from .serializers import UserSerializer, CourseSerializer, LessonSerializer
from rest_framework import generics
from rest_framework import status
import hashlib


def index(request):
    return HttpResponse('<h1>hello world</h1>')


class OK(APIView):
    def get(self, request):
        return Response({'ans': 'Hello world'})


class UserView(generics.ListCreateAPIView):
    queryset = OtusUser.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        saved_data = request.data.copy()
        saved_data.update(
            {
                'password': hashlib.md5(saved_data['password'].encode()).hexdigest()
            }
        )
        serializer = self.get_serializer(data=saved_data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class CourseView(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CourseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class LessonView(generics.ListCreateAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer


class LessonDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer