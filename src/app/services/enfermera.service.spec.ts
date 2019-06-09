import { TestBed } from '@angular/core/testing';

import { EnfermeraService } from './enfermera.service';

describe('EnfermeraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnfermeraService = TestBed.get(EnfermeraService);
    expect(service).toBeTruthy();
  });
});
