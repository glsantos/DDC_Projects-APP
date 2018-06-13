import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var JQuery: any;

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.modal').modal();
    $('select').material_select();
    $('ul.tabs').tabs();

  }

}
