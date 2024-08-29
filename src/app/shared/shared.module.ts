import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SelectComponent } from './components/select/select.component';


@NgModule({
  declarations: [
    NavbarComponent,
    PaginationComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    NavbarComponent,
    PaginationComponent,
    SelectComponent
  ]
})
export class SharedModule { }
