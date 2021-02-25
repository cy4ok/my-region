from django import forms

from .models import RouteType, RouteLevel, Route


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


class RouteCreateForm(forms.ModelForm):
    class Meta:
        model = Route
        fields = ['name', 'type', 'base_price', 'short_desc', 'long_desc', 'location',
                  'duration', 'length', 'complexity', 'featured_photo']


class FullRouteCreateForm(RouteCreateForm):
    photos = forms.FileField(widget=forms.ClearableFileInput(attrs={'multiple': True}))

    class Meta(RouteCreateForm.Meta):
        fields = RouteCreateForm.Meta.fields + ['photos', ]