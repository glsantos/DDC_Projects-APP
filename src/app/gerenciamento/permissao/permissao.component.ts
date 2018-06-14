import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var Materialize: any;

@Component({
  selector: 'app-permissao',
  templateUrl: './permissao.component.html',
  styleUrls: ['./permissao.component.css']
})
export class PermissaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.tabs').tabs();
    $('.collapsible').collapsible();
    Materialize.updateTextFields();
  }

}
