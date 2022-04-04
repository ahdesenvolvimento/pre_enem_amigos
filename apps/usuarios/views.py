from django.shortcuts import render
from django.http.response import JsonResponse, Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions, status
from .serializers import AlunoSerializer, DisciplinaSerializer, GeneroSerializer, CorSerializer, GraduacaoSerializer, ProfessorDisciplinaSerializer, ProfessorSerializer, UsuarioSerializer, UsuarioGetSerializer
from apps.usuarios.models import Aluno, Disciplina, Genero, Cor, Graduacao, Professor, ProfessorDisciplina, Usuario

# View Respons�vel por Listar todos os generos e fazer o cadastro de generos, precisa est� autenticado e ser um ADM
# Utilizar o request.user para verificar o status de adm ou usar o IsAdminUser, se for falso � para retornar um HTTP_401
class GeneroVisualizar(APIView):
    def get(self, request, format=None):
        generos = Genero.objects.all()
        serializer = GeneroSerializer(generos, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request, format=None):
        serializer = GeneroSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Atualizar, deletar e datalhe do genero
class GeneroDetalhes(APIView):
    def get_object(self, pk):
        try:
            return Genero.objects.get(id=pk)
        except Genero.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        genero = self.get_object(pk)
        serializer = GeneroSerializer(genero)
        return JsonResponse(serializer.data, safe=False)

    def put(self, request, pk, format=None):
        genero = self.get_object(pk)
        serializer = GeneroSerializer(genero, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_202_ACCEPTED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        genero = self.get_object(pk)
        genero.delete()
        return JsonResponse({}, status=status.HTTP_202_ACCEPTED)


class CorVisualizar(APIView):
    def get(self, request, format=None):
        print('to aqui')
        cores = Cor.objects.all()
        serializer = CorSerializer(cores, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request, format=None):
        serializer = CorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Atualizar, deletar e datalhe da cor
class CorDetalhes(APIView):
    def get_object(self, pk):
        try:
            return Cor.objects.get(id=pk)
        except Cor.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        cor = self.get_object(pk)
        serializer = CorSerializer(cor)
        return JsonResponse(serializer.data, safe=False)

    def put(self, request, pk, format=None):
        cor = self.get_object(pk)
        serializer = CorSerializer(cor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_202_ACCEPTED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        cor = self.get_object(pk)
        cor.delete()
        return JsonResponse({}, status=status.HTTP_202_ACCEPTED)


class UsuarioVisualizar(APIView):
    def get(self, request, format=None):
        usuarios = Usuario.objects.all()
        serializer = UsuarioGetSerializer(usuarios, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request, format=None):
        print(request.data)
        serializer = ProfessorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Atualizar, deletar e datalhe da cor
class UsuarioDetalhes(APIView):
    def get_object(self, pk):
        try:
            return Usuario.objects.get(id=pk)
        except Usuario.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        usuario = self.get_object(pk)
        serializer = UsuarioGetSerializer(usuario)
        return JsonResponse(serializer.data, safe=False)

    def put(self, request, pk, format=None):
        usuario = self.get_object(pk)
        serializer = UsuarioSerializer(usuario, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_202_ACCEPTED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        usuario = self.get_object(pk)
        usuario.delete()
        return JsonResponse({}, status=status.HTTP_202_ACCEPTED)


class DisciplinaVisualizar(APIView):
    def get(self, request, format=None):
        disciplinas = Disciplina.objects.all()
        serializer = DisciplinaSerializer(disciplinas, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request, format=None):
        serializer = DisciplinaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Atualizar, deletar e datalhe da cor
class DisciplinaDetalhes(APIView):
    def get_object(self, pk):
        try:
            return Disciplina.objects.get(id=pk)
        except Disciplina.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        disciplina = self.get_object(pk)
        serializer = DisciplinaSerializer(disciplina)
        return JsonResponse(serializer.data, safe=False)

    def put(self, request, pk, format=None):
        disciplina = self.get_object(pk)
        serializer = DisciplinaSerializer(disciplina, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_202_ACCEPTED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        disciplina = self.get_object(pk)
        disciplina.delete()
        return JsonResponse({}, status=status.HTTP_202_ACCEPTED)


class GraduacaoVisualizar(APIView):
    def get(self, request, format=None):
        graduacoes = Graduacao.objects.all()
        serializer = GraduacaoSerializer(graduacoes, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request, format=None):
        serializer = GraduacaoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Atualizar, deletar e datalhe da cor
class GraduacaoDetalhes(APIView):
    def get_object(self, pk):
        try:
            return Graduacao.objects.get(id=pk)
        except Graduacao.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        graduacao = self.get_object(pk)
        serializer = GraduacaoSerializer(graduacao)
        return JsonResponse(serializer.data, safe=False)

    def put(self, request, pk, format=None):
        graduacao = self.get_object(pk)
        serializer = GraduacaoSerializer(graduacao, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_202_ACCEPTED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        graduacao = self.get_object(pk)
        graduacao.delete()
        return JsonResponse({}, status=status.HTTP_202_ACCEPTED)

class ProfessorDisciplinaVisualizar(APIView):
    def get(self, request, format=None):
        dados = ProfessorDisciplina.objects.all()
        print(dados)
        
        serializer = ProfessorDisciplinaSerializer(dados, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request, format=None):
        print(request.data);
        for i in request.data['disciplinas']:
            prof_disc = ProfessorDisciplina.objects.create(id_professor=Professor.objects.get(id=request.data['professor']), id_disciplina=Disciplina.objects.get(id=i))
        # serializer = ProfessorDisciplinaSerializer(data=request.data)
        # if serializer.is_valid():
        #     serializer.save()
        print(ProfessorDisciplina.objects.all())
        return JsonResponse({}, status=status.HTTP_201_CREATED)
        # return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AlunosVisualizar(APIView):
    def get(self, request, format=None):
        usuarios = Aluno.objects.all()
        serializer = AlunoSerializer(usuarios, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request, format=None):
        serializer = AlunoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GetDadosNecessarios(APIView):
    def get(self, request, format=None):
        graduacoes = Graduacao.objects.all()
        generos = Genero.objects.all()
        cores = Cor.objects.all()
        serializer_graduacao = GraduacaoSerializer(graduacoes, many=True)
        serializer_generos = GeneroSerializer(generos, many=True)
        serializer_cores = CorSerializer(cores, many=True)
        print(serializer_cores)
        return JsonResponse({"cores":serializer_cores.data, "generos":serializer_generos.data, "graduacoes":serializer_graduacao.data}, status=status.HTTP_200_OK, safe=False)

class StatusUsuario(APIView):
    def get_object(self, pk):
        try:
            return Usuario.objects.get(id=pk)
        except Usuario.DoesNotExist:
            raise Http404
    def get(self, request, pk, format=None):
        usuario = self.get_object(pk)
        print(usuario.status)
        return JsonResponse({"status":usuario.status}, status=status.HTTP_202_ACCEPTED, safe=False)
