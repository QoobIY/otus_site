from django.urls import path, include
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name="main/index.html"), name='index'),
    path('api/signup', views.SignUp.as_view(), name='signup'),
    path('api/auth', views.AuthView.as_view(), name='apiauth'),
    path('api/users', views.UserView.as_view()),
    path('api/lessons', views.LessonView.as_view(), name='lessons'),
    path('api/lesson/<int:pk>/', views.LessonDetailView.as_view()),
    path('api/courses', views.CourseView.as_view(),  name='courses'),
    path('api/course/<int:pk>/', views.CourseDetailView.as_view()),
    path('api/teachers', views.TeacherView.as_view(),  name='teachers'),
    path('api/teacher/<int:pk>/', views.TeacherDetailView.as_view()),
    path('api/profile', views.ProfileView.as_view(), name='profile'),
    path('api/edit_profile', views.EditProfileView.as_view(), name='apiauth'),
    path('auth/', include('django.contrib.auth.urls')),
    path('api/generate', views.generate_view),
    path('join', views.JoinView.as_view(), name='join'),
]
