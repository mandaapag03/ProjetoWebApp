import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/area_aluno/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { NotasFaltasComponent } from './components/notas-faltas/notas-faltas.component';

const routes: Routes = [
  { path: "", redirectTo: "principal", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "principal", component: PrincipalComponent },
  { path: "notas-faltas", component: NotasFaltasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
