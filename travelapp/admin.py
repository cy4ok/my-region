from django.contrib import admin

# Register your models here.
from travelapp.models import Route, Trip, TripOptionAvailable
from authapp.models import Instructor, Traveler

admin.site.register(Instructor)
admin.site.register(Traveler)
admin.site.register(Route)
admin.site.register(Trip)
admin.site.register(TripOptionAvailable)
