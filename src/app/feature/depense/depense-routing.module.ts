import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/interceptors/auth.guard';
import { ListDepenseComponent } from './components/list-depense/list-depense.component';
import { NewDepenseComponent } from './components/new-depense/new-depense.component';

const routes: Routes = [
  {path: '', component:ListDepenseComponent, canActivate: [AuthGuard]},
  {path: 'create', component: NewDepenseComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepenseRoutingModule { }
