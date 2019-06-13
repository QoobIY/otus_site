import graphene

from graphene_django.types import DjangoObjectType
from .models import Lesson, Course


class LessonType(DjangoObjectType):
    class Meta:
        model = Lesson


class CourseType(DjangoObjectType):
    class Meta:
        model = Course


class Query(object):
    all_lessons = graphene.List(LessonType)
    all_courses = graphene.List(CourseType)
    lesson = graphene.Field(LessonType, id=graphene.Int(), name=graphene.String())
    course = graphene.Field(LessonType, id=graphene.Int(), name=graphene.String())

    def resolve_all_lessons(self, info, **kwargs):
        return Lesson.objects.all()

    def resolve_all_courses(self, info, **kwargs):
        return Course.objects.all()

    def resolve_lesson(self, info, **kwargs):
        id = kwargs.get('id')
        name = kwargs.get('name')

        if id is not None:
            return Lesson.objects.get(pk=id)

        if name is not None:
            return Lesson.objects.get(name=name)

        return None

    def resolve_course(self, info, **kwargs):
        id = kwargs.get('id')
        name = kwargs.get('name')

        if id is not None:
            return Lesson.Course.get(pk=id)

        if name is not None:
            return Lesson.Course.get(name=name)

        return None
