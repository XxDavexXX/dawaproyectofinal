from rest_framework import serializers
from .models import Estudiante, Profesor, Curso

class EstudianteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estudiante
        fields = '__all__'


class ProfesorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profesor
        fields = '__all__'

class CursoSerializer(serializers.ModelSerializer):
    profesor = serializers.PrimaryKeyRelatedField(queryset=Profesor.objects.all())
    estudiantes = serializers.PrimaryKeyRelatedField( queryset=Estudiante.objects.all())

    class Meta:
        model = Curso
        fields = '__all__'
