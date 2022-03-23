from django.db import models
from apps.usuarios.models import Professor, Aluno

class Turma(models.Model):
    id = models.AutoField(primary_key=True)
    status_turma = models.BooleanField(default=True)

    class Meta:
        db_table = 'turma'

class ProfessorTurma(models.Model):
    id = models.AutoField(primary_key=True)
    id_prof = models.ForeignKey(Professor, on_delete=models.CASCADE)
    id_turma = models.ForeignKey(Turma, on_delete=models.CASCADE)

    class Meta:
        db_table = 'professor_turma'

class AlunoTurma(models.Model):
    id = models.AutoField(primary_key=True)
    id_aluno= models.ForeignKey(Aluno, on_delete=models.CASCADE)
    id_turma = models.ForeignKey(Turma, on_delete=models.CASCADE)

    class Meta:
        db_table = 'aluno_turma'
