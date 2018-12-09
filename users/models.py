from django.db import models
from django.contrib.auth.models import AbstractUser

#  models here.
class CustomUser(AbstractUser):
    age = models.PositiveIntegerField()
