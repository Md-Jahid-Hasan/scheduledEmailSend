# Generated by Django 3.2.6 on 2021-09-01 07:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sendNotification', '0002_alter_notification_body'),
    ]

    operations = [
        migrations.AddField(
            model_name='notification',
            name='is_send',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='notification',
            name='send_time',
            field=models.DateTimeField(),
        ),
    ]
