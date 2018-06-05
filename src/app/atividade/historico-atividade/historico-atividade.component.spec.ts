import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoAtividadeComponent } from './historico-atividade.component';

describe('HistoricoAtividadeComponent', () => {
  let component: HistoricoAtividadeComponent;
  let fixture: ComponentFixture<HistoricoAtividadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoAtividadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
