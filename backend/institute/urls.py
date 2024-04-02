from django.urls import path
from .views import (
    UserListAPIView,
    AdminListAPIView,
    StudentListAPIView,
    TeacherListAPIView,
)


urlpatterns = [
    path("user", UserListAPIView.as_view(), name="user"),
    # path("user/<str:slug>", UserDetailAPIView.as_view(), name="user"),
    path("admin", AdminListAPIView.as_view(), name="admin"),
    path("student", StudentListAPIView.as_view(), name="student"),
    path("teacher", TeacherListAPIView.as_view(), name="teacher"),
]