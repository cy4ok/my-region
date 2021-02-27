from django import forms

from .models import RouteType, RouteLevel, Route, District, Region


class RouteFilterForm(forms.Form):
    name = forms.CharField(label='Название', max_length=100, required=False)
    # todo
    district = forms.ModelChoiceField(queryset=District.objects.all(), label='Округ', required=False)
    region = forms.ModelChoiceField(queryset=Region.objects.all(), label='Регион', required=False)
    type = forms.CharField(
        label='Тип маршрута',
        widget=forms.Select(choices=[('', '---')] + [(x, x.label) for x in RouteType]),
        required=False,
    )
    level = forms.CharField(
        label='Сложность',
        widget=forms.Select(choices=[('', '---')] + [(x, x.label) for x in RouteLevel]),
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