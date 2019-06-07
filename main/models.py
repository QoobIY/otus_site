from django.db import models
from django.contrib.auth.models import User
from datetime import datetime

class Course(models.Model):
    name = models.CharField(max_length=40)
    description = models.TextField()


class OtusUser(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    courses = models.ManyToManyField(Course, blank=True)
    teacher = models.BooleanField(default=False)


class Lesson(models.Model):
    name = models.CharField(max_length=40)
    description = models.TextField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    date = models.DateField(default=datetime.now)
