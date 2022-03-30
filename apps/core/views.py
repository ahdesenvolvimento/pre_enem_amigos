from django.http.response import JsonResponse, Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions, status
from .serializers import TurmaSerializer
from apps.core.models import Turma

# Create your views here.
# def index(request):
#     return HttpResponse('oi')

class TurmaVisualizar(APIView):
    def get(self, request, format=None):
        turmas = Turma.objects.all()
        serializer = TurmaSerializer(turmas, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request, format=None):
        serializer = TurmaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Atualizar, deletar e datalhe da cor
class TurmaDetalhes(APIView):
    def get_object(self, pk):
        try:
            return Turma.objects.get(id=pk)
        except Turma.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        turma = self.get_object(pk)
        serializer = TurmaSerializer(turma)
        return JsonResponse(serializer.data, safe=False)

    def put(self, request, pk, format=None):
        turma = self.get_object(pk)
        serializer = TurmaSerializer(turma, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_202_ACCEPTED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        turma = self.get_object(pk)
        turma.delete()
        return JsonResponse({}, status=status.HTTP_202_ACCEPTED)