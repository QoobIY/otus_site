from django.urls import path, include
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name="main/index.html"), name='index'),
    path('signup', views.signup, name='signup'),
    path('api/users', views.UserView.as_view()),
    path('api/lessons', views.LessonView.as_view()),
    path('api/lesson/<int:pk>/', views.LessonDetailView.as_view()),
    path('api/courses', views.CourseView.as_view()),
    path('api/course/<int:pk>/', views.CourseDetailView.as_view()),
    path('auth/',include('django.contrib.auth.urls')),
]
