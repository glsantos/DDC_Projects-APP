import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAplicativoComponent } from './consulta-aplicativo.component';

describe('ConsultaAplicativoComponent', () => {
  let component: ConsultaAplicativoComponent;
  let fixture: ComponentFixture<ConsultaAplicativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaAplicativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAplicativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
