import { TestBed } from '@angular/core/testing';

import { InsurancemasterService } from './insurancemaster.service';

describe('InsurancemasterService', () => {
  let service: InsurancemasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsurancemasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
