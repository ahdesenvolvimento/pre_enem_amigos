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

]