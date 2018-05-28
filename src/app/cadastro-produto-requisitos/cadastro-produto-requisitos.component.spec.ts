import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProdutoRequisitosComponent } from './cadastro-produto-requisitos.component';

describe('CadastroProdutoRequisitosComponent', () => {
  let component: CadastroProdutoRequisitosComponent;
  let fixture: ComponentFixture<CadastroProdutoRequisitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroProdutoRequisitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroProdutoRequisitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
