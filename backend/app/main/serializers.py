from .models import Course, OtusUser, Lesson, Mark
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


class MarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mark
        fields = '__all__'


class MarkSerializerGet(serializers.ModelSerializer):
    teacher = serializers.StringRelatedField()
    student = serializers.StringRelatedField()
    lesson = serializers.StringRelatedField()

    class Meta:
        model = Mark
        fields = '__all__'

