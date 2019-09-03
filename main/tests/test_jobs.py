from django.test import TestCase
from main.jobs import periodic_send, smail
from django.contrib.auth.models import User
from main.models import OtusUser


class MainJobsTestCase(TestCase):

    def test_periodic_send_valid(self):
        u = User.objects.create_user('TestUser001','Get@mail.com', 'mXdjf1238a!a')
        otus_user = OtusUser.objects.create(user=u,teacher=False)
        ans = periodic_send(otus_user.pk, 'test@mail.test')
        self.assertIsNone(ans)

    def test_periodic_send_error(self):
        with self.assertRaises(OtusUser.DoesNotExist):
            periodic_send(10, 'test@mail.test')

    def test_smail(self):
        ans = smail('test@mail.test')
        self.assertEqual(ans, 1)