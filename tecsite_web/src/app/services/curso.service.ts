import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  url = 'http://localhost:8000/api/cursos/';

  constructor(private http: HttpClient) {}

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.url);
  }

  eliminarCurso(id: string): Observable<any> {
    return this.http.delete(`${this.url}${id}`);
  }

  guardarCurso(curso: Curso): Observable<any> {
    const data = {
      nombre: curso.nombre,
      descripcion: curso.descripcion,
      profesor: curso.profesor.id,
      estudiantes: curso.estudiantes.id
    };
    return this.http.post(this.url, data);
  }

  obtenerCurso(id: string): Observable<Curso> {
    return this.http.get<Curso>(`${this.url}${id}/`);
  }

  actualizarCurso(id: string, curso: Curso): Observable<any> {
    const data = {
      nombre: curso.nombre,
      descripcion: curso.descripcion,
      profesor: curso.profesor.id,
      estudiantes: curso.estudiantes.id
    };
    return this.http.put(`${this.url}${id}/`, data);
  }
}
