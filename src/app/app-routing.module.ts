
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  
import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projeto/projetos/projetos.component';
import { AtividadeComponent } from './atividades/atividade/atividade.component';
import { HorasExtrasComponent } from './horas-extras/horas-extras.component';
import { ControleAcessoComponent } from './controle-acesso/controle-acesso.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';




let routes = [
    { path : "acesso", component: ControleAcessoComponent},
    { path : "home", component: HomeComponent},
    { path : "horas-extras", component: HorasExtrasComponent},
    { path : "projeto", component: ProjetosComponent},
    { path : "atividade", component: AtividadeComponent},
    { path : "relatorio", component: RelatoriosComponent},
    { path : "**", component: HomeComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
