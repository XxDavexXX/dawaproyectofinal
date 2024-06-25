from django.db import models

class Estudiante(models.Model):
    nombre = models.CharField(max_length=100)
    correo = models.EmailField(unique=True) 
    fecharegistro = models.DateField(default='2024-01-01')  

    def __str__(self):
        return self.nombre


class Profesor(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"

class Curso(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    profesor = models.ForeignKey(Profesor, on_delete=models.CASCADE)
    estudiantes = models.ForeignKey(Estudiante, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre
