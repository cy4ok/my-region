from django.shortcuts import render
from django.views.generic import ListView, DetailView

from authapp.models import Instructor, Traveler


class InstructorList(ListView):
    model = Instructor


class InstructorDetail(DetailView):
    model = Instructor


class TravelerProfileView(DetailView):
    model = Traveler
    template_name = 'userapp/traveler_detail.html'


class InstructorProfileView(DetailView):
    model = Instructor
    template_name = 'userapp/instructor_detail.html'
