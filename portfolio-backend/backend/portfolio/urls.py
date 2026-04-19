from django.urls import path
from .views import *

urlpatterns = [
    path('projects/', ProjectList.as_view()),
    path('contact/', ContactCreate.as_view()),
    path('experience/', ExperienceList.as_view()),
]