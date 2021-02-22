from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView

from travelapp.models import Route, Instructor, Trip
from .forms import RouteFilterForm


class RouteList(ListView):
    model = Route

    def get_context_data(self, **kwargs):
        data = super(RouteList, self).get_context_data(**kwargs)
        form = RouteFilterForm()
        data['form'] = form

        return data

    def get_queryset(self):
        if self.request.GET.items():
            form = RouteFilterForm(self.request.GET)
            if form.is_valid():
                return Route.objects.search(**form.cleaned_data)
        return Route.objects.filter(is_active=True)


class RouteDetail(DetailView):
    model = Route


class RouteCreate(CreateView):
    model = Route
    fields = []
    success_url = reverse_lazy('travelapp:route_list')


class TripDetail(DetailView):
    model = Trip
