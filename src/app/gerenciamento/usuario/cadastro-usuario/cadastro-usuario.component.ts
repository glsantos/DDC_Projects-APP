import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var JQuery: any;

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.modal').modal();
    $('select').material_select();
    $('.collapsible').collapsible();
  }

}
