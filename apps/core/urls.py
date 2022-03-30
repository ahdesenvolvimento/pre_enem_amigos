from django.urls import path
from .views import *

urlpatterns = [
    # path('', index, name='index'),
    path('turmas/', TurmaVisualizar.as_view(), name="turma_visualizar"),
    path('turmas/<int:pk>/', TurmaDetalhes.as_view(), name="turma_detalhes"),
]