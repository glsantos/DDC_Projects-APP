import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { MenuNavegacaoComponent } from './menu-navegacao/menu-navegacao.component';
import { ProjetosComponent } from './projetos/projetos.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  public constructor(private titleService: Title ) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  
  
}
