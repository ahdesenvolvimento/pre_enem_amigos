from django.urls import path
from . views import *

urlpatterns = [
    path('', UsuarioVisualizar.as_view(), name='usuario_visualizer'),
    path('<int:pk>/', UsuarioDetalhes.as_view(), name='usuario_detalhes'),
    path('cor/', CorVisualizar.as_view(), name='cor_visualizar'),
    path('cor/<int:pk>/', CorDetalhes.as_view(), name='cor_detalhes'),
    path('genero/', GeneroVisualizar.as_view(), name='genero_visualizar'),
    path('genero/<int:pk>/', GeneroDetalhes.as_view(), name='genero_detalhes'),
    path('disciplinas/', DisciplinaVisualizar.as_view(), name='disciplinas_visualizar'),
    path('disciplinas/<int:pk>', DisciplinaDetalhes.as_view(), name='disciplina_detalhes'),
    path('graduacoes/', GraduacaoVisualizar.as_view(), name='graduacoes_visual'),
    path('graduacoes/<int:pk>', GraduacaoDetalhes.as_view(), name='graduacoes_detalhes'),
    path('professor_disciplina/', ProfessorDisciplinaVisualizar.as_view(), name="professor_disciplina_visualizar"),
    path('alunos/', AlunosVisualizar.as_view(), name="alunos_visualizar"),
    path('dados_cadastro/', GetDadosNecessarios.as_view(), name="dados_para_cadastro"),
    path('status/<int:pk>', StatusUsuario.as_view(), name="status_usuario"),

]