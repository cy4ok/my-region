from django import forms

from .models import RouteType, RouteLevel


class RouteFilterForm(forms.Form):
    name = forms.CharField(max_length=100, required=False)
    region = forms.CharField(max_length=100, required=False)
    type = forms.CharField(
        label='Тип маршрута',
        widget=forms.Select(choices=[('', '---')] + [(x, x) for x in RouteType]),
        required=False,
    )
    level = forms.CharField(
        label='Route level',
        widget=forms.Select(choices=[('', '---')] + [(x, x) for x in RouteLevel]),
        required=False,
    )
