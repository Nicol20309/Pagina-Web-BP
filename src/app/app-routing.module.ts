import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


//Rutas de navegación
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}, //Para que si esta vacio me lleve de una vez a la pagina de Bienvenida
  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'agregar', component: AgregarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
