import { TestBed } from '@angular/core/testing';

import { PhoneEntryService } from './phone-entry.service';

describe('PhoneEntryService', () => {
  let service: PhoneEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
