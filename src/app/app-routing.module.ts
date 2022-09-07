import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './pages/alunos/alunos.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { EditarComponent } from './pages/editar/editar.component';
import { PlanoEstudosComponent } from './pages/plano-estudos/plano-estudos.component';

const routes: Routes = [
  { path: '', redirectTo: 'cursos', pathMatch: 'full' },
  {
    path: '',
    component: CursosComponent
  },
  { path: 'curso', component: PlanoEstudosComponent },
  { path: 'alunos', component: AlunosComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'editar', component: EditarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
