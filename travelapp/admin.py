from django.contrib import admin

# Register your models here.
from travelapp.models import Route, Trip, TripOptionAvailable, Region, District

admin.site.register(Route)
admin.site.register(Trip)
admin.site.register(TripOptionAvailable)
admin.site.register(Region)
admin.site.register(District)
