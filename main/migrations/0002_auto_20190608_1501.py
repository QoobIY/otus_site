# Generated by Django 2.2.2 on 2019-06-08 15:01

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='otususer',
            name='email',
        ),
        migrations.RemoveField(
            model_name='otususer',
            name='name',
        ),
        migrations.RemoveField(
            model_name='otususer',
            name='password',
        ),
        migrations.RemoveField(
            model_name='otususer',
            name='surname',
        ),
        migrations.AddField(
            model_name='lesson',
            name='date',
            field=models.DateField(default=datetime.datetime.now),
        ),
        migrations.AddField(
            model_name='otususer',
            name='teacher',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='otususer',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]