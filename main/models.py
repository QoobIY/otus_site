from django.db import models


class Course(models.Model):
    name = models.CharField(max_length=40)
    description = models.TextField()


class OtusUser(models.Model):
    name = models.CharField(max_length=40)
    surname = models.CharField(max_length=40)
    email = models.EmailField(max_length=40)
    password = models.TextField()
    courses = models.ManyToManyField(Course, blank=True)


class Lesson(models.Model):
    name = models.CharField(max_length=40)
    description = models.TextField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
