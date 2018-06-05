
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  
import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { AtividadeComponent } from './atividade/atividade.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import {} from '';
import { DepartamentoComponent } from './gerenciamento/departamento/departamento.component';
import { SetorComponent } from './gerenciamento/setor/setor.component';
import { EmpresaComponent } from './gerenciamento/empresa/empresa.component';
import { ContatoComponent } from './gerenciamento/contato/contato.component';
import { ProdutoComponent } from './gerenciamento/produto/produto.component';
import { AplicativoComponent } from './gerenciamento/aplicativo/aplicativo.component';
import { ProfissionalComponent } from './gerenciamento/profissional/profissional.component';
import { UsuarioComponent } from './gerenciamento/usuario/usuario.component';
import { PermissaoComponent } from './gerenciamento/permissao/permissao.component';

let routes = [
    { path : "home", component: HomeComponent},
    { path : "projeto", component: ProjetosComponent},
    { path : "atividade", component: AtividadeComponent},
    { path : "relatorio", component: RelatoriosComponent},
    { path : "departamento", component: DepartamentoComponent},
    { path : "setor", component: SetorComponent},
    { path : "empresa", component: EmpresaComponent},
    { path : "contato", component: ContatoComponent},
    { path : "produto", component: ProdutoComponent},
    { path : "apps", component: AplicativoComponent},
    { path : "profissional", component: ProfissionalComponent},
    { path : "usuario", component: UsuarioComponent},
    { path : "permissao", component: PermissaoComponent},
    { path : "**", component: HomeComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
