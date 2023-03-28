import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NewRevenuComponent } from './new-revenu/new-revenu.component';
import { NewDepenseComponent } from './new-depense/new-depense.component';
import { ListRevenuComponent } from './list-revenu/list-revenu.component';
import { ListDepenseComponent } from './list-depense/list-depense.component';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from './chart/chart.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NewRevenuComponent,
    NewDepenseComponent,
    ListRevenuComponent,
    ListDepenseComponent,
    ChartComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
