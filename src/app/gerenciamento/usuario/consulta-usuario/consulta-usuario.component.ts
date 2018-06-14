import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var JQuery: any;
declare var Materialize: any;

@Component({
  selector: 'app-consulta-usuario',
  templateUrl: './consulta-usuario.component.html',
  styleUrls: ['./consulta-usuario.component.css']
})
export class ConsultaUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.tabs').tabs();
    $('.modal').modal();
    $('select').material_select();
    $('.collapsible').collapsible();
    Materialize.updateTextFields();
  }

}
