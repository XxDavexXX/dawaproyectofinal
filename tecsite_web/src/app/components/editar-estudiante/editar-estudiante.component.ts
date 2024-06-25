import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from '../../models/estudiante';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css']
})
export class EditarEstudianteComponent implements OnInit {
  estudiante: Estudiante = { id: 0, nombre: '', correo: '', fecharegistro: new Date() }; // Incluye id con valor predeterminado
  id: string = '';

  constructor(
    private estudianteService: EstudianteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.obtenerEstudiante();
  }

  obtenerEstudiante() {
    this.estudianteService.obtenerEstudiante(this.id).subscribe(
      (data: Estudiante) => {
        this.estudiante = data;
      },
      error => {
        console.error('Error al obtener estudiante:', error);
      }
    );
  }

  actualizarEstudiante() {
    this.estudianteService.actualizarEstudiante(this.id, this.estudiante).subscribe(
      () => {
        console.log(`Estudiante con ID ${this.id} actualizado correctamente.`);
        this.router.navigate(['/']);
      },
      error => {
        console.error('Error al actualizar estudiante:', error);
      }
    );
  }
}
