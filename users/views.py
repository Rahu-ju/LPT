from django.shortcuts import render
from django.views.generic import CreateView, UpdateView
from django.urls import reverse_lazy
from django.contrib.auth import authenticate, login
from django.contrib.auth.mixins import LoginRequiredMixin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser

# Create your views here.
class SignUp(CreateView):
    template_name = 'users/signup.html'
    form_class = CustomUserCreationForm
    success_url = '/'

    #authenticate user after successful registration
    def form_valid(self, form):
        valid = super(SignUp, self).form_valid(form)
        username, password = form.cleaned_data.get('username'), form.cleaned_data.get('password1')
        new_user = authenticate(username=username, password=password)
        login(self.request, new_user)
        return valid

class UserInfoChange(LoginRequiredMixin, UpdateView):
    login_url = '/users/login/'
    template_name = 'users/settings.html'
    form_class = CustomUserChangeForm

    success_url = reverse_lazy('learning_path_tracker:home')

    def get_object(self, queryset=None):
        return self.request.user
