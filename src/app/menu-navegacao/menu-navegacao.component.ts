import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var JQuery: any;
declare var closeOnClick: any;

@Component({
  selector: 'app-menu-navegacao',
  templateUrl: './menu-navegacao.component.html',
  styleUrls: ['./menu-navegacao.component.css']
})
export class MenuNavegacaoComponent implements OnInit {

  title = 'DDC Projects';
 
  constructor() { }

  ngOnInit() {
  }

  private itemDropCadastros(){

    alert('antes');
    $(".dropdown-trigger").dropdown();
    alert('depois');
  }

}
