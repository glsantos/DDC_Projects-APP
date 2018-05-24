import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProjetosComponent } from './modal-projetos.component';

describe('ModalProjetosComponent', () => {
  let component: ModalProjetosComponent;
  let fixture: ComponentFixture<ModalProjetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProjetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
