import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var JQuery: any;
declare var closeOnClick: any;

@Component({
  selector: 'app-servico-atividades',
  templateUrl: './servico-atividades.component.html',
  styleUrls: ['./servico-atividades.component.css']
})
export class ServicoAtividadesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('select').material_select();
  }


  
}
