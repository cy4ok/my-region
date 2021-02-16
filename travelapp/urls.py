import travelapp.views as travelapp
from django.urls import path

app_name = 'travelapp'

urlpatterns = [
    path('', travelapp.RouteList.as_view(), name='route_list'),
    path('instructors/', travelapp.InstructorList.as_view(), name='instructor_list'),
    # path('create/', travelapp.RouteCreate.as_view(), name='route_create'),
    # path('show/<int:pk>/', travelapp.RouteShow.as_view(), name='route_read'),
    # path('update/<int:pk>/', travelapp.RouteUpdate.as_view(), name='route_update'),
    # path('delete/<int:pk>/', travelapp.RouteDelete.as_view(), name='route_delete'),
]