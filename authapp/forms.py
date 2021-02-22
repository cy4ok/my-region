

from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.db import transaction
from django.utils.timezone import now

from authapp.models import AppUser, Traveler


class UserLoginForm(AuthenticationForm):
    class Meta:
        model = AppUser
        fields = ('username', 'password')


class TravelerSignupForm(UserCreationForm):
    about = forms.CharField(required=True)
    home_region = forms.CharField()

    class Meta(UserCreationForm.Meta):
        model = AppUser
        fields = ['username', 'email', 'first_name', 'last_name', 'date_of_birth', 'password1', 'password2', 'avatar']

    def clean_date_of_birth(self):
        dob = self.cleaned_data['date_of_birth']
        delta = now().year - dob.year - ((now().month, now().day) < (dob.month, dob.day))
        if delta < 18:
            raise forms.ValidationError("Вам должно быть более 18 лет!")

        return dob

    @transaction.atomic
    def save(self):
        user = super().save(commit=False)
        user.is_instructor = False
        user.save()
        traveler = Traveler.objects.create(user=user)
        print(self.cleaned_data)
        traveler.about = self.cleaned_data.get('about')
        traveler.home_region = self.cleaned_data.get('home_region')
        traveler.save()
        return user
