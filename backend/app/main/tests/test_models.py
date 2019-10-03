import pytest
from backend.main import Course, Lesson, generate


@pytest.mark.django_db
def test_course():
    course =Course.objects.create(name='TestCourse', description='None')
    assert str(course) == course.name


@pytest.mark.django_db
def test_lesson():
    lesson =Lesson.objects.create(name='TestLesson', description='None')
    assert str(lesson) == lesson.name


@pytest.mark.django_db
def test_generate():
    assert generate() is None
