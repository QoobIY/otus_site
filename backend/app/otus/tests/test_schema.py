from otus.schema import schema
from graphene_django.utils.testing import GraphQLTestCase
from collections import OrderedDict
from main.models import Course
class GQLTestCase(GraphQLTestCase):

    GRAPHQL_SCHEMA = schema

    def test_query_type(self):
        response = self.GRAPHQL_SCHEMA.execute('''
        query {
          allCourses {
            id
          }
        }
        ''')
        self.assertEqual(type(response.data), OrderedDict)

    def test_query_data(self):
        course_name = 'Course Test'
        Course.objects.create(name=course_name, description='This is test course')
        response = self.GRAPHQL_SCHEMA.execute('''
        query {
          allCourses {
            id
            name
          }
        }
        ''')
        courses = response.data['allCourses']
        self.assertEqual(courses[0]['name'], course_name)
