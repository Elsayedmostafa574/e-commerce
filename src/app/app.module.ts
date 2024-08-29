import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
import { RouterModule } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CartsModule,
    HttpClientModule,
    FormsModule,
    ProductsModule,
    CartsModule,
    RouterModule,
    SweetAlert2Module
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
