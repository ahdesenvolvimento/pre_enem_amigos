from django.urls import path
from .views import *

urlpatterns = [
    # path('', index, name='index'),
    path('turmas/', TurmaVisualizar.as_view(), name="turma_visualizar"),
    path('turmas/<int:pk>/', TurmaDetalhes.as_view(), name="turma_detalhes"),
    path('professor_aula/', ProfessorAulaVisualizar.as_view(), name="professor_aula_visualizar"),
    path('aula_turma/', TurmaAulaVisualizar.as_view(), name="turma_aula_visualizar"),
    path('aluno_turma/', AlunoTurmaVisualizar.as_view(), name="aluno_turma_visualizar"),
]