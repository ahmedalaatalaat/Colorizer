from django.urls import path
from . import views


app_name = "colorize"

urlpatterns = [
    path('', views.main, name="main"),
]
