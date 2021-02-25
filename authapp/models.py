from datetime import timedelta

from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.timezone import now


class AppUser(AbstractUser):
    avatar = models.ImageField(upload_to='user_pics', blank=True)
    date_of_birth = models.DateField(verbose_name='Дата рождения', default=now)
    activation_key = models.CharField(verbose_name='Ключ активации', max_length=128, blank=True)
    activation_key_expiry = models.DateTimeField(
        verbose_name='Крайний срок текущей активации',
        default=(now() + timedelta(hours=24))
    )
    email = models.EmailField(verbose_name='Адрес Email', unique=True)
    is_instructor = models.BooleanField(default=False, null=False, db_index=True)
    is_traveler = models.BooleanField(default=False, null=False, db_index=True)
    # phone_number

    def is_key_expired(self):
        if now() <= self.activation_key_expiry:
            return False
        else:
            return True


class Traveler(models.Model):
    user = models.OneToOneField(AppUser, unique=True, db_index=True, null=False, on_delete=models.CASCADE)
    about = models.TextField(verbose_name='О себе', blank=True)
    home_region = models.CharField(verbose_name='Место проживания', max_length=100)
    following = models.ManyToManyField('Instructor', verbose_name='Подписки', blank=True, related_name='followers')
    trips_completed = models.ManyToManyField('travelapp.Trip', verbose_name='Походы', related_name='participants')

    def __str__(self):
        return f'{self.user.get_full_name()} ({self.home_region})'


class Instructor(models.Model):
    user = models.OneToOneField(AppUser, unique=True, db_index=True, null=True, on_delete=models.CASCADE)
    about = models.TextField(verbose_name='О себе', blank=True)
    home_region = models.CharField(verbose_name='Место проживания', max_length=100, blank=True)
    routes_run = models.IntegerField(verbose_name='Пройдено маршрутов', default=0)
    is_active = models.BooleanField(verbose_name='Инструктор доступен для маршрута', default=True)
    # subscribers = models.ManyToManyField(Traveler, verbose_name='Подписчики', blank=True, related_name='subscribed_to')

    def __str__(self):
        return f'{self.user.get_full_name()} ({self.home_region})'
