import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasForm } from './consultas-form';

describe('ConsultasForm', () => {
  let component: ConsultasForm;
  let fixture: ComponentFixture<ConsultasForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultasForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultasForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
