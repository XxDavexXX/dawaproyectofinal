import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearEstudianteComponent } from './components/crear-estudiante/crear-estudiante.component';
import { ListarEstudianteComponent } from './components/listar-estudiante/listar-estudiante.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditarEstudianteComponent } from './components/editar-estudiante/editar-estudiante.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { ListarCursoComponent } from './components/listar-curso/listar-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearEstudianteComponent,
    ListarEstudianteComponent,
    EditarEstudianteComponent,
    EditarCursoComponent,
    CrearCursoComponent,
    ListarCursoComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
