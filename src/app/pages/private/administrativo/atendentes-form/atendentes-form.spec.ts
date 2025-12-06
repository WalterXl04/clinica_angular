import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendentesForm } from './atendentes-form';

describe('AtendentesForm', () => {
  let component: AtendentesForm;
  let fixture: ComponentFixture<AtendentesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtendentesForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtendentesForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
