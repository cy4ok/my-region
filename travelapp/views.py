from django.db import transaction
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse_lazy, reverse
from django.views.generic import ListView, DetailView, CreateView

from travelapp.models import Route, Instructor, Trip, RoutePhoto
from .forms import RouteFilterForm, FullRouteCreateForm


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
        return Route.objects.filter(is_usable=True)


class RouteDetail(DetailView):
    model = Route


class RouteCreateView(CreateView):
    model = Route
    form_class = FullRouteCreateForm
    success_url = reverse_lazy('travelapp:route_list')

    def form_valid(self, form):
        files = self.request.FILES.getlist('photos')
        form.instance.instructor = self.request.user.instructor
        form.cleaned_data.pop('photos')
        with transaction.atomic():
            result = super(RouteCreateView, self).form_valid(form)
            for photo in files:
                RoutePhoto.objects.create(image=photo, route=form.instance)

        return result


class TripDetail(DetailView):
    model = Trip
