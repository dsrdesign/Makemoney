import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/interceptors/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { GrapheComponent } from './components/graphe/graphe.component';

const routes: Routes = [
  {path: "", component:HomeComponent, canActivate: [AuthGuard]},
  {path: "graphe", component:GrapheComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
