import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HomeComponent } from './components/home/home.component';
import { GrapheComponent } from './components/graphe/graphe.component';


@NgModule({
  declarations: [
    HomeComponent,
    GrapheComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgApexchartsModule
  ]
})
export class DashboardModule { }
