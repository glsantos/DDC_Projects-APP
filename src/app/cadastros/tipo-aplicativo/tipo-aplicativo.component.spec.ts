import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAplicativoComponent } from './tipo-aplicativo.component';

describe('TipoAplicativoComponent', () => {
  let component: TipoAplicativoComponent;
  let fixture: ComponentFixture<TipoAplicativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoAplicativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAplicativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
