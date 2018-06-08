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

  constructor() { }

  ngOnInit() {

    $('.modal').modal();
    $('select').material_select();

    $('#modal_contentVisualizarProjeto').show();
    $('#modal_contentEditarProjeto').hide();
    $('#a').froalaEditor({
      placeholderText: 'Escreva aqui o Escopo Inicial do Projeto...'
    });
  }

  desbloquearEdicaoProjeto(){
    
    this.pegandoDados();

    $('#modal_contentVisualizarProjeto').hide();
    $('#modal_contentEditarProjeto').show();
  }

  pegandoDados(){

    var tituloProjeto = $('#tituloProjeto').html();

    var dtInicioProjeto = $('#dtInicioProjeto').val();
    var dtFinalProjeto = $('#dtFinalProjeto').val();
    var clienteProjeto = $('#clienteProjeto').val();
    var app1 = $('#CollapsibleTexto').html();
   
    $('#tituloEditProjeto').html(tituloProjeto);
    
    $('#dtInicialEditProjeto').val(dtInicioProjeto);
    $('#dtFinalEditProjeto').val(dtFinalProjeto);
    $('#clienteEditProjeto').val(clienteProjeto);
    $('#collapsible1EditProjeto').html(app1);
    
    Materialize.updateTextFields();
  }

  bloquearEdicaoProjeto(){

    $('#modal_contentEditarProjeto').hide();
    $('#modal_contentVisualizarProjeto').show();
  }

}
