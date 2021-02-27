from django import forms

from .models import RouteType, RouteLevel, Route, District, Region


class RouteFilterForm(forms.Form):
    # name = forms.CharField(label='Название', max_length=100, required=False)
    # todo
    district = forms.ModelChoiceField(queryset=District.objects.all(),
                                      label='Округ',
                                      required=False,
                                      empty_label='Округ'
                                      )
    region = forms.ModelChoiceField(queryset=Region.objects.all(),
                                    label='Регион',
                                    empty_label='Регион',
                                    required=False)
    type = forms.ChoiceField(
        label='Тип маршрута',
        choices=[('', 'Тип маршрута')] + [(x, x.label) for x in RouteType],
        required=False,
    )
    level = forms.ChoiceField(
        label='Сложность',
        choices=[('', 'Сложность')] + [(x, x.label) for x in RouteLevel],
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