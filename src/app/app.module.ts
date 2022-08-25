import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AgregarComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
