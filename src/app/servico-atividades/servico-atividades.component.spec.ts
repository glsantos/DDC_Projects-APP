import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoAtividadesComponent } from './servico-atividades.component';

describe('ServicoAtividadesComponent', () => {
  let component: ServicoAtividadesComponent;
  let fixture: ComponentFixture<ServicoAtividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoAtividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoAtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
