# apis/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EstudianteViewSet, ProfesorViewSet, CursoViewSet  # Asegúrate de importar EstudianteDetailView aquí

router = DefaultRouter()
router.register(r'estudiantes', EstudianteViewSet)
router.register(r'profesores', ProfesorViewSet)
router.register(r'cursos', CursoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
