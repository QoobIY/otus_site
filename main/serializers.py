from .models import Course, OtusUser, Lesson
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = OtusUser
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = '__all__'
