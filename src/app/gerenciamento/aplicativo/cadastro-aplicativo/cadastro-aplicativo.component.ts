import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var JQuery: any;

@Component({
  selector: 'app-cadastro-aplicativo',
  templateUrl: './cadastro-aplicativo.component.html',
  styleUrls: ['./cadastro-aplicativo.component.css']
})
export class CadastroAplicativoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.modal').modal();
    $('select').material_select();
  }

}
