from django.shortcuts import HttpResponse
from rest_framework.response import Response
from .models import OtusUser, Course, Lesson, generate
from .serializers import UserSerializer, CourseSerializer, LessonSerializer
from rest_framework import generics, status, views
import hashlib
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.views.generic import TemplateView
from .forms import SignUpForm


def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            OtusUser.objects.create(user=user)
            login(request, user)
            return redirect('index')
    else:
        form = SignUpForm()
    return render(request, 'registration/signup.html', {'form': form})


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
