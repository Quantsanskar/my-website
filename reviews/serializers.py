# from django.contrib.auth.models import User, Group
# from rest_framework import serializers


# class UserSerializers(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = User
#         fields = ["url", "username", "email", "groups"]


# class GroupSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Group
#         fields = ["url", "name"]


from rest_framework import serializers
from .models import MyModel


class MyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyModel
        fields = "__all__"
