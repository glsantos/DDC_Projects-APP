import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroResumoComponent } from './cadastro-resumo.component';

describe('CadastroResumoComponent', () => {
  let component: CadastroResumoComponent;
  let fixture: ComponentFixture<CadastroResumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroResumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
