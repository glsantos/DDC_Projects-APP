import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

declare var $: any;
declare var JQuery: any;
declare var closeOnClick: any;

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {

    $('select').material_select();
    $('.collapsible').collapsible();
    
  }

  private clickDate(){

    $('.datepicker').pickadate({

      monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'],
      weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      weekdays: ['Domingo', 'Segunda','Terça','Quarta','Quinta','Sexta','Sabádo'],
      weekdaysAbbrev: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
      today: 'Hoje',
      clear: 'Limpar',
      close: 'Pronto',
      format: 'dd/mm/yyyy',
      labelMonthNext: 'Próximo mês',
      labelMonthPrev: 'Mês anterior',
      labelMonthSelect: 'Selecione um mês',
      labelYearSelect: 'Selecione um ano',
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Definindo 15 anos depois do ano atual
      closeOnSelect: true, // Fechando após selecionar a data no calendário
      container: undefined, // ex. 'body' will append picker to body
    });
  }
} 
