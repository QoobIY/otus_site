from django.test import TestCase
from backend.otus.wsgi import application
from django.core.handlers.wsgi import WSGIHandler


class WsgiTestCase(TestCase):
    def test_wsgi_application(self):
        self.assertEqual(type(application), WSGIHandler)
