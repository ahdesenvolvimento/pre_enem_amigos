from rest_framework import serializers
from .models import Genero, Cor, Professor, Usuario, Disciplina, Graduacao
from django.contrib.auth.hashers import make_password


class GeneroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genero
        fields = '__all__'

class CorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cor
        fields = '__all__'


class UsuarioSerializer(serializers.ModelSerializer):
    def validate_password(self, value):
        return make_password(value)

    class Meta:
        model = Professor
        fields = '__all__'

class UsuarioGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('username', 'email', )

class DisciplinaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disciplina
        fields = '__all__'

class GraduacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Graduacao
        fields = '__all__'