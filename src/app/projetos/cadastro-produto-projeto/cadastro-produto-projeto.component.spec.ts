import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProdutoProjetoComponent } from './cadastro-produto-projeto.component';

describe('CadastroProdutoProjetoComponent', () => {
  let component: CadastroProdutoProjetoComponent;
  let fixture: ComponentFixture<CadastroProdutoProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroProdutoProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroProdutoProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
