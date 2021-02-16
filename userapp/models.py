from django.db import models


class Traveler(models.Model):
    name = models.CharField(verbose_name='ФИО пользователя', max_length=200)
    about = models.TextField(verbose_name='О себе', blank=True)
    home_region = models.CharField(verbose_name='Место проживания', max_length=100)
    following = models.ManyToManyField('Instructor', verbose_name='Подписки', blank=True, related_name='followers')
    trips_completed = models.ManyToManyField('travelapp.Trip', verbose_name='Походы', related_name='participants')

    def __str__(self):
        return f'{self.name} ({self.home_region})'


class Instructor(models.Model):
    name = models.CharField(verbose_name='ФИО инструктора', max_length=200)
    about = models.TextField(verbose_name='О себе', blank=True)
    home_region = models.CharField(verbose_name='Место проживания', max_length=100, blank=True)
    routes_run = models.IntegerField(verbose_name='Пройдено маршрутов', default=0)
    is_active = models.BooleanField(verbose_name='Инструктор доступен для маршрута', default=True)
    # subscribers = models.ManyToManyField(Traveler, verbose_name='Подписчики', blank=True, related_name='subscribed_to')

    def __str__(self):
        return f'{self.name} ({self.home_region})'
