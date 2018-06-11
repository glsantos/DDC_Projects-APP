import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

declare var $: any;
declare var JQuery: any;
declare var closeOnClick: any;

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }

  constructor() { }

  title = 'interprise';
  ngOnInit() {

    
  }

  
}
