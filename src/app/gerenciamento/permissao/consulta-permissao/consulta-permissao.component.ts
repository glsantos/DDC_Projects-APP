import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var JQuery: any;
declare var Materialize: any;

@Component({
  selector: 'app-consulta-permissao',
  templateUrl: './consulta-permissao.component.html',
  styleUrls: ['./consulta-permissao.component.css']
})
export class ConsultaPermissaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.tabs').tabs();
    $('.modal').modal();
    $('select').material_select();
    $('.collapsible').collapsible();
    Materialize.updateTextFields();
    $('.carousel').carousel();
  }

}
