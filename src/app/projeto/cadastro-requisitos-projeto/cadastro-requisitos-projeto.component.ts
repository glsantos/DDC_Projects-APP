import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var JQuery: any;

@Component({
  selector: 'app-cadastro-requisitos-projeto',
  templateUrl: './cadastro-requisitos-projeto.component.html',
  styleUrls: ['./cadastro-requisitos-projeto.component.css']
})
export class CadastroRequisitosProjetoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('#txt_pre_requisitos_tecnicos').froalaEditor({
      placeholderText: 'Escreva aqui os Pré-Requisitos do Projeto...'
    });

    $('#txt_pontos_criticos').froalaEditor({
      placeholderText: 'Escreva aqui os Pontos Críticos do Projeto...'
    });
  }

}
