import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var JQuery: any;

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    $('select').material_select();

    $('.chips').material_chip();
   
    $('ul.tabs').tabs(); 
    $('.collapsible').collapsible();
   



    $('#txt_atividade').froalaEditor({
      placeholderText: 'Descreva a atividade/tarefa...'
    });
  }

}
