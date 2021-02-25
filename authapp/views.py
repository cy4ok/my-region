from django.contrib import auth
from django.contrib.auth import login
from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect

# Create your views here.
from django.urls import reverse, reverse_lazy
from django.views.generic import CreateView, TemplateView

from authapp.forms import SignupForm, UserLoginForm
from authapp.models import AppUser


def login_view(request):
    title = 'login'

    login_form = UserLoginForm(data=request.POST or None)

    next = request.GET['next'] if 'next' in request.GET.keys() else ''

    if request.method == 'POST' and login_form.is_valid():
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)
        if user and user.is_active:
            auth.login(request, user)
            if 'next' in request.POST.keys() and request.POST['next']:
                return HttpResponseRedirect(request.POST['next'])
            else:
                return HttpResponseRedirect(reverse_lazy('main'))

    content = {
        'title': title,
        'login_form': login_form,
        'next': next,
    }
    return render(request, 'authapp/login.html', content)


class RegisterView(TemplateView):
    template_name = 'authapp/register.html'


class TravelerSignupView(CreateView):
    model = AppUser
    form_class = SignupForm
    template_name = 'authapp/signup.html'

    def get_context_data(self, **kwargs):
        kwargs['user_type'] = 'traveler'
        return super().get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('main')


class InstructorSignupView(CreateView):
    model = AppUser
    form_class = SignupForm
    template_name = 'authapp/signup.html'

    def get_context_data(self, **kwargs):
        kwargs['user_type'] = 'instructor'
        return super().get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('main')
