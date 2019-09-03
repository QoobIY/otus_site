from django.shortcuts import HttpResponse
from rest_framework.response import Response
from .models import OtusUser, Course, Lesson, generate
from .serializers import UserSerializer, CourseSerializer, LessonSerializer
from rest_framework import generics, status, views
import hashlib
from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User
from django.views.generic import TemplateView
from .forms import SignUpForm
from .jobs import smail, periodic_send
from django_rq import get_scheduler
from datetime import datetime


class SignUp(generics.CreateAPIView):
    def post(self, request, *args, **kwargs):

        form = SignUpForm(request.data)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            mail = form.cleaned_data.get('email')
            user = authenticate(username=username, password=raw_password)
            otus_user = OtusUser.objects.create(user=user)
            login(request, user)
            scheduler = get_scheduler('default')
            scheduler.schedule(datetime.now(), periodic_send, interval=60, args=[otus_user.id, mail])
            smail.delay(mail)
            return Response({
                'success': True
            })
        else:
            return Response({
                'success': False,
                'errors': form.errors
            })


class AuthView(generics.CreateAPIView):
    def post(self, request, *args, **kwargs):
        username = request.data['username']
        password = request.data['password']
        user = authenticate(request, username=username, password=password)
        success = False
        if user is not None:
            login(request, user)
            success = True
        return Response({
            'success': success,
        })


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


class TeacherView(views.APIView):
    def get(self, request):
        teachers = OtusUser.objects.select_related('user').prefetch_related('lessons').filter(teacher=True)
        teachers_list = []
        for teacher in teachers:
            user = teacher.user
            lessons = []
            for lesson in teacher.lessons.select_related('course').all():
                lessons.append({
                    'name': lesson.name,
                    'course': lesson.course.name
                })
            teachers_list.append({
                'name': user.first_name,
                'last_name': user.last_name,
                'lessons': lessons
            })
        return Response(teachers_list)


class TeacherDetailView(generics.ListCreateAPIView):
    queryset = OtusUser.objects.all()
    serializer_class = UserSerializer


def generate_view(request):
    generate()
    return HttpResponse('Data generated')


class JoinView(TemplateView):
    template_name = 'main/join.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        user = self.request.user
        otus_user = OtusUser.objects.get(user=user)
        course_list = Course.objects.exclude(students__in=[otus_user.id])
        context['course_list'] = course_list
        return context

    def post(self, request):
        user = request.user
        otus_user = OtusUser.objects.get(user=user)
        course_id = request.POST['course_id']
        course = Course.objects.get(id=course_id)
        course.students.add(otus_user)
        return HttpResponse('Вы успешно записались на курс - {}'.format(course.name))


class ProfileView(views.APIView):
    def get(self, request):
        if not request.user.is_authenticated:
            return Response({})
        else:
            otus_user = OtusUser.objects.get(user=request.user.id)
            return Response({
                'first_name': request.user.first_name,
                'email': request.user.email,
                'date_of_brith': otus_user.date_of_brith
            })


class EditProfileView(generics.ListCreateAPIView):
    def post(self, request, *args, **kwargs):
        try:
            editable_user_fields = ['first_name', 'email']
            editable_otus_fields = ['date_of_brith']
            for key, val in request.data.items():
                if key in editable_user_fields:
                        user = User.objects.get(id=request.user.id)
                        user.__setattr__(key, val)
                        user.save()
                elif key in editable_otus_fields:
                    otus_user = OtusUser.objects.get(user=request.user.id)
                    otus_user.__setattr__(key, val)
                    otus_user.save()
                else:
                    return Response({
                        'success': False,
                        'message': '{} not editable'.format(key),
                    })
            return Response({
                'success': True,
            })
        except Exception as e:
            return Response({
                'success': False,
                'message': '{}'.format(e),
            })