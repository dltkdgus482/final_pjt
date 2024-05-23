from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from dj_rest_auth.serializers import UserDetailsSerializer
from allauth.account.adapter import get_adapter
from django.contrib.auth import get_user_model

User = get_user_model()

class CustomRegisterSerializer(RegisterSerializer):
    nickname = serializers.CharField(max_length=50)
    age = serializers.IntegerField(required=False, allow_null=True)
    gender = serializers.CharField(max_length=10, required=False, allow_null=True)
    salary = serializers.IntegerField(required=False, allow_null=True)
    financial_products = serializers.CharField(required=False, allow_blank=True)

    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'email': self.validated_data.get('email', ''),
            'nickname': self.validated_data.get('nickname', ''),
            'age': self.validated_data.get('age', None),
            'gender': self.validated_data.get('gender', ''),
            'salary': self.validated_data.get('salary', None),
            'financial_products': self.validated_data.get('financial_products', ''),
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        user.nickname = self.cleaned_data.get('nickname')
        user.age = self.cleaned_data.get('age')
        user.gender = self.cleaned_data.get('gender')
        user.salary = self.cleaned_data.get('salary')
        user.financial_products = self.cleaned_data.get('financial_products')
        adapter.save_user(request, user, self)
        self.custom_signup(request, user)
        return user
    
class CustomUserDetailsSerializer(UserDetailsSerializer):
    class Meta:
        extra_fields = []

        if hasattr(User, 'USERNAME_FIELD'):
            extra_fields.append(User.USERNAME_FIELD)
        if hasattr(User, 'EMAIL_FIELD'):
            extra_fields.append(User.EMAIL_FIELD)
        if hasattr(User, 'first_name'):
            extra_fields.append('first_name')
        if hasattr(User, 'last_name'):
            extra_fields.append('last_name')
        if hasattr(User, 'nickname'):
            extra_fields.append('nickname')
        if hasattr(User, 'age'):
            extra_fields.append('age')
        if hasattr(User, 'gender'):
            extra_fields.append('gender')
        if hasattr(User, 'salary'):
            extra_fields.append('salary')
        if hasattr(User, 'financial_products'):
            extra_fields.append('financial_products')
        model = User
        fields = ('pk', *extra_fields)
        read_only_fields = ('email',)