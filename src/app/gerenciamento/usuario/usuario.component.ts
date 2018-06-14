import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var Materialize: any;

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.tabs').tabs();
    $('.collapsible').collapsible();
    Materialize.updateTextFields();
  }

}
