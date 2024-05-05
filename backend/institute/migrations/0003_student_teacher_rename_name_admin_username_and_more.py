# Generated by Django 4.2.11 on 2024-03-31 07:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('institute', '0002_alter_user_slug'),
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=56)),
                ('erpid', models.CharField(max_length=56)),
                ('clas', models.CharField(max_length=56)),
                ('stream', models.CharField(max_length=56)),
                ('subjects', models.TextField(max_length=256)),
                ('mobile', models.CharField(max_length=10)),
                ('email', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=56)),
                ('subject', models.CharField(max_length=56)),
                ('class_assigned', models.CharField(max_length=56)),
            ],
        ),
        migrations.RenameField(
            model_name='admin',
            old_name='name',
            new_name='username',
        ),
        migrations.RemoveField(
            model_name='user',
            name='slug',
        ),
    ]