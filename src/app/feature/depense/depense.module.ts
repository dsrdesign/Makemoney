import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepenseRoutingModule } from './depense-routing.module';
import { ListDepenseComponent } from './components/list-depense/list-depense.component';
import { NewDepenseComponent } from './components/new-depense/new-depense.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    ListDepenseComponent,
    NewDepenseComponent
  ],
  imports: [
    CommonModule,
    DepenseRoutingModule,
    SharedModule,
    NgApexchartsModule
  ]
})
export class DepenseModule { }
