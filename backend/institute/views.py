import json
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import generics, response, status
from .utils import send_sms
from rest_framework.views import APIView

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

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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


class StudentListAPIView(
    generics.ListCreateAPIView
):  # Changed to ListCreateAPIView for POST method
    serializer_class = StudentSerializer

    def get_queryset(self):
        return Student.objects.all()


class TeacherListAPIView(generics.ListAPIView):
    serializer_class = TeacherSerializer

    def get_queryset(self):
        return Teacher.objects.all()


def authenticate_user(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get("username", "")
        password = data.get("password", "")

        # Fetch student from the database based on the username
        try:
            student = Student.objects.get(erpid=username)
        except Student.DoesNotExist:
            return JsonResponse({"error": "Invalid username"}, status=400)

        # Check if the password matches
        if student.password == password:
            return JsonResponse({"username": username}, status=200)
        else:
            return JsonResponse({"error": "Invalid password"}, status=400)


class SendSMSView(APIView):
    def post(self, request):
        to = request.data.get("to")
        body = request.data.get("body")
        send_sms(to, body)
        return response.Response({"message": "SMS sent successfully"})
