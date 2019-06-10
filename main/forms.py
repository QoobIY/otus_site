from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class SignUpForm(UserCreationForm):
    username = forms.CharField(label="Логин", max_length=30, help_text='Разрешённые символы: буквы цифры и @/./+/-/_')
    first_name = forms.CharField(label="Имя", max_length=30, help_text='')
    last_name = forms.CharField(label="Фамилия", required=False, max_length=30, help_text='')
    email = forms.EmailField(label="Почта", max_length=254, help_text='')
    password1 = forms.CharField(label="Пароль", help_text='', widget=forms.PasswordInput)
    password2 = forms.CharField(label="Подтверждение пароля", help_text='Подтвердите пароль', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password1', 'password2', )
