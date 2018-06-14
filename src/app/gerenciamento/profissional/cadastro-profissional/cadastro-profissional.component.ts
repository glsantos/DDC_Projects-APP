import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-cadastro-profissional',
  templateUrl: './cadastro-profissional.component.html',
  styleUrls: ['./cadastro-profissional.component.css']
})
export class CadastroProfissionalComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.modal').modal();
    $('select').material_select();
    $('.collapsible').collapsible();
  }

}
