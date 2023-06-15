import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './shared/layout-components/content-layout/content-layout.component';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'dashboard', component:ContentLayoutComponent, loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'revenu', component:ContentLayoutComponent, loadChildren: () => import('./feature/revenu/revenu.module').then(m => m.RevenuModule)},
  {path: 'depense', component:ContentLayoutComponent, loadChildren: () => import('./feature/depense/depense.module').then(m => m.DepenseModule)},
  {path: 'profile', component: ContentLayoutComponent, loadChildren: () => import('./feature/profile/profile.module').then(m => m.ProfileModule)},
  {path: '**', redirectTo: 'auth'},
  {path: '**', redirectTo: 'dashboard'},
  {path: '', redirectTo: 'auth', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
