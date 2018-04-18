import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgForm} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent }      from './principal/principal.component';
import { RegistroBoletasComponent } from './registro-boletas/registro-boletas.component';
import { FormularioComponent } from './formulario/formulario.component';


/*import { PortadaComponent }      from './portada/portada.component';*/
const routes: Routes = [
  { path: 'principal', component: PrincipalComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'registro-boletas', component: RegistroBoletasComponent},
  { path: 'formulario', component: FormularioComponent},
  /*{ path: 'portada', component: PortadaComponent}*/
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
