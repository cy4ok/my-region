from django.db import models

from authapp.models import Traveler
from travelapp.models import Trip, TripOptionAvailable


class Order(models.Model):
    pass


class OrderItem(models.Model):
    traveler = models.ForeignKey(Traveler, null=False, related_name='ordered_trips', on_delete=models.CASCADE)
    trip = models.ForeignKey(Trip, verbose_name='Поход', null=False, related_name='ordered', on_delete=models.CASCADE, db_index=True)
    group_size = models.IntegerField(verbose_name='Размер вашей группы', default=1, null=False)
    options_used = models.ManyToManyField(TripOptionAvailable, verbose_name='Дополнительные опции')

    class Meta:
        unique_together = (('traveler', 'trip'),)
