import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var Materialize: any;
declare var JQuery: any;

@Component({
  selector: 'app-aplicativo',
  templateUrl: './aplicativo.component.html',
  styleUrls: ['./aplicativo.component.css']
})
export class AplicativoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('ul.tabs').tabs();
    Materialize.updateTextFields();
  }

}
