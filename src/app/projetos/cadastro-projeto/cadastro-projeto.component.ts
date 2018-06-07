import { Component, OnInit } from '@angular/core';



declare var $: any;
declare var JQuery: any;

@Component({
  selector: 'app-cadastro-projeto',
  templateUrl: './cadastro-projeto.component.html',
  styleUrls: ['./cadastro-projeto.component.css']
})
export class CadastroProjetoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    

    $('.modal').modal();
    $('select').material_select();
    $('ul.tabs').tabs(); 

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
    });

    $('#txt_escopoInicial').froalaEditor({
      placeholderText: 'Escreva aqui o Escopo Inicial do Projeto...'
    });
  }

  private pegaDado(){

    var nome = $("[name=txt_nome_projeto]").val();
    alert(nome);
  }
}
