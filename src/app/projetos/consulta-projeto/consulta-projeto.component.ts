import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var JQuery: any;
declare var tituloProjeto: any;
declare var Materialize: any;

@Component({
  selector: 'app-consulta-projeto',
  templateUrl: './consulta-projeto.component.html',
  styleUrls: ['./consulta-projeto.component.css']
})
export class ConsultaProjetoComponent implements OnInit {

  apps = [
    {
      aplicacao: 'Relatorio',
      descricao: 'detalhes né'
    },
    {
      aplicacao: 'Tela X',
      descricao: 'detalhesX né'
    },
    {
      aplicacao: 'Tela P',
      descricao: 'detalhesP né'
    },
    {
      aplicacao: 'Tela T',
      descricao: 'detalhesT né'
    },
    {
      aplicacao: 'Tela O',
      descricao: 'detalhesO né'
    },
  ]

  constructor() { }

  ngOnInit() {

    $('.modal').modal();
    $('select').material_select();

    this.carregaDadosProjeto();

    $('#modal_contentVisualizarProjeto').show();
    $('#modal_contentEditarProjeto').hide();
    $('#a').froalaEditor({
      placeholderText: 'Escreva aqui o Escopo Inicial do Projeto...'
    });
  }

  desbloquearEdicaoProjeto() {

    this.pegandoDados();

    $('#modal_contentVisualizarProjeto').hide();
    $('#modal_contentEditarProjeto').show();
  }

  bloquearEdicaoProjeto() {

    $('#modal_contentEditarProjeto').hide();
    $('#modal_contentVisualizarProjeto').show();

  }

  pegandoDados() {

    var tituloProjeto = $('#tituloProjeto').html();

    var dtInicioProjeto = $('#dtInicioProjeto').val();
    var dtFinalProjeto = $('#dtFinalProjeto').val();
    var clienteProjeto = $('#clienteProjeto').val();
    var responsavelProjeto = $('#responsavelProjeto').val();
    console.log(responsavelProjeto);

    $('#tituloEditProjeto').html(tituloProjeto);
    $('#dtInicialEditProjeto').val(dtInicioProjeto);
    $('#dtFinalEditProjeto').val(dtFinalProjeto);
    $('#clienteEditProjeto').val(clienteProjeto);

    $('#responsavelEditProjeto option').each(function (i) {

      if ($(this).val() == responsavelProjeto) {

        console.log('é igual', $(this).text('selected'));
        $(this).change();
      }
    });
    Materialize.updateTextFields();
  }

  carregaDadosProjeto() {

    $('#tituloProjeto').html('KeyStone Enterprise');
    $('#dtInicioProjeto').val('14/07/2000');
    $('#dtFinalProjeto').val('12/12/2000');
    $('#clienteProjeto').val('Alphavita');
    $('#responsavelProjeto').val('Gabriel Santos');
    $('#servicoProjeto').val('Desenvolvimento');
    $('#Produto').val('KeyStone Enterprise');


    // Faltam os APPS - realizar while para pgar todos os Headings e Body's
    $('#outro_servico').html('Descrição de Outros Serviços');
    $('#pre_requisitos').html('Descrição dos Pré-Requisitos');
    $('#ponto_critico').html('Descrição dos Pontos Críticos');
  }

}
