import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroRequisitosProjetoComponent } from './cadastro-requisitos-projeto.component';

describe('CadastroRequisitosProjetoComponent', () => {
  let component: CadastroRequisitosProjetoComponent;
  let fixture: ComponentFixture<CadastroRequisitosProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroRequisitosProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroRequisitosProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
