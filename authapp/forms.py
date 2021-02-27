

from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.db import transaction
from django.utils.timezone import now

from authapp.models import AppUser, Traveler, Instructor


class UserLoginForm(AuthenticationForm):
    class Meta:
        model = AppUser
        fields = ('username', 'password')


class SignupForm(UserCreationForm):
    about = forms.CharField(required=True)
    home_region = forms.CharField()

    class Meta(UserCreationForm.Meta):
        model = AppUser
        fields = ['username', 'email', 'phone', 'first_name', 'last_name', 'gender', 'date_of_birth', 'password1', 'password2', 'avatar']

    def clean_date_of_birth(self):
        dob = self.cleaned_data['date_of_birth']
        delta = now().year - dob.year - ((now().month, now().day) < (dob.month, dob.day))
        if delta < 18:
            raise forms.ValidationError("Вам должно быть более 18 лет!")

        return dob

    @transaction.atomic
    def save(self):
        user = super().save(commit=False)
        user_type = self.data.get('user_type', None)
        if user_type == 'traveler':
            user.is_traveler = True
            profile_maker = Traveler
        elif user_type == 'instructor':
            user.is_instructor = True
            profile_maker = Instructor

        user.save()
        profile = profile_maker.objects.create(user=user)

        # print(self.cleaned_data)
        profile.about = self.cleaned_data.get('about')
        profile.home_region = self.cleaned_data.get('home_region')
        profile.save()
        return user
