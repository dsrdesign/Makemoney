import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { HomeComponent } from './home/home.component';
import { ListDepenseComponent } from './list-depense/list-depense.component';
import { ListRevenuComponent } from './list-revenu/list-revenu.component';
import { LoginComponent } from './login/login.component';
import { NewDepenseComponent } from './new-depense/new-depense.component';
import { NewRevenuComponent } from './new-revenu/new-revenu.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path:"revenu", component: NewRevenuComponent},
  {path:"depense", component: NewDepenseComponent},
  {path:"listRevenu", component: ListRevenuComponent},
  {path:"listDepense", component: ListDepenseComponent},
  {path:"login", component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
