import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { MenuNavegacaoComponent } from './menu-navegacao/menu-navegacao.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { UsuarioComponent } from './gerenciamento/usuario/usuario.component';
import { PerfilUsuarioComponent } from './gerenciamento/usuario/perfil-usuario/perfil-usuario.component';
import { ContatoComponent } from './gerenciamento/contato/contato.component';
import { TipoAplicativoComponent } from './gerenciamento/aplicativo/tipo-aplicativo/tipo-aplicativo.component';
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
    TipoAplicativoComponent,
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
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
