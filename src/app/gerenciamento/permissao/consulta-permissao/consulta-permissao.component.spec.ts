import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPermissaoComponent } from './consulta-permissao.component';

describe('ConsultaPermissaoComponent', () => {
  let component: ConsultaPermissaoComponent;
  let fixture: ComponentFixture<ConsultaPermissaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPermissaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPermissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
