import { TestBed } from '@angular/core/testing';

import { OreoInfoService } from './oreo-info.service';

describe('OreoInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OreoInfoService = TestBed.get(OreoInfoService);
    expect(service).toBeTruthy();
  });
});
