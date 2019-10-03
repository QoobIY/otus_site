from django_rq import job
from django.core.mail import send_mail
from django.conf import settings
from backend.main import OtusUser
from datetime import datetime, timezone, timedelta


@job
def periodic_send(user_id, mail):
    time = datetime.now(timezone.utc)
    user = OtusUser.objects.prefetch_related('courses__lessons').get(id=user_id)
    courses = user.courses.filter(lessons__date__range=[time, time+timedelta(0, 1800)])
    for course in courses:
        lessons = course.lessons.all()
        for lesson in lessons:
                print('send periodic mail {}'.format(mail))
                send_mail(
                    'Скоро начнётся занятие',
                    'Скоро начнётся занятие {} в {}.\nhttp://www.courses.otus/'.format(lesson.name, lesson.date),
                    settings.EMAIL_HOST_USER,
                    [mail],
                    fail_silently=False,
                )


@job
def smail(mail):
    print('send mail {}'.format(mail))
    return send_mail(
        'Успешная регистрация',
        'Вы успешно зарегестрировались на сайте http://www.courses.otus/',
        settings.EMAIL_HOST_USER,
        [mail],
        fail_silently=False,
    )
