import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var JQuery: any;

@Component({
  selector: 'app-consulta-aplicativo',
  templateUrl: './consulta-aplicativo.component.html',
  styleUrls: ['./consulta-aplicativo.component.css']
})
export class ConsultaAplicativoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.modal').modal();
    $('select').material_select();
  }

}
