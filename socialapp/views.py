from django.db import transaction
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, DetailView

from socialapp.forms import FullTripCommentCreateForm
from socialapp.models import TripComment, CommentPhoto
from travelapp.models import Trip


# todo check for user participation
class TripCommentCreate(CreateView):
    model = TripComment
    form_class = FullTripCommentCreateForm
    success_url = reverse_lazy('travelapp:route_list')

    def get_context_data(self, **kwargs):
        data = super().get_context_data(**kwargs)
        data['title'] = 'Создать комментарий к походу'

        return data

    def get_initial(self):
        return {
            'trip': Trip.objects.select_related().get(pk=self.kwargs['pk']),
        }

    def get_form(self, form_class=None):
        form = super(TripCommentCreate, self).get_form(form_class)
        form.fields['trip'].disabled = True
        form.fields['photos'].required = False
        return form

    def form_valid(self, form):
        files = self.request.FILES.getlist('photos')
        form.instance.author = self.request.user
        form.cleaned_data.pop('photos')
        with transaction.atomic():
            result = super(TripCommentCreate, self).form_valid(form)
            for photo in files:
                CommentPhoto.objects.create(image=photo, comment=form.instance)

        return result
