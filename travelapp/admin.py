from django.contrib import admin

# Register your models here.
from travelapp.models import Route, Trip
from userapp.models import Instructor, Traveler

admin.site.register(Instructor)
admin.site.register(Traveler)
admin.site.register(Route)
admin.site.register(Trip)
