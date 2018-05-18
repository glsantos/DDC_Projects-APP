
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  
import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';

let routes = [
    { path : "home", component: HomeComponent},
    { path : "projeto", component: ProjetosComponent},
    { path : "**", component: HomeComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
