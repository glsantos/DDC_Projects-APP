import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var JQuery: any;

@Component({
  selector: 'app-cadastro-produto-projeto',
  templateUrl: './cadastro-produto-projeto.component.html',
  styleUrls: ['./cadastro-produto-projeto.component.css']
})
export class CadastroProdutoProjetoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#txt_aplicativo').froalaEditor({
      placeholderText: 'Detalhe a funcionalidade deste aplicativo...'
    });

    $('#txt_servicos').froalaEditor({
      placeholderText: 'Detalhe outros possíveis serviços...'
    });
    
  }

}
