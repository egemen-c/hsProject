import { TestBed } from '@angular/core/testing';

import { AllDoctorsService } from './all-doctors.service';

describe('AllDoctorsService', () => {
  let service: AllDoctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllDoctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
