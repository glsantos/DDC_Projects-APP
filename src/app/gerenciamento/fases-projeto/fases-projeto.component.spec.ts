import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FasesProjetoComponent } from './fases-projeto.component';

describe('FasesProjetoComponent', () => {
  let component: FasesProjetoComponent;
  let fixture: ComponentFixture<FasesProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FasesProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FasesProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
