import { TestBed } from '@angular/core/testing';

import { RemoteServiceService } from './remote-service.service';

describe('RemoteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoteServiceService = TestBed.get(RemoteServiceService);
    expect(service).toBeTruthy();
  });
});
