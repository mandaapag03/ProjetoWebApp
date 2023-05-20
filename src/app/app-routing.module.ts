import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/area_aluno/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { NotasFaltasComponent } from './components/notas-faltas-components/notas-faltas/notas-faltas.component';
import { BoletimComponent } from './components/notas-faltas-components/boletim/boletim.component';
import { HorariosPageComponent } from './components/horarios-components/horarios-page/horarios-page.component';
import { QuadroHorariosComponent } from './components/horarios-components/quadro-horarios/quadro-horarios.component';

const routes: Routes = [
  { path: "", redirectTo: "principal", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "principal", component: PrincipalComponent },
  { path: "notas-faltas", component: NotasFaltasComponent },
  { path: "boletim", component: BoletimComponent },
  { path: "horarios", component: HorariosPageComponent },
  { path: "quadro-horarios", component: QuadroHorariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
