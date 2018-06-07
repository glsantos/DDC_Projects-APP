import { Component, OnInit } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

declare let $: any;
declare let JQuery: any;
declare let Materialize: any;

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    $('select').material_select();
    $('.chips').material_chip();
    $('ul.tabs').tabs();
    $('.modal').modal();
    $('.collapsible').collapsible();

    //Materialize.updateTextFields();

    $('.chips-placeholder').material_chip({

      secondaryPlaceholder: '+Número',
    });
  }

  pegaTelefonesChips(){

    var i = 0;
    var telefoneArray = $('#txt_telefone_contato').material_chip('data');
    var tamanhoArray = telefoneArray.length;

    while (i < tamanhoArray){

      console.log(telefoneArray[i]);
      i++;
    }
  }

  onBlurResgataCep() {

    // Tirando a formatação do CEP e validando entrada de números sem letras
    var cep = $('#cepEmpresa').val().replace(/\D/g, '');

    if (cep != "") {
      let tamanho: number = (cep).lenght;
      // Validando tamanho da string informado no CEP
      if (tamanho < 8) {

        Materialize.toast('CEP inválido', 3000);
      } else {

        var cepJson = $('#cepEmpresa').val().replace(/\D/g, '');

        $.getJSON("https://viacep.com.br/ws/" + cepJson + "/json/?callback=?", function (dadosViaCep) {

          if (!("erro" in dadosViaCep)) {

            $("#logradouroEmpresa").val(dadosViaCep.logradouro);
            $("#bairroEmpresa").val(dadosViaCep.bairro);
            $("#cidadeEmpresa").val(dadosViaCep.localidade);
            $("#ufEmpresa").val(dadosViaCep.uf);

            Materialize.toast('Endereço encontrado!', 2000);
          } else {

            Materialize.toast('CEP inválido', 4000);
          }
        });
      }
    }
  }
}
