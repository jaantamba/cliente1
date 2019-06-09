import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDoctorComponent } from './formulario-doctor.component';

describe('FormularioDoctorComponent', () => {
  let component: FormularioDoctorComponent;
  let fixture: ComponentFixture<FormularioDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
