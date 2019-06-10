from django.contrib import admin

from . import models

admin.site.register(models.Course)
admin.site.register(models.OtusUser)
admin.site.register(models.Lesson)
