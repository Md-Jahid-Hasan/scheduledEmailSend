from rest_framework import serializers
from django.contrib.auth import get_user_model as User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class UserSerializer(serializers.ModelSerializer):
    verify_password = serializers.CharField(write_only=True)

    class Meta:
        model = User()
        fields = ['email', 'password', 'verify_password', 'name']
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, attrs):
        password = attrs['password']
        verify_password = attrs['verify_password']

        if password is None or verify_password is None:
            raise serializers.ValidationError("Password Should not be empty")

        if password != verify_password:
            raise serializers.ValidationError("Password don't match")

        try:
            User().objects.get(email=attrs['email'])
            raise serializers.ValidationError("User with this email already exists")
        except:
            pass

        # if User().objects.get(email=attrs['email']):
        #     raise serializers.ValidationError("User with this email already exists")
        return attrs

    def create(self, validated_data):
        return User().objects.create_user(email=validated_data['email'], password=validated_data['password'],
                                     name=validated_data['name'])


class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = User()
        fields = ['name', 'email']


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserDetailsSerializer(self.user).data

        for k, v in serializer.items():
            data[k] = v
        # data['username'] = self.user.name
        # data['email'] = self.user.email

        return data
