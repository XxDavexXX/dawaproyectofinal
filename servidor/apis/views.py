from .models import Estudiante, Profesor, Curso
from .serializers import EstudianteSerializer, ProfesorSerializer, CursoSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, viewsets

class EstudianteViewSet(viewsets.ModelViewSet):
    queryset = Estudiante.objects.all()
    serializer_class = EstudianteSerializer

class ProfesorViewSet(viewsets.ModelViewSet):
    queryset = Profesor.objects.all()
    serializer_class = ProfesorSerializer

class CursoViewSet(viewsets.ModelViewSet):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer
