from django.db import models
from django.template.defaultfilters import slugify
from django import forms


# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ("created_at",)

    def __str__(self):
        return self.username


class Admin(models.Model):
    email = models.EmailField(max_length=250)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)


class Student(models.Model):
    name = models.CharField(max_length=56)
    erpid = models.CharField(max_length=56)
    clas = models.CharField(max_length=56)
    stream = models.CharField(max_length=56)
    subjects = models.TextField(max_length=256)
    mobile = models.CharField(max_length=10, null=False)
    email = models.EmailField(max_length=254)


class Teacher(models.Model):
    name = models.CharField(max_length=56)
    subject = models.CharField(max_length=56)
    class_assigned = models.CharField(max_length=56)
