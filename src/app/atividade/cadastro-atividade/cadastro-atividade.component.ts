import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var JQuery: any;

@Component({
  selector: 'app-cadastro-atividade',
  templateUrl: './cadastro-atividade.component.html',
  styleUrls: ['./cadastro-atividade.component.css']
})
export class CadastroAtividadeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('select').material_select();
    $('ul.tabs').tabs(); 
    $('.checkbox').checkbox(); 
    $('.collapsible').collapsible();

    $('#txt_atividade').froalaEditor({
      placeholderText: 'Descreva a atividade/tarefa...'
    });

    $('.datepicker').pickadate({

      monthsFull: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
      monthsShort: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
      weekdaysFull: [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ],
      weekdaysShort: [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ],
      //Materialize modified
      weekdaysLetter: [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ],
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
      DefaultDate: '14/07/2017'
    });

    $('.timepicker').pickatime({
      default: 'now',
      twelvehour: false, // change to 12 hour AM/PM clock from 24 hour
      donetext: 'Pronto',
      cleartext:  'Limpar',
      autoclose: true,
      vibrate: true // vibrate the device when dragging clock hand
    });
  }

  abreModalPesquisarProjetos(){

    alert('a');
  }

}
