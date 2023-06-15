import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/interceptors/auth.guard';
import { ListRevenuComponent } from './components/list-revenu/list-revenu.component';
import { NewRevenuComponent } from './components/new-revenu/new-revenu.component';

const routes: Routes = [
  {path: '', component: ListRevenuComponent, canActivate: [AuthGuard]},
  {path: 'create',component: NewRevenuComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevenuRoutingModule {}
