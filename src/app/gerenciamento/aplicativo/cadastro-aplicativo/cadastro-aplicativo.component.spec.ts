import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAplicativoComponent } from './cadastro-aplicativo.component';

describe('CadastroAplicativoComponent', () => {
  let component: CadastroAplicativoComponent;
  let fixture: ComponentFixture<CadastroAplicativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAplicativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAplicativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
