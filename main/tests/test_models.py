from django.test import TestCase
from main.models import Course, Lesson, generate


class MainModelsTestCase(TestCase):

    def test_course(self):
        course =Course.objects.create(name='TestCourse', description='None')
        self.assertEqual(str(course), course.name)

    def test_lesson(self):
        lesson =Lesson.objects.create(name='TestLesson', description='None')
        self.assertEqual(str(lesson), lesson.name)

    def test_generate(self):
        self.assertIsNone(generate())
