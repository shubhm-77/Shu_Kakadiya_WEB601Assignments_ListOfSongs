import { TestBed } from '@angular/core/testing';

import { CreatorserviceService } from './creatorservice.service';

describe('CreatorserviceService', () => {
  let service: CreatorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
