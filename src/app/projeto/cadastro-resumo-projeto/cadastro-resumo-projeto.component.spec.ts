import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroResumoProjetoComponent } from './cadastro-resumo-projeto.component';

describe('CadastroResumoProjetoComponent', () => {
  let component: CadastroResumoProjetoComponent;
  let fixture: ComponentFixture<CadastroResumoProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroResumoProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroResumoProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
