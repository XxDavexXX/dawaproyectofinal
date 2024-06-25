import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEstudianteComponent } from './components/listar-estudiante/listar-estudiante.component';
import { CrearEstudianteComponent } from './components/crear-estudiante/crear-estudiante.component';
import { EditarEstudianteComponent } from './components/editar-estudiante/editar-estudiante.component';

import { ListarCursoComponent } from './components/listar-curso/listar-curso.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';

const routes: Routes = [
    { path: '', component: ListarEstudianteComponent },
    { path: 'listar-cursos', component: ListarCursoComponent },
    { path: 'crear-curso', component: CrearCursoComponent },
    { path: 'editar-curso/:id', component: EditarCursoComponent },
    { path: 'crear-estudiante', component: CrearEstudianteComponent },
    { path: 'editar-estudiante/:id', component: EditarEstudianteComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
