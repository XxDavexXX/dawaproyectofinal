import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/curso';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
  styleUrls: ['./listar-curso.component.css']
})
export class ListarCursoComponent implements OnInit {
  listCursos: Curso[] = [];

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.obtenerCursos();
  }

  obtenerCursos() {
    this.cursoService.getCursos().subscribe(
      (data: Curso[]) => {
        this.listCursos = data;
        console.log('Cursos obtenidos:', this.listCursos); // <-- Loguear los cursos obtenidos
      },
      error => {
        console.log('Error al obtener cursos:', error);
      }
    );
  }

  eliminarCurso(id: any) {
    this.cursoService.eliminarCurso(id).subscribe(
      () => {
        this.obtenerCursos();
      },
      error => {
        console.error('Error al eliminar curso:', error);
      }
    );
  }
}
