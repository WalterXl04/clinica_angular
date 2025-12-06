import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atendentes } from './atendentes';

describe('Atendentes', () => {
  let component: Atendentes;
  let fixture: ComponentFixture<Atendentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Atendentes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atendentes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
