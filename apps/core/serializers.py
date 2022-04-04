from rest_framework import serializers
from apps.core.models import Aula, Turma, TurmaAula

class TurmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turma
        fields = '__all__'

class ProfessorAulaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aula
        fields = '__all__'

class TurmaAulaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TurmaAula
        fields = '__all__'