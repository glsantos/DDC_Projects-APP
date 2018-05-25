import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDetalhamentoComponent } from './cadastro-detalhamento.component';

describe('CadastroDetalhamentoComponent', () => {
  let component: CadastroDetalhamentoComponent;
  let fixture: ComponentFixture<CadastroDetalhamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDetalhamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDetalhamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
