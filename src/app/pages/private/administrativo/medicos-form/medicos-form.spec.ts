import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosFormComponent } from './medicos-form';

describe('MedicosForm', () => {
  let component: MedicosFormComponent;
  let fixture: ComponentFixture<MedicosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicosFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
