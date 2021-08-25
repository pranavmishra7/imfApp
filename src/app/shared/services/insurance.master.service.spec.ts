import { TestBed } from '@angular/core/testing';

import { InsuranceMasterService } from './insurance.master.service';

describe('Insurance.MasterService', () => {
  let service: InsuranceMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    //service = TestBed.inject(Insurance.MasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
