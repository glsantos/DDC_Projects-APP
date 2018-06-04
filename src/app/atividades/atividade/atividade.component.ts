import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var JQuery: any;

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('select').material_select();
    $('ul.tabs').tabs(); 
    $('.tabs').tabs();
    $('.collapsible').collapsible();
  }

}
