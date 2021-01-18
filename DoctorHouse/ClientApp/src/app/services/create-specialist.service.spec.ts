import { TestBed } from '@angular/core/testing';

import { CreateSpecialistService } from './create-specialist.service';

describe('CreateSpecialistService', () => {
  let service: CreateSpecialistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateSpecialistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
