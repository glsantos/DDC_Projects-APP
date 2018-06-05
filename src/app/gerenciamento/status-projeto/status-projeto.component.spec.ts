import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusProjetoComponent } from './status-projeto.component';

describe('StatusProjetoComponent', () => {
  let component: StatusProjetoComponent;
  let fixture: ComponentFixture<StatusProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
