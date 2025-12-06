import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoAtendimentos } from './historico-atendimentos';

describe('HistoricoAtendimentos', () => {
  let component: HistoricoAtendimentos;
  let fixture: ComponentFixture<HistoricoAtendimentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoAtendimentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoAtendimentos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
