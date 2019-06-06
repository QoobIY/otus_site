from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('api', views.OK.as_view()),
    path('api/users', views.UserView.as_view()),
    path('api/lessons', views.LessonView.as_view()),
    path('api/lesson/<int:pk>/', views.LessonDetailView.as_view()),
    path('api/courses', views.CourseView.as_view()),
    path('api/course/<int:pk>/', views.CourseDetailView.as_view()),
]
