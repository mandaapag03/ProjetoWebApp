import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/impacta.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/area_aluno/principal/principal.component';
import { MenuComponent } from './components/area_aluno/menu/menu.component';
import { MuralRecadosComponent } from './components/area_aluno/principal/mural-recados/mural-recados.component';
import { PainelAlunoComponent } from './components/area_aluno/painel-aluno/painel-aluno.component';
import { NotasFaltasComponent } from './components/notas-faltas-components/notas-faltas/notas-faltas.component';
import { BoletimComponent } from './components/notas-faltas-components/boletim/boletim.component';
import { BoletimDisciplinasComponent } from './components/notas-faltas-components/boletim-disciplinas/boletim-disciplinas.component';
import { ExplicacaoNotaComponent } from './components/notas-faltas-components/explicacao-nota/explicacao-nota.component';
import { HorariosPageComponent } from './components/horarios-components/horarios-page/horarios-page.component';
import { HorariosSemestreTableComponent } from './components/horarios-components/horarios-semestre-table/horarios-semestre-table.component';
import { QuadroHorariosComponent } from './components/horarios-components/quadro-horarios/quadro-horarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    MenuComponent,
    MuralRecadosComponent,
    PainelAlunoComponent,
    NotasFaltasComponent,
    BoletimComponent,
    BoletimDisciplinasComponent,
    ExplicacaoNotaComponent,
    HorariosPageComponent,
    HorariosSemestreTableComponent,
    QuadroHorariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
