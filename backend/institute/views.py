from django.shortcuts import render
from rest_framework import generics, response, status
from .models import User, Admin, Student, Teacher
from .serializers import (
    UserSerializer,
    AdminSerializer,
    StudentSerializer,
    TeacherSerializer,
)

# Create your views here.


class UserListAPIView(generics.ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        return User.objects.all()


# class UserDetailAPIView(generics.GenericAPIView):
#     serializer_class = UserSerializer

#     def get(self, request, slug):
#         query_set = User.objects.filter(slug=slug).first()
#         if query_set:
#             return response.Response(self.serializer_class(query_set).data)
#         return response.Response("Not Found", status=status.HTTP_404_NOT_FOUND)


class AdminListAPIView(generics.ListAPIView):
    serializer_class = AdminSerializer

    def get_queryset(self):
        return Admin.objects.all()


class StudentListAPIView(generics.ListAPIView):
    serializer_class = StudentSerializer

    def get_queryset(self):
        return Student.objects.all()


class TeacherListAPIView(generics.ListAPIView):
    serializer_class = TeacherSerializer

    def get_queryset(self):
        return Teacher.objects.all()
