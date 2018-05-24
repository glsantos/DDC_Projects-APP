import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var JQuery: any;


@Component({
  selector: 'app-modal-projetos',
  templateUrl: './modal-projetos.component.html',
  styleUrls: ['./modal-projetos.component.css']
})
export class ModalProjetosComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.modal').modal();
    $('select').material_select();
  }

  private pegaDado(){

    var nome = $("[name=txt_nome_projeto]").val();
    alert(nome);
  }

  private clickDate(){

    $('.datepicker').pickadate({

      monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'],
      weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      today: 'Hoje',
      clear: 'Limpar',
      close: 'OK',
      labelMonthNext: 'Próximo mês',
      labelMonthPrev: 'Mês anterior',
      labelMonthSelect: 'Selecione um mês',
      labelYearSelect: 'Selecione um ano',
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Definindo 15 anos depois do ano atual
      closeOnSelect: false, // Fechando após selecionar a data no calendário
      container: undefined, // ex. 'body' will append picker to body
    });
  }

}
