# Generated by Django 2.2.2 on 2019-08-28 07:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_auto_20190804_1244'),
    ]

    operations = [
        migrations.AddField(
            model_name='otususer',
            name='avatar',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
