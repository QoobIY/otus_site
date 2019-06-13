from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
import random


class OtusUser(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    teacher = models.BooleanField(default=False)

    def __str__(self):
        return "{} {}".format(self.user.first_name, self.user.last_name)


class Course(models.Model):
    name = models.CharField(max_length=40)
    description = models.TextField()
    students = models.ManyToManyField(OtusUser)


class Lesson(models.Model):
    name = models.CharField(max_length=40)
    description = models.TextField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=True)
    teacher = models.ForeignKey(OtusUser, on_delete=models.CASCADE, null=True, related_name='lessons')
    date = models.DateField(default=datetime.now)


def generate():
    otususers = []
    for i in range(2):
        tmp_user = User.objects.create_user('Teacher{}'.format(i), 't{}@bk.ru'.format(i), 'dGDFGJ32$JFSD1#')
        tmp_user.first_name = 'Teacher{}'.format(i)
        tmp_user.last_name = 'LastName{}'.format(i)
        tmp_user.save()
        tmp_otus_user = OtusUser(user=tmp_user, teacher=True)
        tmp_otus_user.save()
        otususers.append(tmp_otus_user)
    for i in range(5):
        tmp_course = Course(name='Course {}'.format(i), description='This is course #{}'.format(i))
        tmp_course.save()
        for j in range(5):
            tmp_lesson = Lesson(
                name='L{}'.format(j),
                description='This is lesson #{}'.format(j),
                course=tmp_course,
                teacher=random.choice(otususers)
            )
            tmp_lesson.save()
