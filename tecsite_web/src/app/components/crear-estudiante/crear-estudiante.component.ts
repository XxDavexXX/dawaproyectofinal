import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudianteService } from '../../services/estudiante.service';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})
export class CrearEstudianteComponent {
  estudianteForm: FormGroup;
  titulo = 'Crear estudiante';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private estudianteService: EstudianteService
  ) {
    this.estudianteForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      fecharegistro: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  agregarEstudiante() {
    const ESTUDIANTE: Estudiante = {
      id: 0, // Valor predeterminado para id
      nombre: this.estudianteForm.get('nombre')?.value,
      correo: this.estudianteForm.get('correo')?.value,
      fecharegistro: this.estudianteForm.get('fecharegistro')?.value,
    }
    
    this.estudianteService.guardarEstudiante(ESTUDIANTE).subscribe(
      data => {
        console.log('Estudiante creado:', data);
        this.router.navigate(['/']);
      },
      error => {
        console.log('Error:', error);
      }
    );
  }
}
