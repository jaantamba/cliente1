import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEnfermeraComponent } from './formulario-enfermera.component';

describe('FormularioEnfermeraComponent', () => {
  let component: FormularioEnfermeraComponent;
  let fixture: ComponentFixture<FormularioEnfermeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEnfermeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEnfermeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
