import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroRequisitosComponent } from './cadastro-requisitos.component';

describe('CadastroRequisitosComponent', () => {
  let component: CadastroRequisitosComponent;
  let fixture: ComponentFixture<CadastroRequisitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroRequisitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroRequisitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
