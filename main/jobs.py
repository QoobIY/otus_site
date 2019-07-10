from django_rq import job
from django.core.mail import send_mail
from django.conf import settings
from main.models import OtusUser
from datetime import datetime, timezone
import traceback


@job
def periodic_send(user_id):
    try:
        print(user_id)
        time = datetime.now(timezone.utc)
        user = OtusUser.objects.prefetch_related('courses__lessons').get(id=user_id)
        courses = user.courses.all()
        mail = '2016abi@bk.ru'
        print('user', user.id)
        for course in courses:
            lessons = course.lessons.all()
            for lesson in lessons:
                print('lesson', lesson.date, lesson.name, 'delta', (lesson.date - time).seconds)
                if lesson.date > time and (lesson.date - time).seconds < 1800:
                    send_mail(
                        'Скоро начнётся занятие',
                        'Скоро начнётся занятие {} в {}.\nhttp://www.courses.otus/'.format(lesson.name, lesson.date),
                        settings.EMAIL_HOST_USER,
                        [mail],
                        fail_silently=False,
                    )
    except:
        traceback.print_exc()


@job
def smail(mail):
    print('send mail {}'.format(mail))
    send_mail(
        'Успешная регистрация',
        'Вы успешно зарегестрировались на сайте http://www.courses.otus/',
        settings.EMAIL_HOST_USER,
        [mail],
        fail_silently=False,
    )