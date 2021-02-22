import userapp.views as userapp
from django.urls import path

app_name = 'userapp'

urlpatterns = [
    path('instructors/', userapp.InstructorList.as_view(), name='instructor_list'),
    # path('create/', userapp..as_view(), name='user_create'),
    path('profile_traveler/<int:pk>/', userapp.TravelerProfileView.as_view(), name='profile_page')
]