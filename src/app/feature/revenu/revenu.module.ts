import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenuRoutingModule } from './revenu-routing.module';
import { ListRevenuComponent } from './components/list-revenu/list-revenu.component';
import { NewRevenuComponent } from './components/new-revenu/new-revenu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    ListRevenuComponent,
    NewRevenuComponent
  ],
  imports: [
    CommonModule,
    RevenuRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    NgApexchartsModule

  ],
})
export class RevenuModule { }
