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
import { ProjetosComponent } from './projeto/projetos/projetos.component';
import { HorasExtrasComponent } from './horas-extras/horas-extras.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { ControleAcessoComponent } from './controle-acesso/controle-acesso.component';
import { UsuarioComponent } from './cadastros/usuario/usuario.component';
import { PerfilUsuarioComponent } from './cadastros/perfil-usuario/perfil-usuario.component';
import { ContatoComponent } from './cadastros/contato/contato.component';
import { TipoAplicativoComponent } from './cadastros/tipo-aplicativo/tipo-aplicativo.component';
import { ProdutoComponent } from './cadastros/produto/produto.component';
import { SetorComponent } from './cadastros/setor/setor.component';
import { FuncaoComponent } from './cadastros/funcao/funcao.component';
import { ProfissionalComponent } from './cadastros/profissional/profissional.component';
import { EmpresaComponent } from './cadastros/empresa/empresa.component';
import { DepartamentoComponent } from './cadastros/departamento/departamento.component';
import { TipoDepartamentoComponent } from './cadastros/tipo-departamento/tipo-departamento.component';

import {CadastroProjetoComponent} from './projeto/cadastro-projeto/cadastro-projeto.component';
import { CadastroProdutoProjetoComponent } from './projeto/cadastro-produto-projeto/cadastro-produto-projeto.component';
import { CadastroRequisitosProjetoComponent } from './projeto/cadastro-requisitos-projeto/cadastro-requisitos-projeto.component';
import { CadastroResumoProjetoComponent } from './projeto/cadastro-resumo-projeto/cadastro-resumo-projeto.component';
import { CadastroAtividadeComponent } from './atividades/cadastro-atividade/cadastro-atividade.component';
import { HistoricoAtividadeComponent } from './atividades/historico-atividade/historico-atividade.component';
import { AtividadeComponent } from './atividades/atividade/atividade.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavegacaoComponent,
    HomeComponent,
    ProjetosComponent,
    HorasExtrasComponent,
    RelatoriosComponent,
    ControleAcessoComponent,
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
    TipoDepartamentoComponent,
    CadastroProjetoComponent,
    CadastroProdutoProjetoComponent,
    CadastroRequisitosProjetoComponent,
    CadastroResumoProjetoComponent,
    CadastroAtividadeComponent,
    HistoricoAtividadeComponent,
    AtividadeComponent,
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
