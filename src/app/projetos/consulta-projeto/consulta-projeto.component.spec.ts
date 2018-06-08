import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaProjetoComponent } from './consulta-projeto.component';

describe('ConsultaProjetoComponent', () => {
  let component: ConsultaProjetoComponent;
  let fixture: ComponentFixture<ConsultaProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
