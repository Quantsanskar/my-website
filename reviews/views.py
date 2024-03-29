# from django.shortcuts import render
# from django.contrib.auth.models import User, Group
# from rest_framework import permissons
# from reviews.serializers import UserSerializers, GroupSerializer


# # Create your views here.
# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all().order_by("-date_joined")
#     serializer_class = UserSerializers
#     permisson_classes = [permissons.IsAuthenticated]


# class GroupViewSet(viewsets.ModelViewSet):
#     queryset = Group.objects.all()
#     serializer_class = GroupSerializer
#     permisson_classes = [permissons.IsAuthenticated]


from rest_framework import viewsets
from .models import MyModel
from .serializers import MyModelSerializer


class MyModelViewSet(viewsets.ModelViewSet):
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer
