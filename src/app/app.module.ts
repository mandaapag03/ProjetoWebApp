import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/impacta.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/area_aluno/principal/principal.component';
import { MenuComponent } from './components/area_aluno/menu/menu.component';
import { MuralRecadosComponent } from './components/area_aluno/principal/mural-recados/mural-recados.component';
import { PainelAlunoComponent } from './components/area_aluno/painel-aluno/painel-aluno.component';
import { NotasFaltasComponent } from './components/notas-faltas/notas-faltas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    MenuComponent,
    MuralRecadosComponent,
    PainelAlunoComponent,
    NotasFaltasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
