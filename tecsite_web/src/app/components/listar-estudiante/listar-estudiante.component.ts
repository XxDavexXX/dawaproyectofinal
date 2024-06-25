import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../services/estudiante.service';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-listar-estudiante',
  templateUrl: './listar-estudiante.component.html',
  styleUrls: ['./listar-estudiante.component.css']
})
export class ListarEstudianteComponent implements OnInit {
  listEstudiantes: Estudiante[] = [];

  constructor(private _estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.obtenerEstudiantes();
  }

  obtenerEstudiantes() {
    this._estudianteService.getEstudiantes().subscribe(
      data => {
        console.log(data);
        this.listEstudiantes = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  eliminarEstudiante(id: any) {
    if (!id) {
      console.error('ID de estudiante no válido:', id);
      return;
    }
  
    this._estudianteService.eliminarEstudiante(id).subscribe(
      () => {
        console.log(`Estudiante con ID ${id} eliminado correctamente.`);
        this.obtenerEstudiantes(); // Actualizar la lista después de eliminar
      },
      error => {
        console.error('Error al eliminar estudiante:', error);
        // Aquí puedes mostrar un mensaje de error al usuario si es necesario
      }
    );
  }
  
  
}