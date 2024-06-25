import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesor } from '../models/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  url = 'http://localhost:8000/api/profesores/';

  constructor(private http: HttpClient) {}

  getProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(this.url);
  }

  eliminarProfesor(id: string): Observable<any> {
    return this.http.delete(`${this.url}${id}/`);
  }

  guardarProfesor(profesor: Profesor): Observable<any> {
    return this.http.post(this.url, profesor);
  }

  obtenerProfesor(id: string): Observable<Profesor> {
    return this.http.get<Profesor>(`${this.url}${id}/`);
  }

  actualizarProfesor(id: string, profesor: Profesor): Observable<any> {
    return this.http.put(`${this.url}${id}/`, profesor);
  }
}
