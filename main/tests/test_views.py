from django.test import TestCase
from django.contrib.auth.models import User
from main.models import OtusUser

class MainViewsTestCase(TestCase):

    def test_sign_up_valid(self):
        req = {
            'username': 'TestUser001',
            'password1': 'mXdjf1238a!a',
            'password2': 'mXdjf1238a!a',
            'first_name': 'Tester',
            'email': 'Get@mail.com',
        }
        ans = self.client.post('/api/signup', req)
        self.assertEqual(ans.data, {'success': True})

    def test_sign_up_not_valid(self):
        req = {
            'username': 'TestUser001',
            'password1': 'mXdjf1238a!a',
            'password2': 'mXdjf1238a!a',
            'email': 'Get@mail.com',
        }
        ans = self.client.post('/api/signup', req)
        self.assertEqual(ans.data['success'], False)

    def test_auth_valid(self):
        User.objects.create_user('TestUser001','Get@mail.com', 'mXdjf1238a!a')
        req = {
            'username': 'TestUser001',
            'password': 'mXdjf1238a!a',
        }
        ans = self.client.post('/api/auth', req)
        self.assertEqual(ans.data, {'success': True})

    def test_auth_not_valid(self):
        req = {
            'username': 'TestUser002',
            'password': 'mXdjf1238a!a',
        }
        ans = self.client.post('/api/auth', req)
        self.assertEqual(ans.data, {'success': False})

    def test_teachers(self):
        u = User.objects.create_user('TestUser001','Get@mail.com', 'mXdjf1238a!a')
        OtusUser.objects.create(user=u, teacher=True)
        ans = self.client.get('/api/teachers')
        self.assertEqual(ans.data, [{'lessons': [], 'last_name': '', 'name': ''}])

    def test_empty_username(self):
        req = {
            'username': '',
            'password1': 'mXdjf1238a!a',
            'password2': 'mXdjf1238a!a',
            'first_name': 'Tester',
            'email': 'Get@mail.com',
        }
        ans = self.client.post('/api/signup', req)
        self.assertEqual(ans.data['success'], False)

    def test_empty_first_name(self):
        req = {
            'username': 'Getix',
            'password1': 'mXdjf1238a!a',
            'password2': 'mXdjf1238a!a',
            'first_name': '',
            'email': 'Get@mail.com',
        }
        ans = self.client.post('/api/signup', req)
        self.assertEqual(ans.data['success'], False)

    def test_long_first_name(self):
        req = {
            'username': 'Getix',
            'password1': 'mXdjf1238a!a',
            'password2': 'mXdjf1238a!a',
            'first_name': 'FirstNameFirstNameFirstNameFirstNameFirstNameFirstNameFirstNameFirstNameFirstNameFirstName',
            'email': 'Get@mail.com',
        }
        ans = self.client.post('/api/signup', req)
        self.assertEqual(ans.data['success'], False)

    def test_long_username(self):
        req = {
            'username': 'GetixGetixGetixGetixGetixGetixGetixGetixGetixGetixGetixGetixGetixGetixGetixGetixGetixGetixG',
            'password1': 'mXdjf1238a!a',
            'password2': 'mXdjf1238a!a',
            'first_name': 'FirstNameFirstNameFirstNameFirstNameFirstNameFirstNameFirstNameFirstNameFirstNameFirstName',
            'email': 'Get@mail.com',
        }
        ans = self.client.post('/api/signup', req)
        self.assertEqual(ans.data['success'], False)

    def test_empty_password(self):
        req = {
            'username': 'asd',
            'password1': '',
            'password2': '',
            'first_name': 'Tester',
            'email': 'Get@mail.com',
        }
        ans = self.client.post('/api/signup', req)
        self.assertEqual(ans.data['success'], False)

    def test_short_password(self):
        req = {
            'username': 'asd',
            'password1': 'my!@',
            'password2': 'my!@',
            'first_name': 'Tester',
            'email': 'Get@mail.com',
        }
        ans = self.client.post('/api/signup', req)
        self.assertEqual(ans.data['success'], False)

    def test_empty_email(self):
        req = {
            'username': 'asd',
            'password1': 'my!@',
            'password2': 'my!@',
            'first_name': 'Tester',
            'email': '',
        }
        ans = self.client.post('/api/signup', req)
        self.assertEqual(ans.data['success'], False)

    def test_invalid_email(self):
        req = {
            'username': 'asd',
            'password1': 'my!@',
            'password2': 'my!@',
            'first_name': 'Tester',
            'email': 'asf134.1123',
        }
        ans = self.client.post('/api/signup', req)
        self.assertEqual(ans.data['success'], False)