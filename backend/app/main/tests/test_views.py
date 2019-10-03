import pytest
from django.test import Client
from django.contrib.auth.models import User
from backend.main import OtusUser

client = Client()


@pytest.fixture()
def sign_up_input_data():
    print('input data generated')
    return {
        'username': 'TestUser001',
        'password1': 'mXdjf1238a!a',
        'password2': 'mXdjf1238a!a',
        'first_name': 'Tester',
        'email': 'Get@mail.com',
    }


@pytest.mark.django_db
def test_sign_up_valid(sign_up_input_data):
    ans = client.post('/api/signup', sign_up_input_data)
    assert ans.data == {'success': True}


@pytest.mark.django_db
def test_sign_up_not_valid(sign_up_input_data):
    del sign_up_input_data['username']
    ans = client.post('/api/signup', sign_up_input_data)
    assert ans.data['success'] is False


@pytest.mark.django_db
def test_auth_valid():
    User.objects.create_user('TestUser001','Get@mail.com', 'mXdjf1238a!a')
    req = {
        'username': 'TestUser001',
        'password': 'mXdjf1238a!a',
    }
    ans = client.post('/api/auth', req)
    assert ans.data == {'success': True}


@pytest.mark.django_db
def test_auth_not_valid():
    req = {
        'username': 'TestUser002',
        'password': 'mXdjf1238a!a',
    }
    ans = client.post('/api/auth', req)
    assert ans.data == {'success': False}


@pytest.mark.django_db
def test_teachers():
    u = User.objects.create_user('TestUser001','Get@mail.com', 'mXdjf1238a!a')
    OtusUser.objects.create(user=u, teacher=True)
    ans = client.get('/api/teachers')
    assert ans.data == [{'lessons': [], 'last_name': '', 'name': ''}]


@pytest.mark.django_db
def test_empty_username():
    req = {
        'username': '',
        'password1': 'mXdjf1238a!a',
        'password2': 'mXdjf1238a!a',
        'first_name': 'Tester',
        'email': 'Get@mail.com',
    }
    ans = client.post('/api/signup', req)
    assert ans.data['success'] is False


@pytest.mark.django_db
def test_empty_first_name():
    req = {
        'username': 'Getix',
        'password1': 'mXdjf1238a!a',
        'password2': 'mXdjf1238a!a',
        'first_name': '',
        'email': 'Get@mail.com',
    }
    ans = client.post('/api/signup', req)
    assert ans.data['success'] is False


@pytest.mark.django_db
def test_long_first_name():
    req = {
        'username': 'Getix',
        'password1': 'mXdjf1238a!a',
        'password2': 'mXdjf1238a!a',
        'first_name': 'FirstNameFirstNameFirstNameFirstNameFirstNameFirstNameFirstNameFirstNameFirstNameFirstName',
        'email': 'Get@mail.com',
    }
    ans = client.post('/api/signup', req)
    assert ans.data['success'] is False


@pytest.mark.django_db
def test_long_username():
    req = {
        'username': 'GetixGetixGetixGetixGetixGetixGetixGetixGetixGetixGetixGetixGetixGetixGetixGetixGetixGetixG',
        'password1': 'mXdjf1238a!a',
        'password2': 'mXdjf1238a!a',
        'first_name': 'FirstNameFirstNameFirstNameFirstNameFirstNameFirstNameFirstNameFirstNameFirstNameFirstName',
        'email': 'Get@mail.com',
    }
    ans = client.post('/api/signup', req)
    assert ans.data['success'] is False


@pytest.mark.django_db
def test_empty_password():
    req = {
        'username': 'asd',
        'password1': '',
        'password2': '',
        'first_name': 'Tester',
        'email': 'Get@mail.com',
    }
    ans = client.post('/api/signup', req)
    assert ans.data['success'] is False


@pytest.mark.django_db
def test_short_password():
    req = {
        'username': 'asd',
        'password1': 'my!@',
        'password2': 'my!@',
        'first_name': 'Tester',
        'email': 'Get@mail.com',
    }
    ans = client.post('/api/signup', req)
    assert ans.data['success'] is False


@pytest.mark.django_db
def test_empty_email():
    req = {
        'username': 'asd',
        'password1': 'my!@',
        'password2': 'my!@',
        'first_name': 'Tester',
        'email': '',
    }
    ans = client.post('/api/signup', req)
    assert ans.data['success'] is False


@pytest.mark.django_db
def test_invalid_email():
    req = {
        'username': 'asd',
        'password1': 'my!@',
        'password2': 'my!@',
        'first_name': 'Tester',
        'email': 'asf134.1123',
    }
    ans = client.post('/api/signup', req)
    assert ans.data['success'] is False
