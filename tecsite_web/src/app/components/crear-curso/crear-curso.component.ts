import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/curso';
import { Profesor } from '../../models/profesor';
import { Estudiante } from '../../models/estudiante';
import { CursoService } from '../../services/curso.service';
import { ProfesorService } from '../../services/profesor.service';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {
  nuevoCurso: Curso = new Curso(0, '', '', new Profesor(), new Estudiante());
  listaProfesores: Profesor[] = [];
  listaEstudiantes: Estudiante[] = [];

  constructor(private cursoService: CursoService, private profesorService: ProfesorService, private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.obtenerProfesores();
    this.obtenerEstudiantes();
  }

  obtenerProfesores() {
    this.profesorService.getProfesores().subscribe(
      (data: Profesor[]) => {
        this.listaProfesores = data;
      },
      error => {
        console.log('Error al obtener profesores:', error);
      }
    );
  }

  obtenerEstudiantes() {
    this.estudianteService.getEstudiantes().subscribe(
      (data: Estudiante[]) => {
        this.listaEstudiantes = data;
      },
      error => {
        console.log('Error al obtener estudiantes:', error);
      }
    );
  }

  guardarCurso() {
    const profesorSeleccionado = this.listaProfesores.find(profesor => profesor.id === this.nuevoCurso.profesor.id);
    const estudianteSeleccionado = this.listaEstudiantes.find(estudiante => estudiante.id === this.nuevoCurso.estudiantes.id);
  
    if (profesorSeleccionado && estudianteSeleccionado) {
      this.nuevoCurso.profesor = profesorSeleccionado;
      this.nuevoCurso.estudiantes = estudianteSeleccionado;
  
      this.cursoService.guardarCurso(this.nuevoCurso).subscribe(
        () => {
          console.log('Curso creado correctamente.');
          // Puedes redirigir a la lista de cursos o realizar otras acciones después de guardar
        },
        error => {
          console.error('Error al crear curso:', error);
          // Puedes mostrar un mensaje de error al usuario si es necesario
        }
      );
    } else {
      console.error('Selecciona un profesor y un estudiante.');
    }
  }
  
}
