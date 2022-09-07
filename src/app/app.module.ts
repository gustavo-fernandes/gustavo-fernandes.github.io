import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { DisciplinasComponent } from './pages/disciplinas/disciplinas.component';
import { PlanoEstudosComponent } from './pages/plano-estudos/plano-estudos.component';
import { AlunosComponent } from './pages/alunos/alunos.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EditarComponent } from './pages/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CursosComponent,
    DisciplinasComponent,
    PlanoEstudosComponent,
    AlunosComponent,
    CadastroComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
