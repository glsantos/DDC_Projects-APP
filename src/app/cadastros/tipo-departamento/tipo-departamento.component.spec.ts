import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDepartamentoComponent } from './tipo-departamento.component';

describe('TipoDepartamentoComponent', () => {
  let component: TipoDepartamentoComponent;
  let fixture: ComponentFixture<TipoDepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
