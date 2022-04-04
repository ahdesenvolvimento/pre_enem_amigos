from rest_framework import serializers

from apps.core.models import AlunoTurma
from .models import Aluno, Genero, Cor, Professor, Usuario, Disciplina, Graduacao, ProfessorDisciplina
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
        fields = ('id', 'username', 'email', )

class DisciplinaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disciplina
        fields = '__all__'

class GraduacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Graduacao
        fields = '__all__'

class ProfessorDisciplinaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfessorDisciplina
        fields = '__all__'

class AlunoSerializer(serializers.ModelSerializer):
    def validate_password(self, value):
        return make_password(value)

    class Meta:
        model = Aluno
        fields = '__all__'

class AlunoTurmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlunoTurma
        fields = '__all__'

class ProfessorSerializer(serializers.ModelSerializer):
    def validate_password(self, value):
        return make_password(value)
    class Meta:
        model = Professor
        fields = '__all__'

    