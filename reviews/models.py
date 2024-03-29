from django.db import models

# Create your models here.


# from here


class MyModel(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()


# to here
