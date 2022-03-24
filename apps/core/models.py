from django.db import models
from apps.usuarios.models import Aluno, ProfessorDisciplina

class Base(models.Model):
    id = models.AutoField(primary_key=True)
    criado = models.DateTimeField(auto_now_add=True)
    class Meta:
        abstract = True
        db_table = 'base'

class Turma(Base):
    status_turma = models.BooleanField(default=True)
    vagas_turma = models.IntegerField(default=40)

    class Meta:
        db_table = 'turma'

class Aula(Base):
    data_inicio = models.DateField('Data de início da aula')
    data_fim = models.DateField('Data de término da aula')
    horario_inicio = models.TimeField('Horario de início da aula')
    horario_fim = models.TimeField('Horario de término da aula')

    id_disc_prof = models.ForeignKey(ProfessorDisciplina, on_delete=models.CASCADE)
    horario_ativo = models.BooleanField(default=False)

    class Meta:
        db_table = 'aula'


class TurmaAula(Base):
    id_aula = models.ForeignKey(Aula, on_delete=models.CASCADE)
    id_turma = models.ForeignKey(Turma, on_delete=models.CASCADE)

    class Meta:
        db_table = 'aula_turma'
        

class AlunoTurma(Base):
    id_aluno= models.ForeignKey(Aluno, on_delete=models.CASCADE)
    id_turma = models.ForeignKey(Turma, on_delete=models.CASCADE)

    class Meta:
        db_table = 'aluno_turma'
