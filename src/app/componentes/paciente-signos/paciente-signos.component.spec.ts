import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteSignosComponent } from './paciente-signos.component';

describe('PacienteSignosComponent', () => {
  let component: PacienteSignosComponent;
  let fixture: ComponentFixture<PacienteSignosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteSignosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteSignosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
