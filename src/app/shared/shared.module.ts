import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutComponent } from './layout-components/content-layout/content-layout.component';
import { FooterComponent } from './layout-components/footer/footer.component';
import { HeaderComponent } from './layout-components/header/header.component';
import { MenuComponent } from './layout-components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from '../feature/profile/components/profile/profile.component';



@NgModule({
  declarations: [
    ContentLayoutComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent
    // ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    RouterModule,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    FormsModule,
  ]
})
export class SharedModule { }
