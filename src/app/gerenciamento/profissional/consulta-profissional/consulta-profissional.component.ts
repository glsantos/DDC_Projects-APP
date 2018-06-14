import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-consulta-profissional',
  templateUrl: './consulta-profissional.component.html',
  styleUrls: ['./consulta-profissional.component.css']
})
export class ConsultaProfissionalComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.modal').modal();
    $('select').material_select();
  }

}
