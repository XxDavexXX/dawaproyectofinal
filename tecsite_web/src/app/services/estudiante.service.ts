import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  url = 'http://localhost:8000/api/estudiantes/';

  constructor(private http: HttpClient) {}

  getEstudiantes(): Observable<any> {
    return this.http.get(this.url);
  }

  // eliminarEstudiante(id: string): Observable<any> {
  //   return this.http.delete(this.url + id);
  // }

  eliminarEstudiante(id: string): Observable<any> {
    return this.http.delete(`${this.url}${id}`);
  }
  
  

  guardarEstudiante(estudiante: Estudiante): Observable<any> {
    return this.http.post(this.url, estudiante);
  }

  obtenerEstudiante(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  actualizarEstudiante(id: string, estudiante: Estudiante): Observable<any> {
    return this.http.put(`${this.url}${id}/`, estudiante);
  }
  
}