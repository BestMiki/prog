import { TestBed } from '@angular/core/testing';

import { ZdwwwService } from './zdwww.service';

describe('ZdwwwService', () => {
  let service: ZdwwwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZdwwwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
