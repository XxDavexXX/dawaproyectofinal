import { Estudiante } from './estudiante';
import { Profesor } from './profesor';

export class Curso {
  id?: number | null;
  nombre: string;
  descripcion: string;
  profesor: Profesor;
  estudiantes: Estudiante; 

  constructor(id: number | null, nombre: string, descripcion: string, profesor: Profesor, estudiantes: Estudiante) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.profesor = profesor;
    this.estudiantes = estudiantes;
  }
}
