import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEnfermeraComponent } from './lista-enfermera.component';

describe('ListaEnfermeraComponent', () => {
  let component: ListaEnfermeraComponent;
  let fixture: ComponentFixture<ListaEnfermeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEnfermeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEnfermeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
