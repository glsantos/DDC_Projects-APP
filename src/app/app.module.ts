import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BrMasker4Module } from 'brmasker4';

import { MenuNavegacaoComponent } from './menu-navegacao/menu-navegacao.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { UsuarioComponent } from './gerenciamento/usuario/usuario.component';
import { PerfilUsuarioComponent } from './gerenciamento/usuario/perfil-usuario/perfil-usuario.component';
import { ContatoComponent } from './gerenciamento/contato/contato.component';
import { ProdutoComponent } from './gerenciamento/produto/produto.component';
import { SetorComponent } from './gerenciamento/setor/setor.component';
import { FuncaoComponent } from './gerenciamento/funcao/funcao.component';
import { ProfissionalComponent } from './gerenciamento/profissional/profissional.component';
import { EmpresaComponent } from './gerenciamento/empresa/empresa.component';
import { DepartamentoComponent } from './gerenciamento/departamento/departamento.component';
import {CadastroProjetoComponent} from './projetos/cadastro-projeto/cadastro-projeto.component';
import { CadastroProdutoProjetoComponent } from './projetos/cadastro-produto-projeto/cadastro-produto-projeto.component';
import { CadastroRequisitosProjetoComponent } from './projetos/cadastro-requisitos-projeto/cadastro-requisitos-projeto.component';
import { CadastroResumoProjetoComponent } from './projetos/cadastro-resumo-projeto/cadastro-resumo-projeto.component';
import { CadastroAtividadeComponent } from './atividade/cadastro-atividade/cadastro-atividade.component';
import { HistoricoAtividadeComponent } from './atividade/historico-atividade/historico-atividade.component';
import { AtividadeComponent } from './atividade/atividade.component';
import { AplicativoComponent } from './gerenciamento/aplicativo/aplicativo.component';
import { StatusProjetoComponent } from './gerenciamento/status-projeto/status-projeto.component';
import { FasesProjetoComponent } from './gerenciamento/fases-projeto/fases-projeto.component';
import { PermissaoComponent } from './gerenciamento/permissao/permissao.component';
import { CadastroEmpresaComponent } from './gerenciamento/empresa/cadastro-empresa/cadastro-empresa.component';
import { ConsultaEmpresaComponent } from './gerenciamento/empresa/consulta-empresa/consulta-empresa.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ConsultaProjetoComponent } from './projetos/consulta-projeto/consulta-projeto.component';
import { CadastroProdutoComponent } from './gerenciamento/produto/cadastro-produto/cadastro-produto.component';
import { ConsultaProdutoComponent } from './gerenciamento/produto/consulta-produto/consulta-produto.component';
import { ConsultaAplicativoComponent } from './gerenciamento/aplicativo/consulta-aplicativo/consulta-aplicativo.component';
import { CadastroAplicativoComponent } from './gerenciamento/aplicativo/cadastro-aplicativo/cadastro-aplicativo.component';
import { ConsultaProfissionalComponent } from './gerenciamento/profissional/consulta-profissional/consulta-profissional.component';
import { CadastroProfissionalComponent } from './gerenciamento/profissional/cadastro-profissional/cadastro-profissional.component';
import { CadastroUsuarioComponent } from './gerenciamento/usuario/cadastro-usuario/cadastro-usuario.component';
import { ConsultaUsuarioComponent } from './gerenciamento/usuario/consulta-usuario/consulta-usuario.component';
import { ConsultaPermissaoComponent } from './gerenciamento/permissao/consulta-permissao/consulta-permissao.component';
import { CadastroPermissaoComponent } from './gerenciamento/permissao/cadastro-permissao/cadastro-permissao.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuNavegacaoComponent,
    HomeComponent,
    ProjetosComponent,
    RelatoriosComponent,
    UsuarioComponent,
    PerfilUsuarioComponent,
    ContatoComponent,
    ProdutoComponent,
    SetorComponent,
    FuncaoComponent,
    ProfissionalComponent,
    EmpresaComponent,
    DepartamentoComponent,
    CadastroProjetoComponent,
    CadastroProdutoProjetoComponent,
    CadastroRequisitosProjetoComponent,
    CadastroResumoProjetoComponent,
    CadastroAtividadeComponent,
    HistoricoAtividadeComponent,
    AtividadeComponent,
    AplicativoComponent,
    StatusProjetoComponent,
    FasesProjetoComponent,
    PermissaoComponent,
    CadastroEmpresaComponent,
    ConsultaEmpresaComponent,
    RodapeComponent,
    ConsultaProjetoComponent,
    CadastroProdutoComponent,
    ConsultaProdutoComponent,
    ConsultaAplicativoComponent,
    CadastroAplicativoComponent,
    ConsultaProfissionalComponent,
    CadastroProfissionalComponent,
    CadastroUsuarioComponent,
    ConsultaUsuarioComponent,
    ConsultaPermissaoComponent,
    CadastroPermissaoComponent,
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrMasker4Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
