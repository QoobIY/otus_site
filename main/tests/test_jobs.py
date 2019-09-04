from main.jobs import periodic_send, smail
from django.contrib.auth.models import User
from main.models import OtusUser
import pytest


@pytest.mark.django_db
def test_periodic_send_valid():
    u = User.objects.create_user('TestUser001','Get@mail.com', 'mXdjf1238a!a')
    otus_user = OtusUser.objects.create(user=u,teacher=False)
    ans = periodic_send(otus_user.pk, 'test@mail.test')
    assert ans is None


@pytest.mark.django_db
def test_periodic_send_error():
    with pytest.raises(OtusUser.DoesNotExist):
        periodic_send(777, 'test@mail.test')


@pytest.mark.django_db
def test_smail():
    ans = smail('test@mail.test')
    assert ans == 1