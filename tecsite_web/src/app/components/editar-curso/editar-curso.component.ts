import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../../models/curso';
import { Profesor } from '../../models/profesor';
import { Estudiante } from '../../models/estudiante';
import { CursoService } from '../../services/curso.service';
import { ProfesorService } from '../../services/profesor.service';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {
  curso: Curso = new Curso(0, '', '', new Profesor(), new Estudiante());
  listaProfesores: Profesor[] = [];
  listaEstudiantes: Estudiante[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursoService,
    private profesorService: ProfesorService,
    private estudianteService: EstudianteService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.obtenerCurso(id);
    }
    this.obtenerProfesores();
    this.obtenerEstudiantes();
  }

  obtenerCurso(id: string) {
    this.cursoService.obtenerCurso(id).subscribe(
      (data: Curso) => {
        this.curso = data;
      },
      error => {
        console.error('Error al obtener el curso:', error);
      }
    );
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

  actualizarCurso() {
    // Asignar valores por defecto si no se selecciona ninguno
    if (!this.curso.profesor || !this.curso.profesor.id) {
      this.curso.profesor = { id: 1, nombre: 'Dave', apellido: 'Santivanez', email: 'dave.santivanez@gmail.com' };
    }

    if (!this.curso.estudiantes || !this.curso.estudiantes.id) {
      this.curso.estudiantes = { id: 1, nombre: 'Richard', correo: 'richard.loks@gmail.com', fecharegistro: new Date('2024-01-01') };
    }

    if (this.curso.id !== null && this.curso.id !== undefined) {
      this.cursoService.actualizarCurso(this.curso.id.toString(), this.curso).subscribe(
        () => {
          console.log('Curso actualizado correctamente.');
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error al actualizar curso:', error);
        }
      );
    } else {
      console.error('ID del curso es inválido.');
    }
  }
}
