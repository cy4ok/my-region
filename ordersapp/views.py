from django import forms
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import CreateView

from ordersapp.forms import OrderItemForm
from ordersapp.models import Order, OrderItem
from travelapp.models import Trip


class OrderCreate(CreateView):
    model = OrderItem
    # form_class = OrderItemForm
    success_url = reverse_lazy('travelapp:route_list')
    fields = ['trip', 'group_size', 'options_used']

    def get_initial(self):
        return {'trip': Trip.objects.get(pk=self.kwargs['pk']),}

    def get_form(self, form_class=None):
        form = super(OrderCreate, self).get_form(form_class)
        form.fields['options_used'].required = False
        return form

    def form_valid(self, form):
        form_obj = form.save(commit=False)
        user = self.request.user
        form_obj.traveler = user.traveler
        trip = form_obj.trip
        trip.subbed += form_obj.group_size
        if form_obj.trip.subbed > form_obj.trip.max_group_size:
            raise forms.ValidationError('В группе набирается слишком много людей!')

        trip.save()
        form_obj.save()

        return super(OrderCreate, self).form_valid(form)
