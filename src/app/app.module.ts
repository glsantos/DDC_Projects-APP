import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { MenuNavegacaoComponent } from './menu-navegacao/menu-navegacao.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';
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
import { ServicoAtividadesComponent } from './servico-atividades/servico-atividades.component';
import { CadastroProjetoComponent } from './cadastro-projeto/cadastro-projeto.component';
import { CadastroDetalhamentoComponent } from './cadastro-detalhamento/cadastro-detalhamento.component';
import { CadastroResumoComponent } from './cadastro-resumo/cadastro-resumo.component';
import { CadastroProdutoRequisitosComponent } from './cadastro-produto-requisitos/cadastro-produto-requisitos.component';


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
    ServicoAtividadesComponent,
    CadastroProjetoComponent,
    CadastroResumoComponent,
    CadastroDetalhamentoComponent,
    CadastroProdutoRequisitosComponent,
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
