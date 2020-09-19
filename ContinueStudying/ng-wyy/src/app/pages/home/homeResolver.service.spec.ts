/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HomeResolverService } from './homeResolver.service';

describe('Service: HomeResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeResolverService]
    });
  });

  it('should ...', inject([HomeResolverService], (service: HomeResolverService) => {
    expect(service).toBeTruthy();
  }));
});
