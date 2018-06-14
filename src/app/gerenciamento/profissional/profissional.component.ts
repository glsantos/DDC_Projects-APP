import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var Materialize: any;
declare var JQuery: any;

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('ul.tabs').tabs();
    Materialize.updateTextFields();
  }

}
